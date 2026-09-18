import './App.css';
import { UserForm } from './modules/users/components/UserForm';
import UserTable from './modules/users/components/UserTable';

import { useUsersStore } from './modules/users/store/users.store';
import type { User } from './modules/users/types/user.types';

function App() {
  const { users, deleteUser } = useUsersStore();

  const handleEdit = (user: User) => {
    console.log('edit', user);
  };

  return (
    <main className="app-shell">
      <section className="form-panel" aria-labelledby="form-title">
        <div className="form-intro">
          <p className="eyebrow">User management Form</p>
        </div>
        <UserForm onDone={() => {}} />
      </section>

      <section className="table-panel" aria-labelledby="table-title">
        <div className="form-intro">
          <p className="eyebrow">User List</p>
        </div>
        <UserTable users={users} onEdit={handleEdit} onDelete={deleteUser} />
      </section>
    </main>
  );
}

export default App;