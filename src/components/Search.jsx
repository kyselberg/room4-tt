import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import Track from './Track'

const Search = ({onClick}) => {
  const [artistList, updateArtistList] = useState([])
  const songs = useSelector(state => state.songs.songs)
  const findArtist = name => {
    let list = []
    name = name.trim()
    if (name) {
      list = songs.filter(el =>
        el.name.toLowerCase().includes(name.toLowerCase())
      )
    }
    updateArtistList(list)
  }
  return (
    <div className='container mt-3 mb-3'>
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
