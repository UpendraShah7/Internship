import './App.css';
import Counter from './components/counter';

function App() {
  return (
    <main className="app">
      <section className="counter-card" aria-labelledby="page-title">
        <p className="eyebrow">Zustand basics</p>
        <h1 id="page-title">Simple counter</h1>
        <p className="intro">
          A tiny global store shared by the counter controls.
        </p>
        <Counter />
      </section>
    </main>
  );
}

export default App;
