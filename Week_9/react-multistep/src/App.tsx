import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import RegistrationPage from './components/RegistrationForm/RegistrationPage';
import RegistrationListPage from './components/RegistrationForm/RegistrationListPage';

function App() {
  return (
    <BrowserRouter>
      <main className="page-shell">
        <section className="registration-panel" aria-labelledby="page-title">
          <div className="brand-mark" aria-hidden="true">
            N
          </div>
          <p className="eyebrow">NEW CUSTOMER</p>
          <h1 id="page-title">Create your account</h1>
          <p className="page-intro">Enter your details to get started.</p>

          <Routes>
            <Route path="/" element={<Navigate to="/register" replace />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/registration/:id" element={<RegistrationPage />} />
            <Route
              path="/registration"
              element={<Navigate to="/register" replace />}
            />
            <Route path="/registrations" element={<RegistrationListPage />} />
          </Routes>

          <p className="privacy-note">
            Your information is kept private and secure.
          </p>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
