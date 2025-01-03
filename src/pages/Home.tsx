import '../styles/Home.css'

import Maxwell from '../assets/About/maxwell.gif'

function Home() {
  return (
    <div className="homePage">
      <div className="headerHome">
        <h1>Hey! I'm David 👋</h1>
        <p>Im a Software Engineer student in the Pontificia Universidad Católica de Chile</p>
        <img src={Maxwell}/>
       </div>
    </div>
  )
}

export default Home
