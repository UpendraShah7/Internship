import axios from 'axios';
import { userSchema, userListSchema, type User } from './user.schema';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const userApi = {
  getAll: async (): Promise<User[]> => {
    const { data } = await axios.get(BASE_URL); 
    return userListSchema.parse(data); 
  },

  getById: async (id: string): Promise<User> => {
    const { data } = await axios.get(`${BASE_URL}/${id}`); 
    return userSchema.parse(data); 
  },
};