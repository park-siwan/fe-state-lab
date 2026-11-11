import './App.css';
import Counter from './zustand/Counter';
import NameBadge from './zustand/NameBadge';
import CompareCounters from './zustand/CompareCounters';

function App() {
  // /?compare 로 열면 A/B/C 방식을 나란히 비교한다
  if (new URLSearchParams(location.search).has('compare')) {
    return <CompareCounters />;
  }

  return (
    <main className="lab">
      <Counter />
      <NameBadge />
    </main>
  );
}

export default App;
