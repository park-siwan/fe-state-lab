import { useShallow } from 'zustand/shallow';
import { useCounterStore } from './useCounterStore';
import NameBadge from './NameBadge';
import './Counter.css';

// 같은 스토어를 세 가지 방식으로 구독해, 어느 카드가 다시 렌더링되는지 react-scan 으로 비교한다

// A. 셀렉터 없이 스토어 전체를 구독
function CounterA() {
  const { count, increase } = useCounterStore();
  return <CounterCard label='1. 셀렉터 없이 통째로' count={count} onIncrease={increase} />;
}

// B. useShallow 로 필요한 값만 묶어서 구독
function CounterB() {
  const { count, increase } = useCounterStore(
    useShallow((s) => ({ count: s.count, increase: s.increase })),
  );
  return <CounterCard label='2. useShallow' count={count} onIncrease={increase} />;
}

// C. 값은 셀렉터로, 액션은 참조가 바뀌지 않는 actions 객체로 구독
function CounterC() {
  const count = useCounterStore((s) => s.count);
  const { increase } = useCounterStore((s) => s.actions);
  return <CounterCard label='3. 액션 분리' count={count} onIncrease={increase} />;
}

function CounterCard({
  label,
  count,
  onIncrease,
}: {
  label: string;
  count: number;
  onIncrease: () => void;
}) {
  return (
    <div className='lab-card'>
      <p className='lab-label'>{label}</p>
      <div className='lab-count'>{count}</div>
      <button className='lab-btn' style={{ width: '100%' }} onClick={onIncrease}>
        +1
      </button>
    </div>
  );
}

// name 만 바꾸는 버튼. setName 만 구독하므로 이 버튼 자체는 다시 렌더링되지 않는다
function NameButton() {
  const setName = useCounterStore((s) => s.setName);
  return (
    <button
      className='lab-btn lab-btn--accent'
      style={{ maxWidth: 360 }}
      onClick={() => setName(String(Date.now()))}
    >
      name 변경 (관련 없는 값)
    </button>
  );
}

const VARIANTS = { a: CounterA, b: CounterB, c: CounterC };

// ?compare=a 처럼 보여 줄 방식을 고른다. 값이 없으면 셋 다
export default function CompareCounters() {
  const picked = new URLSearchParams(location.search).get('compare') || 'abc';
  const counters = (Object.keys(VARIANTS) as (keyof typeof VARIANTS)[]).filter(
    (key) => picked.includes(key),
  );

  return (
    <main className='lab'>
      <div className='lab-compare' style={{ gridTemplateColumns: `repeat(${counters.length}, 220px)` }}>
        {counters.map((key) => {
          const Counter = VARIANTS[key];
          return <Counter key={key} />;
        })}
      </div>
      <NameButton />
      <NameBadge />
    </main>
  );
}
