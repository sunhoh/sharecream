import { create } from 'zustand';

export interface authState {
  isAuth: boolean;
  loading: boolean;
  setIsAuth: (isBoolean: boolean) => void;
  setLoading: (isBoolean: boolean) => void;
}

const authStore = create<authState>(set => ({
  isAuth: false,
  loading: false,
  setIsAuth: (isBoolean: boolean) => set({ isAuth: isBoolean }),
  setLoading: (isBoolean: boolean) => set({ loading: isBoolean }),
}));

export default authStore;
