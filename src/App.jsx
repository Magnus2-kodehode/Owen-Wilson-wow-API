import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Error from './pages/Error'
import WowRandom from './pages/WowRandom'
import WowBrowseAll from './pages/WowBrowseAll'
import WowBrowseByMovie from './pages/WowBrowseByMovie'
import Documentation from './pages/Documentation'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='*' element={<Error />} />
        <Route path='/Owen-Wilson-wow-API' element={<WowRandom />} />
        <Route path='/Owen-Wilson-wow-API/browse_all' element={<WowBrowseAll />} />
        <Route path='/Owen-Wilson-wow-API/browse_by_movie' element={<WowBrowseByMovie />} />
        <Route path='/Owen-Wilson-wow-API/dokumentasjon' element={<Documentation />} />
      </Routes>
    </Router>
  )
}
