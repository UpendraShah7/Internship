// ── component ── src/features/users/UsersPage.tsx
import { Link } from 'react-router-dom';
import { useUsersQuery } from './user.queries';

function UsersPage() {
  const { data, isLoading, isError, error, refetch } = useUsersQuery();

  if (isLoading)
    return (
      <main className="page-shell">
        <p className="status">Loading users...</p>
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
          <p className="eyebrow">Directory</p>
          <h1>People worth knowing</h1>
          <p className="intro">
            Browse the team and open a profile for more details.
          </p>
        </div>
        <button className="button button-secondary" onClick={() => refetch()}>
          Refresh list
        </button>
      </header>

      <section className="user-grid" aria-label="Users">
        {data?.map((user) => (
          <Link className="user-card" key={user.id} to={`/users/${user.id}`}>
            <span className="avatar">{user.name.charAt(0)}</span>
            <span className="user-card-copy">
              <strong>{user.name}</strong>
              <span>{user.email}</span>
            </span>
            <span className="card-arrow" aria-hidden="true">
              -&gt;
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default UsersPage;