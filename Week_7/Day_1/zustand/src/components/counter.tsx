import { useCounterStore } from './store';

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="counter" aria-live="polite">
      <p className="count-label">Current count</p>
      <p className="count">{count}</p>
      <div className="counter-actions">
        <button type="button" onClick={decrement} aria-label="Decrease count">
          -
        </button>
        <button type="button" onClick={reset}>
          Reset
        </button>
        <button type="button" onClick={increment} aria-label="Increase count">
          +
        </button>
      </div>
    </div>
  );
}
