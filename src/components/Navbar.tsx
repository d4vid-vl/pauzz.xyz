import '../styles/Navbar.css'
import pfp from '../assets/pfp.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
 return (
  <header className = "header">
    <div>
      <img src={pfp} alt="Profile"/>
      <a href="/" className = "logo">pauzz.xyz</a>
    </div>
    <nav className="navbar">
      <Link to="/" className="bar">Home</Link>
      <Link to="/about" className="bar">About me</Link>
      <Link to="/portfolio" className="bar">Portfolio</Link>
      <Link to="/socials" className="bar">Socials</Link>
      <Link to="/donate" className="bar">Donate me!</Link>
    </nav>
  </header>
 ) 
}
