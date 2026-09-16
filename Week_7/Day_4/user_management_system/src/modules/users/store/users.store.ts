import { create } from 'zustand';
import { type User } from '../types/user.types';

interface UsersState {
  users: User[];
  addUser: (user: Omit<User, 'id'>) => void;
  updateUser: (id: string, user: Omit<User, 'id'>) => void;
  deleteUser: (id: string) => void;
}

export const useUsersStore = create<UsersState>((set) => ({
  users: [],

  addUser: (user) =>
    set((state) => ({
      users: [...state.users, { ...user, id: crypto.randomUUID() }],
    })),

  updateUser: (id, user) =>
    set((state) => ({
      users: state.users.map((u) => (u.id === id ? { ...user, id } : u)),
    })),

  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((u) => u.id !== id),
    })),
}));