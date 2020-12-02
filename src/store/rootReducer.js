import {combineReducers} from 'redux'
import {appReducer} from './app/reducer'
import {songsReducer} from './songs/reducer'

export const rootReducer = combineReducers({
  app: appReducer,
  songs: songsReducer
})
