import { createUser, deleteUser, getUsers, updateUser } from './userApi.js';
import {
  closeForm,
  getFormValue,
  openForm,
  renderUsers,
  setStatus,
  showLoading,
} from './userUi.js';

let users = [];
let formMode = 'create';

async function loadUsers() {
  showLoading();

  try {
    users = await getUsers();
    renderUsers(users);
  } catch (error) {
    console.error(`Request failed: ${error.message}`);
  }
}

function getCreatePayload() {
  return {
    email: getFormValue('u-email'),
    username: getFormValue('u-username'),
    password: getFormValue('u-password'),
    name: {
      firstname: getFormValue('u-first'),
      lastname: getFormValue('u-last'),
    },
    address: {
      city: getFormValue('u-city') || 'N/A',
      street: 'N/A',
      number: 0,
      zipcode: '00000',
      geolocation: { lat: '0', long: '0' },
    },
    phone: getFormValue('u-phone') || 'N/A',
  };
}

function getEditPayload() {
  return {
    email: getFormValue('u-email'),
    name: {
      firstname: getFormValue('u-first'),
      lastname: getFormValue('u-last'),
    },
    address: { city: getFormValue('u-city') || 'N/A' },
    phone: getFormValue('u-phone') || 'N/A',
  };
}

function validateCreate(payload) {
  const { firstname, lastname } = payload.name;
  if (
    !payload.email ||
    !payload.username ||
    !payload.password ||
    !firstname ||
    !lastname
  ) {
    return 'First name, last name, email, username, and password are required.';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return 'Enter a valid email address.';
  }
  if (payload.password.length < 6) {
    return 'Password must be at least 6 characters.';
  }
  return '';
}

function validateEdit(payload) {
  if (!payload.email || !payload.name.firstname || !payload.name.lastname) {
    return 'First name, last name, and email are required.';
  }
  return '';
}

async function submitCreate() {
  const payload = getCreatePayload();
  const errorMessage = validateCreate(payload);
  if (errorMessage) {
    setStatus(errorMessage, 'err');
    return;
  }

  try {
    await createUser(payload);
    const id = Math.floor(Math.random() * 901) + 100;
    users.push({ ...payload, id });
    renderUsers(users);
    closeForm();
  } catch (error) {
    setStatus(`Create failed: ${error.message}`, 'err');
    console.error(`Request failed: ${error.message}`);
  }
}

async function submitEdit() {
  const id = getFormValue('u-id');
  const payload = getEditPayload();
  const errorMessage = validateEdit(payload);
  if (errorMessage) {
    setStatus(errorMessage, 'err');
    return;
  }

  try {
    await updateUser(id, payload);
    const index = users.findIndex((user) => user.id === Number(id));
    if (index !== -1) users[index] = { ...users[index], ...payload };
    renderUsers(users);
    closeForm();
  } catch (error) {
    setStatus(`Update failed: ${error.message}`, 'err');
    console.error(`Request failed: ${error.message}`);
  }
}

document.getElementById('btn-new-user').addEventListener('click', () => {
  const form = document.getElementById('user-form');
  if (form.style.display === 'block') {
    closeForm();
  } else {
    formMode = 'create';
    openForm(formMode);
  }
});

document.getElementById('btn-cancel-form').addEventListener('click', closeForm);

document
  .getElementById('user-table-body')
  .addEventListener('click', async (event) => {
    const button = event.target;
    const id = Number(button.dataset.id);

    if (button.classList.contains('btn-edit')) {
      const user = users.find((item) => item.id === id);
      if (user) {
        formMode = 'edit';
        openForm(formMode, user);
      }
      return;
    }

    if (button.classList.contains('btn-delete') && confirm('Are you sure?')) {
      try {
        await deleteUser(id);
        users = users.filter((user) => user.id !== id);
        renderUsers(users);
      } catch (error) {
        alert(`Delete failed: ${error.message}`);
        console.error(`Request failed: ${error.message}`);
      }
    }
  });

document.getElementById('btn-submit-user').addEventListener('click', () => {
  if (formMode === 'edit') {
    submitEdit();
  } else {
    submitCreate();
  }
});

loadUsers();
