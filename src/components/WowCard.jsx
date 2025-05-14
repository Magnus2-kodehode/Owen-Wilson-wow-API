import React from 'react'

export default function WowCard({ wow }) {
  if (!wow) return null

  const { movie, year, character, full_line, video, poster } = wow

  return (
    <div className='wow-card'>
      <p className='title3'>
        {movie} ({year})
      </p>
      <p>
        <b>{character}:</b> {full_line}
      </p>
      <div className='wow-content'>
        <img src={poster} alt={movie} />
        <video controls src={video['720p']}></video>
      </div>
    </div>
  )
}
