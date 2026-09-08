import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

interface Post {
  id: number;
  title: string;
}

const getLatestPosts = async (page: number): Promise<Post[]> => {
  const { data } = await axios.get<Post[]>(
    `https://jsonplaceholder.typicode.com/posts?_start=${(page - 1) * 5 + 1}&_limit=5`
  );
  return data;
};

function PollingPage() {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (id: number) =>
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`),
    onSuccess: (_, deletedId) => {
      queryClient.setQueryData<Post[]>(['latest-posts', page], (posts) =>
        posts?.filter((post) => post.id !== deletedId)
      );
    },
  });

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['latest-posts', page],
    queryFn: () => getLatestPosts(page),
    refetchInterval: 100 * 1000, // poll every 100 seconds while this page is open
    refetchIntervalInBackground: true, // keep polling even if the tab loses focus
  });

  if (isLoading)
    return (
      <main className="page-shell">
        <p className="status">Loading posts...</p>
      </main>
    );
  if (isError)
    return (
      <main className="page-shell">
        <p className="status status-error">Error: {(error as Error).message}</p>
      </main>
    );

  return (
    <main className="page-shell">
      <header className="page-heading">
        <div>
          <p className="eyebrow">Auto-refreshing every 10 seconds</p>
          <h1>Latest posts</h1>
          <p className="intro">A live feed powered by TanStack Query.</p>
        </div>
        <span className="live-indicator">
          <span /> Live
        </span>
      </header>
      <section className="post-list" aria-label="Latest posts">
        {data?.map((post, index) => (
          <article className="post-item" key={post.id}>
            <span className="post-number">
              {String((page - 1) * 5 + index + 1).padStart(2, '0')}
            </span>
            <h2>{post.title}</h2>
            <button
              onClick={() => deleteMutation.mutate(post.id)}
              className="delete-button"
            >
              Delete
            </button>
          </article>
        ))}
      </section>

      <footer className="pagination">
        <button
          className="pagination-button"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>

        <span>Page {page}</span>

        <button
          className="pagination-button"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </footer>
    </main>
  );
}

export default PollingPage;
