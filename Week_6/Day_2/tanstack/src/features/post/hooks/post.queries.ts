import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { postApi } from '../api/post.api';
import type { Post } from '../schema/post.schema';

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
    staleTime: 8 * 1000,
    gcTime: 12 * 1000,
  });

export const useDeletePostMutation = (page: number) => {
  const queryClient = useQueryClient();
  const queryKey = postKeys.list(page);

  return useMutation({
    mutationFn: (id: number) => postApi.delete(id),

    onMutate: async (deletedId) => {
      await queryClient.cancelQueries({ queryKey });

      const previousPosts = queryClient.getQueryData<Post[]>(queryKey);

     
      queryClient.setQueryData<Post[]>(queryKey, (posts) =>
        posts?.filter((post) => post.id !== deletedId)
      );

      return { previousPosts };
    },

    onError: (_err, _deletedId, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(queryKey, context.previousPosts);
      }
    },

      // onSettled: () => {
      //   queryClient.invalidateQueries({ queryKey });
      // },
  });
};

export const useUpdatePostMutation = (page: number) => {
  const queryClient = useQueryClient();
  const queryKey = postKeys.list(page);

  return useMutation({
    mutationFn: ({ id, post }: { id: number; post: Partial<Post> }) =>
      postApi.update(id, post),

    onMutate: async ({ id, post }) => {
     
      await queryClient.cancelQueries({ queryKey });
     
      const previousPosts = queryClient.getQueryData<Post[]>(queryKey);

      queryClient.setQueryData<Post[]>(queryKey, (posts) =>
        posts?.map((p) => (p.id === id ? { ...p, ...post } : p))
      );

      return { previousPosts }; 
    },

    onError: (_err, _variables, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(queryKey, context.previousPosts);
      }
    },

    onSettled: () => {
      // resync with server truth either way
      // queryClient.invalidateQueries({ queryKey });
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
