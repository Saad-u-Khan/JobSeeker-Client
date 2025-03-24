import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CandidateList from './pages/CandidateList'
import Navbar from './components/Navbar'
import CandidateDetail from './pages/CandidateDetail'
import UpdateCandidate from './pages/UpdateCandidate'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import UserLogin from './pages/UserLogin'
import JobList from './pages/JobList'
import UpdateJob from './pages/UpdateJob'
import AddJob from './pages/AddJob'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/candidates' element={<CandidateList/>}/>
        <Route path='/candidate/details/:id' element={<CandidateDetail/>}/>
        <Route path='candidate/update/:id' element={<UpdateCandidate/>}/>
        <Route path='/candidate/login' element={<UserLogin/>}/>

        <Route path='/jobs' element={<JobList/>}/>
        <Route path='/job/add' element={<AddJob/>}/>
        <Route path='job/update/:id' element={<UpdateJob/>}/>

        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
