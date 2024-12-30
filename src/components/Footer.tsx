import '../styles/Footer.css'

import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="socialMedia">
        <TwitterIcon/> <GitHubIcon/>
      </div>
      <p> &copy; 2024 pauzz.xyz</p>
    </div>
  )
} 
