import '../styles/Footer.css'

import { Social } from '../helpers/Social'

import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'

export const Footer = () => {
 
  return (
    <div className="Footer">
      <div className="socialMedia">
        {Social.map((social, index) => (
          <a key={index} href={social.link}>
            {social.name === "Twitter" && <TwitterIcon />}
            {social.name === "Github" && <GitHubIcon />}
          </a>
        ))}
      </div>
      <p> &copy; 2024 pauzz.xyz</p>
    </div>
  )
}
