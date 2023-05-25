import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import AuthContext from './AuthContext'
import Home from './Home'
import Profile from './Activities'

function App() {
  const [jwt,setJwt] = useState('');

  return (
    <>
      <AuthContext.Provider value={jwt}>
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>{' '}
            <Link to="/profile">Profile</Link>{' '}
          </nav>
          <Routes>
            <Route path="/" element={<Home setJwt={setJwt} />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  )
}

export default App