import {create} from 'zustand';

export const useMovies = create((set) => ({
    movies:[],
    fetchMovies: async (url) => {
        const res = await fetch(url)
        const result = await res.json()
        set({ movies: result.movies})
    }
}))