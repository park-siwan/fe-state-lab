import { useShallow } from 'zustand/shallow';
import { useCounterStore } from './useCounterStore';
import './Counter.css';

export default function Counter() {
  // const count = useCounterStore((s) => s.count);
  // const increase = useCounterStore((s) => s.increase);
  // const decrease = useCounterStore((s) => s.decrease);
  // const reset = useCounterStore((s) => s.reset);
  const { count, increase, decrease, reset, setName } = useCounterStore(
    useShallow((s) => ({
      count: s.count,
      increase: s.increase,
      decrease: s.decrease,
      reset: s.reset,
      setName: s.setName,
    })),
  );

  // const setName = useCounterStore((s) => s.setName);

  // const { count, increase, decrease, reset } = useCounterStore();
  console.log('render');

  return (
    <div className="lab-card">
      <p className="lab-label">Zustand Counter</p>
      <div className="lab-count">{count}</div>
      <div className="lab-row">
        <button className="lab-btn" onClick={decrease}>
          −1
        </button>
        <button className="lab-btn" onClick={reset}>
          reset
        </button>
        <button className="lab-btn" onClick={increase}>
          +1
        </button>
      </div>
      <button
        className="lab-btn lab-btn--accent"
        onClick={() => setName(String(Date.now()))}
      >
        name 변경 (관련 없는 값)
      </button>
    </div>
  );
}
