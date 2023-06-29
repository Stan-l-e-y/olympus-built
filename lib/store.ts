import { create } from 'zustand';

export interface ModalState {
  isOpen: boolean;
  areButtonsEnabled: boolean;
  setIsOpen: (state: boolean) => void;
  setButtonsEnabled: (state: boolean) => void;
}

const useModalStore = create<ModalState>()((set) => ({
  isOpen: false,
  areButtonsEnabled: false,
  setIsOpen: (bool) => set((state) => ({ isOpen: bool })),
  setButtonsEnabled: (bool) => set((state) => ({ areButtonsEnabled: bool })),
}));

export const useIsModalOpen = () => useModalStore((state) => state.isOpen);
export const useSetModalOpen = () => useModalStore((state) => state.setIsOpen);
export const useAreButtonsEnabled = () =>
  useModalStore((state) => state.areButtonsEnabled);
export const useSetButtonsEnabled = () =>
  useModalStore((state) => state.setButtonsEnabled);
