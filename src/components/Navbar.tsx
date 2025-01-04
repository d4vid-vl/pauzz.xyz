import { useState } from 'react'
import '../styles/Navbar.css'
import pfp from '../assets/pfp.png'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder'

export const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false)
  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }

 return (
  <header className = "header">
    <div id={showLinks ? "show" : "closed"} className = "main">
      <div className="leftside">
        <img src={pfp} alt="Profile" className="pfp"/>
        <a href="/" className = "logo">pauzz.xyz</a>
        <div className="hiddenLinks">
          <Link to="/" className="bar">Home</Link>
          <Link to="/about" className="bar">About me</Link>
          <Link to="/projects" className="bar">Projects</Link>
          <Link to="/donate" className="bar">Donate!</Link>
        </div>
      </div>
    </div>
    <nav className="navbar">
      <Link to="/" className="bar">Home</Link>
      <Link to="/about" className="bar">About me</Link>
      <Link to="/projects" className="bar">Projects</Link>
      <Link to="/donate" className="bar">Donate!</Link>
    <button onClick={toggleLinks}>
      <ReorderIcon/>
    </button>
    </nav>
  </header>
 ) 
}
