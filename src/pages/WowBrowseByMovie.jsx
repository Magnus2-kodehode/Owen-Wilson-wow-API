import React, { useState, useEffect } from 'react'
import WowCard from '../components/WowCard'

export default function WowBrowseByMovie() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState('')
  const [wow, setWow] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://owen-wilson-wow-api.onrender.com/wows/movies')
      const data = await response.json()
      setMovies(data)
    } catch (err) {
      console.error(err)
    }
  }

  const fetchMovieWow = async (movie) => {
    setLoading(true)
    try {
      const response = await fetch(
        `https://owen-wilson-wow-api.onrender.com/wows/random?movie=${encodeURIComponent(movie)}`
      )
      const data = await response.json()
      setWow(data[0])
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  useEffect(() => {
    if (selectedMovie) fetchMovieWow(selectedMovie)
  }, [selectedMovie])

  return (
    <div className='main'>
      <div className='container-main'>
        <p className='title'>Browse by movie</p>
        <select onChange={(e) => setSelectedMovie(e.target.value)} value={selectedMovie}>
          <option value=''>Select movie</option>
          {movies.map((movie) => (
            <option key={movie} value={movie}>
              {movie}
            </option>
          ))}
        </select>
        {loading ? <p>Loading...</p> : wow && <WowCard wow={wow} />}
        <div className='wow-nav'>
          {selectedMovie && (
            <button
              onClick={() => {
                fetchMovieWow(selectedMovie)
              }}
              className='wow-nav-button'
            >
              Next wow
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
