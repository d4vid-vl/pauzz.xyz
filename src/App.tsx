import './App.css'
import { Navbar } from './components/Navbar' 
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
