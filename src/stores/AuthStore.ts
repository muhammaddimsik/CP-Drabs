import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Auth {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  logout: () => void;
}

export const useAuth = create<Auth>()(
  devtools(
    persist(
      (set) => ({
        accessToken: "",
        setAccessToken: (token) => set(() => ({ accessToken: token })),
        logout: () => set(() => ({ accessToken: null })),
      }),
      { name: "authStore-cp" }
    )
  )
);
