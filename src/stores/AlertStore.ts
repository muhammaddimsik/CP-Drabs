// alertStore.js
import { create } from "zustand";

interface AlertProps {
  alertMessage: string;
  showAlert: boolean;
  setAlert: (message: string) => void;
  hideAlert: () => void;
}

export const useAlertStore = create<AlertProps>((set) => ({
  alertMessage:
    "Session kamu sudah kadaluarsa, login kembali untuk mendapatkan session baru!",
  showAlert: false,
  setAlert: (message) => set({ alertMessage: message, showAlert: true }),
  hideAlert: () => set({ showAlert: false }),
}));
