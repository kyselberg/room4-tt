import React from 'react'
import Track from './Track'

const Search = ({artistList, findArtist, onClick}) => {
  return (
    <div className='container mt-3'>
      <input
        onChange={e => findArtist(e.target.value)}
        className='form-control'
        type='text'
        placeholder='Find somebody'
      />
      <div>
        <div className='container d-flex flex-wrap align-content-around mt-3'>
          {artistList.map(el => {
            return (
              <Track
                name={el.name}
                artist={el.artist.name}
                onClick={onClick}
                key={`${el.listeners} ${el.playcount}`}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Search
