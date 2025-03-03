import { create } from "zustand";

interface AuthState {
  isPage: number;
  setIsLoggedIn: (isPage: number) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isPage: 1,
  setIsLoggedIn: (isPage) => set({ isPage }),
}));
