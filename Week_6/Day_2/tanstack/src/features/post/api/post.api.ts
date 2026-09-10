import axios from 'axios';
import { postListSchema, postSchema, type Post } from '../schema/post.schema';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const postApi = {
  getLatest: async (page: number): Promise<Post[]> => {
    const { data } = await axios.get<Post[]>(BASE_URL, {
      params: { _start: (page - 1) * 5 + 1, _limit: 5 },
    });
    return postListSchema.parse(data);
  },

  delete: async (id: number): Promise<void> => {
    await axios.delete(`${BASE_URL}/${id}`);
  },

  update: async (id: number, post: Partial<Post>): Promise<Post> => {
    const { data } = await axios.put<Post>(`${BASE_URL}/${id}`, post);
    return postSchema.parse(data);
  },

  create: async (post: Omit<Post, 'id'>): Promise<Post> => {
    const { data } = await axios.post<Post>(BASE_URL, post);
    return postSchema.parse(data);
  },
};
