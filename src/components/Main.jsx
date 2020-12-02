import React from 'react'
import {useSelector} from 'react-redux'
import Track from './Track'
import Alert from './common/Alert'

const Main = ({onClick}) => {
  const songs = useSelector(state => state.songs.songs)
  const alert = useSelector(state => state.app.alert)

  if (!songs.length) {
    return <Alert text={alert} />
  }

  return (
    <div className='d-flex flex-wrap m-3'>
      {songs.map(el => {
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

export default Main
