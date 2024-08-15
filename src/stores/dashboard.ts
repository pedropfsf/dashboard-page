import { create } from "zustand";

type DashboardStore = {
  count: number;
  inc: () => void;
};

export const useDashboardStore = create<DashboardStore>((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));
