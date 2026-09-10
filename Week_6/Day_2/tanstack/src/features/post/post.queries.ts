import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { postApi } from './post.api';
import type { Post } from './post.schema';

export const postKeys = {
  all: ['latest-posts'] as const,
  list: (page: number) => [...postKeys.all, page] as const,
};

export const usePostsQuery = (page: number) =>
  useQuery({
    queryKey: postKeys.list(page),
    queryFn: () => postApi.getLatest(page),
    refetchInterval: 100 * 1000,
    refetchIntervalInBackground: true,
    staleTime: 100 * 1000,
    gcTime: 30 * 1000,
  });

export const useDeletePostMutation = (page: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => postApi.delete(id),
    onSuccess: (_, deletedId) => {
      queryClient.setQueryData<Post[]>(postKeys.list(page), (posts) =>
        posts?.filter((post) => post.id !== deletedId)
      );
    },
  });
};

export const useUpdatePostMutation = (page: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, post }: { id: number; post: Partial<Post> }) =>
      postApi.update(id, post),
    onSuccess: (data, { id }) => {
      queryClient.setQueryData<Post[]>(postKeys.list(page), (posts) =>
        posts?.map((post) => (post.id === id ? data : post))
      );
    },
  });
};


export const useCreatePostMutation = (page: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (post: Omit<Post, 'id'>) => postApi.create(post),
    onSuccess: (data) => {
      queryClient.setQueryData<Post[]>(postKeys.list(page), (posts) =>
        posts ? [data, ...posts] : [data]
      );
    },
  });
};