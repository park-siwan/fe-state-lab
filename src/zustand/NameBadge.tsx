import { useCounterStore } from './useCounterStore';

// Counter 밖에서 name을 구독해, 값이 실제로 바뀌었는지 화면으로 확인하기 위한 컴포넌트
export default function NameBadge() {
  const name = useCounterStore((s) => s.name);
  return (
    <p className="lab-name">
      store.name
      <code>{name || '(empty)'}</code>
    </p>
  );
}
