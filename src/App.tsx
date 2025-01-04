import './App.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ProjectsPage from './pages/Projects'
import Donate from './pages/Donate'
import ErrorPage from './pages/Error'
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
            <Route path="/projects" element={<ProjectsPage/>}/>
            <Route path="/donate" element={<Donate/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </div>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
