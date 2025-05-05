import { create } from 'zustand';
import { UserHealthData, WorkoutType } from '../lib/types';

interface UserState {
  userData: Partial<UserHealthData> | null;
  userId: string | null;
  workoutType: WorkoutType | null;
  setUserData: (data: Partial<UserHealthData>) => void;
  setUserId: (id: string) => void;
  setWorkoutType: (type: WorkoutType) => void;
  reset: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  userData: null,
  userId: null,
  workoutType: null,
  setUserData: (data) => set((state) => ({ 
    userData: { ...state.userData, ...data } 
  })),
  setUserId: (id) => set({ userId: id }),
  setWorkoutType: (type) => set({ workoutType: type }),
  reset: () => set({ userData: null, userId: null, workoutType: null }),
}));