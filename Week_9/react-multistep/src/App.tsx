import MultiStepForm from './components/RegistrationForm/MultiStepForm';

function App() {
  return (
    <main className="page-shell">
      <section className="registration-panel" aria-labelledby="page-title">
        <div className="brand-mark" aria-hidden="true">
          N
        </div>
        <p className="eyebrow">NEW CUSTOMER</p>
        <h1 id="page-title">Create your account</h1>
        <p className="page-intro">Enter your details to get started.</p>
        <MultiStepForm />
        <p className="privacy-note">
          Your information is kept private and secure.
        </p>
      </section>
    </main>
  );
}

export default App;
