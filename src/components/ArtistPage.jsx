import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Loader from './common/Loader'

const ArtistPage = () => {
  const artist = useSelector(state => state.songs.artist)
  const loader = useSelector(state => state.app.loader)

  if (loader) {
    return <Loader />
  }

  return (
    <div className='container mt-2'>
      {artist.name ? (
        <div>
          <img src={artist.image[2]['#text']} alt='' />
          <h1>{artist.name}</h1>
          {artist.tags.tag.map(el => {
            return (
              <a
                href={el.url}
                key={el.name}
                className='badge badge-info mr-1 mb-3'
              >
                {el.name}
              </a>
            )
          })}
          <p
            dangerouslySetInnerHTML={{__html: `<p>${artist.bio.summary}</p>`}}
          />
        </div>
      ) : (
        <div className='alert alert-warning' role='alert'>
          You have to{' '}
          <Link to='/' className='alert-link'>
            select artist
          </Link>{' '}
          to see more information
        </div>
      )}
    </div>
  )
}

export default ArtistPage
