import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CandidateList from './pages/CandidateList'
import Navbar from './components/Navbar'
import CandidateDetail from './pages/CandidateDetail'
import UpdateCandidate from './pages/UpdateCandidate'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<CandidateList/>}/>
        <Route path='/details/:id' element={<CandidateDetail/>}/>
        <Route path='/update/:id' element={<UpdateCandidate/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
