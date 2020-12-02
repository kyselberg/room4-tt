import React from 'react'
import {NavLink} from 'react-router-dom'

const Track = ({name, artist, pageLink, onClick}) => {
  return (
    <div className='card w-auto m-2'>
      <div className='card-body'>
        <h5 className='card-title d-inline-block'>{name}</h5>
        <NavLink
          className='card-subtitle mb-2 text-muted d-block'
          onClick={() => onClick(artist)}
          to='/page'
        >
          {artist}
        </NavLink>
        {pageLink ? <a href={pageLink}>Link to the page</a> : ''}
      </div>
    </div>
  )
}

export default Track
