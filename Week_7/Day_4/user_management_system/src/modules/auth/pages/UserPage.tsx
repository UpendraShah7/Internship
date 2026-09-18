import React from 'react';

import useAuthStore from '../../auth/store/auth.store';
import { useNavigate } from 'react-router-dom';
import { useUsersStore } from '../../users/store/users.store';
import type { User } from '../../users/types/user.types';
import { UserForm } from '../../users/components/UserForm';
import UserTable from '../../users/components/UserTable';

const UsersPage: React.FC = () => {
  const navigate = useNavigate();
  const { users, deleteUser } = useUsersStore();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleEdit = (user: User) => {
    console.log('edit', user);
  };

  return (
    <main className="dashboard-page">
      <header className="dashboard-header">
        <div>
          <p className="auth-eyebrow">User management</p>
          <h1>Workspace</h1>
          <p className="dashboard-subtitle">
            Create, review, and maintain your users in one place.
          </p>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Log out
        </button>
      </header>

      <div className="dashboard-grid">
        <section
          className="dashboard-panel form-panel"
          aria-labelledby="user-form-title"
        >
          <div className="panel-heading">
            <div>
              <p className="panel-kicker">New record</p>
              <h2 id="user-form-title">Add a user</h2>
            </div>
            <span className="panel-number">01</span>
          </div>
          <UserForm onDone={() => {}} />
        </section>

        <section
          className="dashboard-panel table-panel"
          aria-labelledby="user-list-title"
        >
          <div className="panel-heading">
            <div>
              <p className="panel-kicker">Directory</p>
              <h2 id="user-list-title">User list</h2>
            </div>
            <span className="user-count">
              {users.length} {users.length === 1 ? 'user' : 'users'}
            </span>
          </div>
          <UserTable users={users} onEdit={handleEdit} onDelete={deleteUser} />
        </section>
      </div>
    </main>
  );
};

export default UsersPage;
