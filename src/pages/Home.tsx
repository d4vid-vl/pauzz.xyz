import '../styles/Home.css'

import { useNavigate } from 'react-router-dom'

import Maxwell from '../assets/About/maxwell.gif'
import pfp from '../assets/pfp.png'

function Home() {

  const navigate = useNavigate();
  const handleAbout = () => navigate("/about");
  const handleGithub = () => navigate("/projects");

  return (
    <div className="homePage">
      <div className="headerHome">
        <div className="homeContent">
          <img src={Maxwell} className="maxwellPfp"/>
          <img src={pfp} className="pfpHome"/>
          <img src={Maxwell} className="maxwellPfp"/>
        </div>
        <h1>heyheyhey, welcome to my page</h1>
        <p className='scalingP'>Chronically online developer and part-time musician from Chile 😵‍💫</p>
        <p>i make stuff for fun, mostly back-end stuff and memory management o.o</p>
        <div className="buttonHome">
          <button onClick={handleGithub}>Check my Github projects 🖥️</button>
          <button onClick={handleAbout}>Check out more about me 🐉</button>
        </div>
        <p>i make music too btw</p>
        <img src={Maxwell} className="maxwellHome"/>
       </div>
    </div>
  )
}

export default Home
