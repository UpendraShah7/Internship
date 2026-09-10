import { useQuery } from '@tanstack/react-query';
import { userApi } from './user.api';

export const userKeys = {
  all: ['users'] as const,
  detail: (id: string) => [...userKeys.all, id] as const,
};

export const useUsersQuery = () =>
  useQuery({
    queryKey: userKeys.all,
    queryFn: userApi.getAll,
    staleTime: 10 * 1000,
    gcTime: 30 * 1000,
  });

export const useUserQuery = (id: string) =>
  useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => userApi.getById(id),
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 1000,
  });

  