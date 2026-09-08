import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
}

const getLatestPosts = async (): Promise<Post[]> => {
  const { data } = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );
  return data;
};

function PollingPage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['latest-posts'],
    queryFn: getLatestPosts,
    refetchInterval: 1 * 1000, // poll every 10 seconds while this page is open
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
            <span className="post-number">0{index + 1}</span>
            <h2>{post.title}</h2>
          </article>
        ))}
      </section>
    </main>
  );
}

export default PollingPage;
