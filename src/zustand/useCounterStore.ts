import { create } from 'zustand';

interface CounterState {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
  name: string; // 관련 없는 값
  setName: (name: string) => void;
}

export const useCounterStore = create<CounterState>()((set) => ({
  count: 0,
  name: '',
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  setName: (name) => set({ name }),
}));
