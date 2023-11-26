import { create } from "zustand";

type MiniCartStore = {
  isOpen: boolean;
  toggleOpen: () => void;
  setIsOpen: (isOpen: boolean) => void;
};

const useMiniCartStore = create<MiniCartStore>((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpen: (isOpen) => set({ isOpen }),
}));

export default useMiniCartStore;
