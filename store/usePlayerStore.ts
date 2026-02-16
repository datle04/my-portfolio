import { create } from 'zustand';

export interface Project {
  id: string;
  title: string;
  color: string; // Color of tape
}

interface PlayerState {
  currentProject: Project | null; // What project is being displayed?
  isPlaying: boolean;            
  
  // Actions
  playProject: (project: Project) => void; // Insert tape
  eject: () => void;                        // Eject tape
}

export const usePlayerStore = create<PlayerState>((set) => ({
  // Initial state
  currentProject: null,
  isPlaying: false,

  // State management
  playProject: (project) => set({ 
    currentProject: project, 
    isPlaying: true 
  }),

  eject: () => set({ 
    currentProject: null, 
    isPlaying: false 
  }),
}));