import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/');
  };

  return (
    <div className="dashboard-shell">
      <div className="dashboard-card">
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">Overview</p>
            <h1 className="dashboard-title">Welcome to your workspace</h1>
          </div>

          <button
            type="button"
            className="secondary-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </header>

        <div className="security-badge">Protected by 2FA verification</div>

        <div className="stat-grid">
          <div className="stat-item">
            <span className="stat-label">Session</span>
            <strong>Active</strong>
          </div>
          <div className="stat-item">
            <span className="stat-label">Security</span>
            <strong>High</strong>
          </div>
          <div className="stat-item">
            <span className="stat-label">Status</span>
            <strong>Online</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
