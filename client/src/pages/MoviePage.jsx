import React from 'react'
import { useMovies } from '../store/store'
import { useNavigate } from "react-router-dom"
function MoviePage() {
    const { movieData } = useMovies()
    const navigate = useNavigate()
    function backToHomePage(){
        navigate('/')
    }
    return (
        <div className='movie page'>
            <p onClick={backToHomePage}>back to home page</p>4h1
            
        </div>
    )
}

export default MoviePage
