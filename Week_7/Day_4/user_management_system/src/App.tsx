import { useState } from 'react';
import './App.css';
import { Button, Drawer } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { UserForm } from './modules/users/components/UserForm';
import UserTable from './modules/users/components/UserTable';

import { useUsersStore } from './modules/users/store/users.store';
import type { User } from './modules/users/types/user.types';

function App() {
  const { users, deleteUser } = useUsersStore();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleEdit = (user: User) => {
    console.log('edit', user);
  };

  return (
    <main className="app-shell">
      <section className="table-panel" aria-labelledby="table-title">
        <div className="table-header">
          <p className="eyebrow">User List</p>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setDrawerOpen(true)}
          >
            Add User
          </Button>
        </div>

        <UserTable users={users} onEdit={handleEdit} onDelete={deleteUser} />
      </section>

      <Drawer
        title="Add User"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        width={400}
      >
        <UserForm onDone={() => setDrawerOpen(false)} />
      </Drawer>
    </main>
  );
}

export default App;