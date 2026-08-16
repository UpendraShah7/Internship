const URL = 'https://fakestoreapi.com/users';
let allUsers = [];

function renderUsers(users) {
  const tbody = document.getElementById('user-table-body');
  tbody.innerHTML = '';
  users.forEach((u) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
                <td>${u.name.firstname} ${u.name.lastname}</td>
                <td>${u.email}</td>
                <td>${u.phone ?? '—'}</td>
                <td>${u.address?.city ?? '—'}</td>
                <td>
                    <button class="btn-edit" data-id="${u.id}">Edit</button>
                    <button class="btn-delete" data-id="${u.id}">Delete</button>
                </td>`;
    tbody.appendChild(tr);
  });
  document.querySelector('.table-footer span').textContent =
    `Total ${users.length} users`;
}

async function loadUsers() {
  const tbody = document.getElementById('user-table-body');
  tbody.innerHTML = `
  <tr>
  <td colspan="5">Loading Data...</td>
  </tr>`;

  try {
    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    allUsers = await res.json();
    renderUsers(allUsers);
  } catch (err) {
    console.error(`Request failed: ${err.message}`);
  }
}

loadUsers();

// Show/hide the create form
document.getElementById('btn-new-user').addEventListener('click', () => {
  const form = document.getElementById('create-form');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
});

// Submit the create form
document
  .getElementById('btn-submit-create')
  .addEventListener('click', async () => {
    const statusEl = document.getElementById('create-status');

    const email = document.getElementById('c-email').value.trim();
    const username = document.getElementById('c-username').value.trim();
    const password = document.getElementById('c-password').value.trim();
    const firstname = document.getElementById('c-first').value.trim();
    const lastname = document.getElementById('c-last').value.trim();
    const phone = document.getElementById('c-phone').value.trim();
    const city = document.getElementById('c-city').value.trim();

    if (!email || !username || !password || !firstname || !lastname) {
      statusEl.textContent =
        'First name, last name, email, username, and password are required.';
      statusEl.className = 'status show err';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      statusEl.textContent = 'Enter a valid email address.';
      statusEl.className = 'status show err';
      return;
    }

    if (password.length < 6) {
      statusEl.textContent = 'Password must be at least 6 characters.';
      statusEl.className = 'status show err';
      return;
    }

    const payload = {
      email,
      username,
      password,
      name: { firstname, lastname },
      address: {
        city: city || 'N/A',
        street: 'N/A',
        number: 0,
        zipcode: '00000',
        geolocation: { lat: '0', long: '0' },
      },
      phone: phone || 'N/A',
    };

    try {
      const res = await fetch(`${URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();

      const newUser = {
        ...payload,
        id: data.id,
      };

      allUsers.push(newUser);
      renderUsers(allUsers);

      statusEl.textContent = `Created user with id ${data.id}`;
      statusEl.className = 'status show ok';
    } catch (err) {
      statusEl.textContent = `Create failed: ${err.message}`;
      statusEl.className = 'status show err';
      console.error(`Request failed: ${err.message}`);
    }
  });

//Edit form
// Open the edit form when an Edit button is clicked (event delegation,
// since rows are created dynamically by renderUsers)
document.getElementById('user-table-body').addEventListener('click', (e) => {
  if (!e.target.classList.contains('btn-edit')) return;

  const id = Number(e.target.dataset.id);
  const user = allUsers.find((u) => u.id === id);
  if (!user) return;

  document.getElementById('e-id').value = user.id;
  document.getElementById('e-first').value = user.name.firstname;
  document.getElementById('e-last').value = user.name.lastname;
  document.getElementById('e-email').value = user.email;
  document.getElementById('e-phone').value = user.phone ?? '';
  document.getElementById('e-city').value = user.address?.city ?? '';

  document.getElementById('create-form').style.display = 'none';
  document.getElementById('edit-form').style.display = 'block';
});

document.getElementById('btn-cancel-edit').addEventListener('click', () => {
  document.getElementById('edit-form').style.display = 'none';
});

// Submit the edit form
document
  .getElementById('btn-submit-edit')
  .addEventListener('click', async () => {
    const statusEl = document.getElementById('edit-status');
    const id = document.getElementById('e-id').value;

    const firstname = document.getElementById('e-first').value.trim();
    const lastname = document.getElementById('e-last').value.trim();
    const email = document.getElementById('e-email').value.trim();
    const phone = document.getElementById('e-phone').value.trim();
    const city = document.getElementById('e-city').value.trim();

    if (!firstname || !lastname || !email) {
      statusEl.textContent = 'First name, last name, and email are required.';
      statusEl.className = 'status show err';
      return;
    }

    const payload = {
      email,
      name: { firstname, lastname },
      address: { city: city || 'N/A' },
      phone: phone || 'N/A',
    };

    try {
      const res = await fetch(`${URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.status === 404) throw new Error('User not found');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      // fakestoreapi doesn't persist, so updating local copy directly
      const index = allUsers.findIndex((u) => u.id === Number(id));
      if (index !== -1) {
        allUsers[index] = { ...allUsers[index], ...payload };
        renderUsers(allUsers);
      }

      statusEl.textContent = `Updated user ${id}`;
      statusEl.className = 'status show ok';
      document.getElementById('edit-form').style.display = 'none';
    } catch (err) {
      statusEl.textContent = `Update failed: ${err.message}`;
      statusEl.className = 'status show err';
      console.error(`Request failed: ${err.message}`);
    }
  });

// Delete
document
  .getElementById('user-table-body')
  .addEventListener('click', async (e) => {
    if (!e.target.classList.contains('btn-delete')) retur;

    const id = e.target.dataset.id;
    const confirmed = confirm('Are you sure?');
    if (!confirmed) return;

    try {
      const res = await fetch(`${URL}/${id}`, { method: 'DELETE' });

      if (res.status === 404) throw new Error('User not found');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      // fakestoreapi doesn't persist, so remove locally
      allUsers = allUsers.filter((u) => u.id !== Number(id));
      renderUsers(allUsers);
    } catch (err) {
      alert(`Delete failed: ${err.message}`);
      console.error(`Request failed: ${err.message}`);
    }
  });
