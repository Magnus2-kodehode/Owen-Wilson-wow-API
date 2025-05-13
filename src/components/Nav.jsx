import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  
  return (
    <div className='nav'>
      <Link to='/Owen-Wilson-wow-API' className='nav-item'>
        Random
      </Link>
      <Link to='' className='nav-item'>
        Browse all
      </Link>
      <Link to='' className='nav-item'>
        By movie
      </Link>
      <hr />
      <Link to='/Owen-Wilson-wow-API/dokumentasjon' className='nav-item'>
        Dokumentasjon
      </Link>
    </div>
  )
}