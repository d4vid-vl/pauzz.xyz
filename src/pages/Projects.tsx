import { Project } from '../components/Project'
import { Projects } from '../helpers/Projects'
import Maxwell from '../assets/About/maxwell.gif'
import '../styles/Projects.css'

function ProjectsPage() {
  return (
    <div className="projectsPage">
      <h1 className="projectsTitle">Currently I'm learning a lot of languages and how to code</h1>
      <p>Here are some of my projects I've been working on!</p>
      <div className="projectsList">
        {Projects.map((item,key) => {
          return (
            <Project key={key} name={item.name} image={item.image} language={item.language} desc={item.desc} link={item.link}/>
          )
        })}
      </div>
      <p>TODO: Add better images and maybe videos</p>
      <img src={Maxwell}/> 
    </div>
  )
}

export default ProjectsPage
