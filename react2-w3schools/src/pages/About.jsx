import { Routes, Route, Link, Outlet } from 'react-router-dom'
import Team from './Team'
import Company from './Company'

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <nav>
        <Link to="team" style={{ marginRight: '10px' }}>Team</Link>
        <Link to="company">Company</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="team" element={<Team />} />
        <Route path="company" element={<Company />} />
      </Routes>
      {/* OR use <Outlet /> if nested inside App.jsx */}
    </div>
  )
}
