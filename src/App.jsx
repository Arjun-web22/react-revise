import { useState } from 'react'
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Students from './pages/Students';
import StudentsDetails from './pages/StudentsDetails';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      
      <Route path='/' element={<Home/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/students' element={<Students/>}></Route>
      <Route path='/students/:id' element={<StudentsDetails/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App
