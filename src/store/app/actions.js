import {HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from '../types'

export function showAlert(text) {
  return {type: SHOW_ALERT, payload: text}
}

export function hideAlert() {
  return {type: HIDE_ALERT}
}

export function showLoader() {
  return {type: SHOW_LOADER}
}

export function hideLoader() {
  return {type: HIDE_LOADER}
}
