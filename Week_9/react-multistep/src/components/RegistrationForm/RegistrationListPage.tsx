import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegistrationList from './RegistrationList';
import { deleteRegistration, getRegistrations } from './api/registrationApi';
import type { Registration } from './api/registrationApi';

const RegistrationListPage = () => {
  const navigate = useNavigate();
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadRegistrations = useCallback(async () => {
    try {
      const data = await getRegistrations();
      setRegistrations(data);
      setError(null);
    } catch {
      setError('Failed to load registrations.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadRegistrations();
  }, [loadRegistrations]);

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this registration?')) return;
    try {
      await deleteRegistration(id);
      await loadRegistrations();
    } catch {
      setError('Failed to delete registration.');
    }
  };

  const handleEdit = (registration: Registration) => {
    navigate(`/registration/${registration.id}`);
  };

  return (
    <div className="registration-list-page">
      <div className="registration-list-header">
        <div>
          <p className="eyebrow">ACCOUNT MANAGEMENT</p>
          <h2 className="section-title">Registrations</h2>
        </div>
        <Link className="text-link" to="/register">
          Register
        </Link>
      </div>

      {loading && <p className="list-status">Loading registrations...</p>}
      {error && <p className="list-status list-status-error">{error}</p>}
      {!loading && (
        <RegistrationList
          registrations={registrations}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default RegistrationListPage;
