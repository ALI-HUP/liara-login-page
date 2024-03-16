import {create} from 'zustand';

interface SignupState {
  userName: string;
  email: string;
  password: string;
  setUserName: (userName: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

export const useSignupStore = create<SignupState>((set) => ({
  userName: '',
  email: '',
  password: '',
  setUserName: (userName) => set({ userName }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
}));