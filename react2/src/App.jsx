import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './App.css'


function App() {
  return (
    <Router>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} /> {/* nested routes */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />   {/* 404 fallback */}
      </Routes>
    </Router>
  )
}

export default App
