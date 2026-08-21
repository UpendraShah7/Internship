interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const user: User = {
  id: 1,
  name: 'Ram',
  email: 'ram@gmail.com',
  password: 'secret123',
};

const update: Partial<User> = {  };

const preview: Pick<User, 'id' | 'name'> = { id: user.id, name: user.name };

const publicUser: Omit<User, 'password'> = {
  id: user.id,
  name: user.name,
  email: user.email,
};

const snapshot: Readonly<User> = user;

const usersById: Record<number, User> = {
  1: user,
};

console.log('Update payload:', update);
console.log('Preview:', preview);
console.log('Public user:', publicUser);
console.log('Snapshot:', snapshot);
console.log('Lookup by id 1:', usersById[1]);
