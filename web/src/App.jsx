import { BrowserRouter, Route, Routes} from 'react-router-dom' 

import Navbar from '../components/Navbar/Navbar.jsx'
import Home from '../components/Home/Home.jsx'
import Login from '../components/Login/Login.jsx'
import SignUp from '../components/SignUp/SignUp.jsx'
import ContactUs from '../components/ContactUs/ContactUs.jsx'
import About from '../components/About/About.jsx'
import Footer from '../components/Footer/Footer.jsx'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
