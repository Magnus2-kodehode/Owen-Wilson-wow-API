import React, { useState, useEffect } from "react"
import WowCard from "../components/WowCard"

export default function WowBrowseAll() {
  const [wows, setWows] = useState([])
  const [loading, setLoading] = useState(true)
  const [range, setRange] = useState({ start: 0, end: 9})
  const [sortField, setSortField] = useState('movie')
  const [sortDirection, setSortDirection] = useState('asc')

  const fetchOrderedWows = async () => {
    setLoading(true)
    try {
      const response = await fetch(`https://owen-wilson-wow-api.onrender.com/wows/ordered/${range.start}-${range.end}`)
      const data = await response.json()
      setWows(sortWows(data, sortField, sortDirection))
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchOrderedWows()
  }, [range, sortField, sortDirection])

  const sortWows = (data, field, direction) => {
    return [...data].sort((a, b) => {
      let valA = a[field]
      let valB = b[field]

      if (!isNaN(valA) && !isNaN(valB)) {
        valA = Number(valA)
        valB = Number(valB)
      }

      if (valA < valB) return direction === 'asc' ? -1 : 1
      if (valA > valB) return direction === 'asc' ? 1 : -1
      return 0
    })
  }

  const nextPage = () => {
    setRange((prev) => ({
      start: prev.end + 1,
      end: prev.end + 10,
    }))
  }

  const prevPage = () => {
    setRange((prev) => ({
      start: Math.max(0, prev.start - 10),
      end: Math.max(9, prev.end - 10),
    }))
  }

  return (
    <div className='main'>
      <div className="container-main">
        <p className="title">
          Browse all wows
        </p>
        <div className="wow-sort">
          {/* <label>
            Sorty by:{' '}
            <select value={sortField} onChange={(e) => setSortField(e.target.value)}>
              <option value="movie">Movie</option>
              <option value="year">Year</option>
            </select>
          </label> */}
          {/* <label>
            Order by:{' '}
            <select value={sortDirection} onChange={(e) => setSortDirection(e.target.value)}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label> */}
        </div>
        {loading ? <p>Loading...</p> : (
          <>
            {wows.map((wow, index) => (
              <WowCard key={index} wow={wow}/>
            ))}
          </>
        )}
        <div className="wow-nav">
          <button onClick={prevPage} disabled={range.start === 0} className="wow-nav-button">Prev page</button>
          <button onClick={nextPage} className="wow-nav-button">Next page</button>
        </div>
      </div>
    </div>
  )
}