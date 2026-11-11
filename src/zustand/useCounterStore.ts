import { create } from 'zustand';

interface CounterState {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
  name: string; // 관련 없는 값
  setName: (name: string) => void;
  // 방법 C: 액션만 따로 묶어 둔 객체. 스토어 생성 시 한 번 만들어져 참조가 바뀌지 않는다
  actions: {
    increase: () => void;
    decrease: () => void;
    reset: () => void;
  };
}

export const useCounterStore = create<CounterState>()((set) => ({
  count: 0,
  name: '',
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  setName: (name) => set({ name }),
  actions: {
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
  },
}));
