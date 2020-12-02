import {LOAD_ARTIST, LOAD_SONGS} from '../types'

const initialState = {
  songs: [],
  artist: {},
  searchList: []
}

export const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SONGS:
      return {...state, songs: action.payload}
    case LOAD_ARTIST:
      return {...state, artist: action.payload}
    default:
      return state
  }
}
