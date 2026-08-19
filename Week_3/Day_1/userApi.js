const URL = 'https://fakestoreapi.com/users';

async function request(url, options) {
  const response = await fetch(url, options);

  if (response.status === 404) {
    throw new Error('User not found');
  }

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response;
}

export async function getUsers() {
  const response = await request(URL);
  return response.json();
}

export async function deleteUser(id) {
  await request(`${URL}/${id}`, { method: 'DELETE' });
}

export async function createUser(user) {
  await request(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
}

export async function updateUser(id, user) {
  await request(`${URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
}
