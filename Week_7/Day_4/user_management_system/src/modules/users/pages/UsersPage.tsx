import { useState, useMemo } from 'react';
import { Button, Drawer, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { UserForm } from '../components/UserForm';
import UserTable from '../components/UserTable';
import { useUsersStore } from '../store/users.store';
import useAuthStore from '../../auth/store/auth.store';
import type { User } from '../types/user.types';

const { Search } = Input;

const UsersPage: React.FC = () => {
  const navigate = useNavigate();
  const { users, deleteUser } = useUsersStore();
  const logout = useAuthStore((state) => state.logout);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [searchText, setSearchText] = useState('');

  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.fullName.toLowerCase().includes(searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [users, searchText]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleAddClick = () => {
    setEditingUser(null);
    setDrawerOpen(true);
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setEditingUser(null);
  };

  return (
    <main className="user-page">
      <section className="user-page-header" aria-labelledby="user-page-title">
        <div>
          <p className="eyebrow">Workspace / Directory</p>
          <h1 id="user-page-title">User management</h1>
          <p className="user-page-subtitle">
            Keep your team directory accurate and easy to navigate.
          </p>
        </div>
        <div className="user-page-actions">
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAddClick}>
            Add User
          </Button>
          <Button onClick={handleLogout} style={{ marginLeft: 8 }}>
            Logout
          </Button>
        </div>
      </section>

      <section className="user-table-panel" aria-labelledby="user-table-title">
        <div className="user-table-heading">
          <div>
            <p className="panel-kicker">Directory</p>
            <h2 id="user-table-title">All users</h2>
          </div>
          <span className="user-count">
            {filteredUsers.length} {filteredUsers.length === 1 ? 'member' : 'members'}
          </span>
        </div>

        <Search
          placeholder="Search by name or email"
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 300, marginBottom: 16 }}
          allowClear
        />

        <UserTable users={filteredUsers} onEdit={handleEdit} onDelete={deleteUser} />
      </section>

      <Drawer
        title={editingUser ? 'Edit User' : 'Add User'}
        open={drawerOpen}
        onClose={handleDrawerClose}
        width={400}
        className="user-drawer"
      >
        <UserForm editingUser={editingUser} onDone={handleDrawerClose} />
      </Drawer>
    </main>
  );
};

export default UsersPage;