import React, { useState, useEffect } from 'react'
import WowCard from '../components/WowCard'

export default function WowRandom() {
  const [wow, setWow] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchWow = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://owen-wilson-wow-api.onrender.com/wows/random')
      const data = await response.json()
      setWow(data[0])
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchWow()
  }, [])

  return (
    <div className='main'>
      <div className='container-main'>
        <p className='title'>Random wow</p>
        {loading ? <p>Loading...</p> : <WowCard wow={wow} />}
        <div className='wow-nav'>
          <button onClick={fetchWow} className='wow-nav-button'>
            Next wow
          </button>
        </div>
      </div>
    </div>
  )
}
