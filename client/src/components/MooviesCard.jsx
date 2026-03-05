import React from 'react'
import '../style/MooviesCard.css'
import { useNavigate,useParams } from "react-router-dom"
import { useMovies } from '../store/store'

function MooviesCard({ item }) {
  const {choosenMovie} = useMovies()
  const navigate = useNavigate()
  let params = useParams()
  function moviePage(){
    choosenMovie(item)
    navigate(`/movie/${item.imdbID}`)
  }
  return (
    <div className='card'>
      <div className="top">
        <img src={item.Images[0]} alt="" />
        <p>{item.Title}</p>
      </div>
      <div className="bottom">
        <p>year: {item.Year}</p>
        <p>rating: {item.Rated}</p>
      </div>
      <button className="btn" onClick={moviePage}>
        Select Seats
      </button>
    </div>
  )
}

export default MooviesCard
