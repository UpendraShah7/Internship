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