import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthUser {
  id: string;
  fullName: string;
  email: string;
  password: string;
}

interface AuthStore {
  currentUser: AuthUser | null;
  isAuthenticated: boolean;
  registeredUsers: AuthUser[];
  register: (user: AuthUser) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      currentUser: null,
      isAuthenticated: false,
      registeredUsers: [],

      register: (user) => {
        set((state) => ({
          registeredUsers: [...state.registeredUsers, user],
        }));
      },

      login: (email, password) => {
        const found = get().registeredUsers.find(
          (u) => u.email === email && u.password === password
        );
        if (found) {
          set({ currentUser: found, isAuthenticated: true });
          return true;
        }
        return false;
      },

      logout: () => {
        set({ currentUser: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useAuthStore;