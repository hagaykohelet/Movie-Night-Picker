import {create} from 'zustand';

export const useMovies = create((set) => ({
    movies:[],
    movieData:[],
    fetchMovies: async (url) => {
        const res = await fetch(url)
        const result = await res.json()
        set({ movies: result.movies})
    },
    choosenMovie:(item)=> set({movieData:item}),
}))