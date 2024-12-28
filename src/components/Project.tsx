interface ProjectProps {
  name: string;
  image: string;
  language: string;
  desc: string;
  link: string;
}

export const Project = ({name, image, language, desc, link}: ProjectProps) => {
  return (
    <div className="projectItem">
      <div style={{backgroundImage: `url(${image})`}}></div>
      <h2>{name}</h2>
      <h5>Language: {language}</h5>
      <p>{desc}</p>
      <a href={link}>Github</a>
    </div>
  )
}
