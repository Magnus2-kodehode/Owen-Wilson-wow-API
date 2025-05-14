import { Link, NavLink } from 'react-router-dom'
import Nav from "./Nav"
import imgOwenWilson from '/assets/owen-wilson.png'

export default function Header() {

  return (
    <div className='header'>
      <Link to='/Owen-Wilson-wow-API' className='header-title'>
        <img src={imgOwenWilson} alt="Wow!" />
        Wow!
      </Link>
      <Nav/>
    </div>
  )
}