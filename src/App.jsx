import { useCounterStore } from './store';

function App() {
  const counter = useCounterStore((state) => state.counter);
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);
  const increaseBy20 = useCounterStore((state) => state.increaseBy20);
  const clear = useCounterStore((state) => state.clear);
  return (
    <div className="container">
      <h1>Counter</h1>
      <div>
        <h2>{counter}</h2>
        <div className="buttons">
          <button onClick={increase}>Increase</button>
          <button onClick={decrease}>Decrease</button>
          <button onClick={increaseBy20}>Increase by 20</button>
          <button onClick={clear}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default App;
