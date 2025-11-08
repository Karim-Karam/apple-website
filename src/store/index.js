import { create } from 'zustand'

export const useMacbookStore = create((set) => ({
    color: '#adb5bd',
    setColor: (newColor) => set({ color: newColor }),
    scale: 0.06,
    setScale: (newScale) => set({ scale: newScale }),
    reset: () => set({ color: '#2e2c2e', scale: 0.08 })
}))