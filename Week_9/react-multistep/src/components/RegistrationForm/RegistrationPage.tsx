import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MultiStepForm from './MultiStepForm';
import { getRegistration } from './api/registrationApi';
import type { Registration } from './api/registrationApi';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [initialData, setInitialData] = useState<Registration | undefined>();
  const [loading, setLoading] = useState(Boolean(id));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const loadRegistration = async () => {
      setLoading(true);
      setInitialData(undefined);
      try {
        setInitialData(await getRegistration(id));
        setError(null);
      } catch {
        setError('Failed to load registration.');
      } finally {
        setLoading(false);
      }
    };
    loadRegistration();
  }, [id]);

  return (
    <div>
      <div className="registration-page-actions">
        <Link className="text-link" to="/registrations">
          View registrations
        </Link>
      </div>

      {error && <p>{error}</p>}
      {loading && <p>Loading registration...</p>}

      {!loading && !error && (
        <MultiStepForm
          key={id ?? 'new'}
          registrationId={id}
          initialData={initialData}
          onSaved={() => navigate('/registrations')}
        />
      )}
    </div>
  );
};

export default RegistrationPage;
