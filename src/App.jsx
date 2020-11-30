import React, {useEffect, useState} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Main from './components/Main'
import ArtistPage from './components/ArtistPage'
import Search from './components/Search'
import {endPoint} from './assets/helpers'

export default () => {
  const [data, setData] = useState([])
  const [artistInfo, updateArtistInfo] = useState({})
  const [artistList, updateArtistList] = useState([])

  useEffect(async () => {
    const response = await axios.get(endPoint('tracks'))
    setData([...response.data.tracks.track])
  }, [])

  const fetchArtist = async artistName => {
    const name = artistName.split(' ').join('+')
    const response = await axios.get(endPoint('artist')(name))
    updateArtistInfo(response.data.artist)
    console.log(artistInfo)
  }

  const findArtist = name => {
    let list = []
    if (name) {
      list = data.filter(el =>
        el.name.toLowerCase().includes(name.toLowerCase())
      )
    }
    updateArtistList(list)
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Route exact path='/'>
            <Main onClick={fetchArtist} songsList={data} />
          </Route>
          <Route path='/page'>
            <ArtistPage artist={artistInfo} />
          </Route>

          <Route path='/search'>
            <Search
              onClick={fetchArtist}
              artistList={artistList}
              findArtist={findArtist}
            />
          </Route>
        </main>
      </BrowserRouter>
    </>
  )
}
