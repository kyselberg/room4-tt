import React from 'react'
import Track from './Track'

export default ({songsList, onClick}) => {
  return (
    <div className='container d-flex flex-wrap align-content-around'>
      {songsList.map(el => {
        return (
          <Track
            onClick={onClick}
            key={`${el.listeners} ${el.playcount}`}
            name={el.name}
            artist={el.artist.name}
            pageLink={el.artist.url}
          />
        )
      })}
    </div>
  )
}
