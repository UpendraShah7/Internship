export function renderUsers(users) {
  const tbody = document.getElementById('user-table-body');
  tbody.innerHTML = '';

  users.forEach((user) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.name.firstname} ${user.name.lastname}</td>
      <td>${user.email}</td>
      <td>${user.phone ?? '-'}</td>
      <td>${user.address?.city ?? '-'}</td>
      <td>
        <button class="btn-edit" data-id="${user.id}">Edit</button>
        <button class="btn-delete" data-id="${user.id}">Delete</button>
      </td>`;
    tbody.appendChild(row);
  });

  document.querySelector('.table-footer span').textContent =
    `Total ${users.length} users`;
}

export function showLoading() {
  document.getElementById('user-table-body').innerHTML = `
    <tr><td colspan="5">Loading Data...</td></tr>`;
}

export function setStatus(message, type = '') {
  const status = document.getElementById('form-status');
  status.textContent = message;
  status.className = type ? `status show ${type}` : 'status';
}

export function openForm(mode, user = null) {
  setStatus();

  const isEdit = mode === 'edit' && user;
  document.getElementById('form-title').textContent = isEdit
    ? 'Edit User'
    : 'Create New User';
  document.getElementById('btn-submit-user').textContent = isEdit
    ? 'Save Changes'
    : 'Save User';
  document.getElementById('btn-cancel-form').style.display = isEdit
    ? 'inline-block'
    : 'none';
  document.getElementById('u-username-field').style.display = isEdit
    ? 'none'
    : '';
  document.getElementById('u-password-field').style.display = isEdit
    ? 'none'
    : '';

  const values = isEdit
    ? {
        'u-id': user.id,
        'u-first': user.name.firstname,
        'u-last': user.name.lastname,
        'u-email': user.email,
        'u-phone': user.phone ?? '',
        'u-city': user.address?.city ?? '',
      }
    : {
        'u-id': '',
        'u-first': '',
        'u-last': '',
        'u-email': '',
        'u-username': '',
        'u-password': '',
        'u-phone': '',
        'u-city': '',
      };

  Object.entries(values).forEach(([id, value]) => {
    document.getElementById(id).value = value;
  });

  document.getElementById('user-form').style.display = 'block';
  getUserListCard().style.display = 'none';
}

export function closeForm() {
  document.getElementById('user-form').style.display = 'none';
  getUserListCard().style.display = '';
}

export function getFormValue(id) {
  return document.getElementById(id).value.trim();
}

function getUserListCard() {
  return document.getElementById('user-table-body').closest('.card');
}
