import './App.css'

import { Routes, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar/Navbar'
import { Home, About, Login, Signup } from './components/Navbar/pages/'


const App = () => {

  return (
    <>
      <Navbar />
      <Routes>  
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </>
  )
}

export default App
