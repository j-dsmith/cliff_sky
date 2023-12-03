import { create } from "zustand";

type MobileMenuStore = {
  isOpen: boolean;
  toggleOpen: () => void;
  setIsOpen: (isOpen: boolean) => void;
};

const useMobileMenuStore = create<MobileMenuStore>((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpen: (isOpen) => set({ isOpen }),
}));

export default useMobileMenuStore;
