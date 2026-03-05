import React, { useEffect } from 'react'
import '../style/Home.css'
import SearchBar from '../components/SearchBar'
import { useMovies } from '../store/store'
import MooviesCard from '../components/MooviesCard'
function Home() {
    const {fetchMovies, movies} = useMovies()
    useEffect(() => {
    fetchMovies("http://localhost:3000/movies")
  }, [])
    return (
        <div>
            <header>
                <h1>Movie Night</h1>
                <p>Search a movie and pick your seats</p>
            </header>
            <SearchBar />
            
            <div className="moovies">
                {movies.map((item, id)=>{
                    return (
                        <MooviesCard key={id} item={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default Home
