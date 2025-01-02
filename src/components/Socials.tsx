interface SocialsProps {
  name: string;
  link: string;
  svg: string;
}

export const Socials = ({name, link, svg}: SocialsProps) => {
  return (
    <div className="socialItem">
      <a href={link}>
        <img src={svg} alt={name}/>
      </a>
    </div>
  )
}
