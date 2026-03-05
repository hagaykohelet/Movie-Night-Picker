import React, { useEffect, useState } from 'react'
import '../style/Home.css'
import SearchBar from '../components/SearchBar'
import { useMovies } from '../store/store'
import MooviesCard from '../components/MooviesCard'
function Home() {
    const { fetchMovies, movies } = useMovies()
    const [movieList, setFilter] = useState(movies)
    useEffect(() => {
        fetchMovies("http://localhost:3000/movies")
        
    }, [])
     
    return (
        <div>
            <header>
                <h1>Movie Night</h1>
                <p>Search a movie and pick your seats</p>
            </header>
            <SearchBar movieList={movieList} setFilter={setFilter}/>
            <div className="moovies">
                {movieList.map((item, id) => {
                    return (
                        <MooviesCard key={id} item={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default Home
