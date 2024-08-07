import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Search {
  search: string[];
  setSearch: (q: string) => void;
}

export const useSearchStore = create<Search>()(
  devtools(
    persist(
      (set) => ({
        search: [],
        setSearch: (q) => set((state) => ({ search: [...state.search, q] })),
      }),
      { name: "searchStore" }
    )
  )
);
