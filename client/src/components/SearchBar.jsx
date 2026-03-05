import React, { useEffect, useState } from 'react'
import '../style/SearchBar.css'
import useDebounce from '../hooks/useDeboubce'
import { useMovies } from '../store/store'
function SearchBar({ movieList, setFilter }) {
    const { movies } = useMovies()
    const [change, setChange] = useState("")


    useEffect(() => {


        const searchMovie = movies.filter((item) => item["Title"].includes(change))
        setFilter(searchMovie)

    }, [movieList])


    return (
        <div className='searchBar'>
            <input type="text" placeholder="Search movie by title..." onChange={(e) => { setChange(e.target.value) }} />
        </div>
    )
}

export default SearchBar
