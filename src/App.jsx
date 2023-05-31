import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import AuthContext from './AuthContext'
import Home from './Home'
import Activities from './Activities'
import Profile from './Profile'
import Agenda from './agenda'


function App() {
  const [jwt,setJwt] = useState('');

  return (
    <>
      <AuthContext.Provider value={jwt}>
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>{' '}
            <Link to="/profile">Profile</Link>{' '}
            <Link to="/activities">Activities</Link>{' '}
            <Link to="/agenda">Week's Agenda</Link>{' '}
          </nav>
          <Routes>
            <Route path="/" element={<Home setJwt={setJwt} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/agenda" element={<Agenda />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  )
}

export default App;