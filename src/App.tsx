import './App.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Donate from './pages/Donate'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/donate" element={<Donate/>}/>
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
