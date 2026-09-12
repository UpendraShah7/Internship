import { useParams, Link } from 'react-router-dom';
import { useUserQuery } from '../hooks/user.queries';

function UserDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useUserQuery(id as string);

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
