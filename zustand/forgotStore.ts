import {create} from 'zustand';

interface ForgotState {
  email: string;
}

interface ForgotActions {
  setEmail: (email: string) => void;
}

type ForgotStore = ForgotState & ForgotActions;

const useForgotStore = create<ForgotStore>((set) => ({
  email: '',
  setEmail: (email: string) => set({ email }),
}));

export default useForgotStore;