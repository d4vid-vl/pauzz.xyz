import { Project } from '../components/Project'
import { Projects } from '../helpers/Projects'
import '../styles/Portfolio.css'

function Portfolio() {
  return (
    <div className="portfolioPage">
      <h2 className="portfolioTitle">Currently I'm learning a lot of languages and how to code</h2>
      <h3>Here are some of my projects I've been working on!</h3>
      <div className="projectsList">
        {Projects.map((item,key) => {
          return (
            <Project key={key} name={item.name} image={item.image} language={item.language} desc={item.desc} link={item.link}/>
          )
        })} 
      </div>
      <p>TODO: Add better images and maybe videos</p>
    </div>
  )
}

export default Portfolio
