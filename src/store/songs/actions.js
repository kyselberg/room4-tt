import axios from 'axios'
import {showLoader, hideLoader, showAlert, hideAlert} from '../app/actions'
import {LOAD_ARTIST, LOAD_SONGS} from '../types'
import {endPoint} from '../../assets/helpers'

export function loadSongs() {
  return async dispatch => {
    dispatch(showLoader())
    try {
      const response = await axios.get(endPoint('tracks'))
      const data = await response.data
      dispatch({type: LOAD_SONGS, payload: [...data.tracks.track]})
      dispatch(hideLoader())
    } catch (e) {
      dispatch(hideLoader())
      dispatch(showAlert('There are problems with loading:('))
      setTimeout(() => dispatch(hideAlert()), 5000)
    }
  }
}

export function loadArtist(prevName, artistName) {
  return async dispatch => {
    if (prevName === artistName) return
    dispatch(showLoader())
    try {
      const name = artistName.split(' ').join('+')
      const response = await axios.get(endPoint('artist')(name))
      const data = await response.data
      dispatch({type: LOAD_ARTIST, payload: data.artist})
      dispatch(hideLoader())
    } catch (e) {
      dispatch(hideLoader())
      dispatch(showAlert('There are problems with loading:('))
      setTimeout(() => dispatch(hideAlert()), 5000)
    }
  }
}
