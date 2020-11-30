import React from 'react'

export default ({artist}) => {
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
        <h1>Nothing to display</h1>
      )}
    </div>
  )
}
