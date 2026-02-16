import { create } from 'zustand';

interface PlayerState {
  currentProject: string | null; // What project is being displayed?
  isPlaying: boolean;            
  
  // Actions
  playProject: (projectId: string) => void; // Insert tape
  eject: () => void;                        // Eject tape
}

export const usePlayerStore = create<PlayerState>((set) => ({
  // Initial state
  currentProject: null,
  isPlaying: false,

  // State management
  playProject: (projectId) => set({ 
    currentProject: projectId, 
    isPlaying: true 
  }),

  eject: () => set({ 
    currentProject: null, 
    isPlaying: false 
  }),
}));