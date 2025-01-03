interface DonateImgProps {
  desc: string;
  img: string;
  link: string;
}

export const DonateImg = ({desc, img, link}: DonateImgProps) => {
  return (
    <div className="donateImg">
      <p>{desc}</p>
      <a className="donateBg" href={link}>
        <div style={{ backgroundImage: `url(${img})` }}></div>
      </a>
    </div>
  )
}
