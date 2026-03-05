import React from 'react'
import '../style/MooviesCard.css'
function MooviesCard({ item }) {
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
      <button className="btn">
        Select Seats
      </button>
    </div>
  )
}

export default MooviesCard
