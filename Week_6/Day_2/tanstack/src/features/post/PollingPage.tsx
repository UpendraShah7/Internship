import { useState } from 'react';
import {
  usePostsQuery,
  useDeletePostMutation,
  useUpdatePostMutation,
  useCreatePostMutation,
} from './post.queries';

function PollingPage() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = usePostsQuery(page);
  const deleteMutation = useDeletePostMutation(page);
  const updateMutation = useUpdatePostMutation(page);
  const createMutation = useCreatePostMutation(page);

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
          <p className="eyebrow">Auto-refreshing every 100 seconds</p>
          <h1>Latest posts</h1>
          <p className="intro">A live feed powered by TanStack Query.</p>
        </div>
        <span className="live-indicator">
          <span /> Live
        </span>
      </header>

      <button
        className="create-button"
        onClick={() =>
          createMutation.mutate({ title: 'New Post' })
        }
      >
        Create Post
      </button>
      <section className="post-list" aria-label="Latest posts">
        {data?.map((post, index) => (
          <article className="post-item" key={post.id}>
            <span className="post-number">
              {String((page - 1) * 5 + index + 1).padStart(2, '0')}
            </span>
            <h2>{post.title}</h2>

            <button
              className="update-button"
              onClick={() =>
                updateMutation.mutate({
                  id: post.id,
                  post: { title: 'New title updated' },
                })
              }
            >
              Update
            </button>
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
