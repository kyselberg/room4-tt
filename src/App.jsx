import React, {useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Header from './components/Header'
import Main from './components/Main'
import ArtistPage from './components/ArtistPage'
import Search from './components/Search'
import Loader from './components/common/Loader'
import {loadArtist, loadSongs} from './store/songs/actions'

const App = () => {
  const dispatch = useDispatch()
  const artist = useSelector(state => state.songs.artist)
  const loader = useSelector(state => state.app.loader)

  useEffect(() => dispatch(loadSongs()), [])

  const fetchArtist = async artistName =>
    dispatch(loadArtist(artist.name, artistName))

  return (
    <>
      <BrowserRouter>
        <Header />
        {loader ? (
          <Loader />
        ) : (
          <main className='d-flex justify-content-center align-items-center'>
            <Switch>
              <Route exact path='/'>
                <Main onClick={fetchArtist} />
              </Route>
              <Route path='/page'>
                <ArtistPage />
              </Route>
              <Route path='/search'>
                <Search onClick={fetchArtist} />
              </Route>
            </Switch>
          </main>
        )}
      </BrowserRouter>
    </>
  )
}

export default App
