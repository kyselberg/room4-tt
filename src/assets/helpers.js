export function endPoint(type) {
  if (type === 'tracks')
    return 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=adb6f488a606e8d32ddfc539b73bbdec&format=json'
  else if (type === 'artist')
    return name =>
      `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=adb6f488a606e8d32ddfc539b73bbdec&format=json`
}
