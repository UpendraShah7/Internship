import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UsersPage from './features/users/pages/UserPage';

import PollingPage from './features/post/page/PollingPage';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './App.css';
import UserDetailPage from './features/users/pages/UserDetailPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <nav className="site-nav">
          <Link className="brand" to="/">
            Queryboard
          </Link>
          <div className="nav-links">
            <Link to="/">Users</Link>
            <Link to="/polling">Live posts</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserDetailPage />} />
          <Route path="/polling" element={<PollingPage />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
