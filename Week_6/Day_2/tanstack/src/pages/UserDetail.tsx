import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
}

const getUser = async (id: string): Promise<User> => {
  const { data } = await axios.get<User>(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return data;
};

function UserDetailPage() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUser(id as string),
    staleTime: 5 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });

  if (isLoading)
    return (
      <main className="page-shell">
        <p className="status">Loading profile...</p>
      </main>
    );
  if (isError)
    return (
      <main className="page-shell">
        <p className="status status-error">Error: {(error as Error).message}</p>
      </main>
    );

  return (
    <main className="page-shell detail-page">
      <Link className="back-link" to="/">
        &lt;- Back to users
      </Link>
      <article className="profile-card">
        <span className="profile-avatar">{data?.name.charAt(0)}</span>
        <p className="eyebrow">User profile</p>
        <h1>{data?.name}</h1>
        <p className="profile-email">{data?.email}</p>
      </article>
    </main>
  );
}

export default UserDetailPage;
