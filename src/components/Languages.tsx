interface LanguagesProps {
  name: string;
  svg: string;
}

export const Languages = ({name, svg}: LanguagesProps) => {
  return (
    <div className="langItem">
      <a>
        <img src={svg} alt={name}/>
      </a>
    </div>
  )
}
