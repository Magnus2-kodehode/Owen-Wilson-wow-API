import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
import Home from './pages/Home'
import Documentation from './pages/Documentation'
import Header from './components/Header'

export default function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='*' element={<Error/>}/>
        <Route path='/Owen-Wilson-wow-API' element={<Home/>}/>
        <Route path='/Owen-Wilson-wow-API/arbeidslogg' element={<Documentation/>}/>
      </Routes>
    </Router>
  )
}