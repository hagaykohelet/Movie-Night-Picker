import { create } from 'zustand';
import fetchData from '../api/fetchdata';
const data = await fetchData()
export const useMovies = create((set) => ({
    movies: data.movies,
    movieData: [],
    choosenMovie: (item) => set({ movieData: item }),
}))