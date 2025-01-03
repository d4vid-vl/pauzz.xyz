import '../styles/Donate.css'

import Maxwell from '../assets/About/maxwell.gif'
import { Palestine } from '../helpers/Donate'
import { DonateImg } from '../components/DonateImg'

function Donate() {
  return (
    <div className="donatePage">
      <div className="headerDonate">
        <h1>Donations!</h1>
        <p className="donateText">If you think about donating me, first think of the numerous people you can help with your donations</p>

        {/* Palestine */}
        <div className="donateCategory">
          <h2>Help Palestine! 🇵🇸</h2>
          <div className="donateLinks">
            {Palestine.map((item, index) => {
              return (
                <DonateImg key={index} desc={item.desc} img={item.img} link={item.link}/>
              )
            })}
          </div>
        </div>

        {/* Personal donation */}
        <div className="donateCategory">
        <h2>Personal Donations</h2>
        <p className="donateText">If you want to donate me personally, you can do it via Ko-fi</p>
          <div className='donateKofi'>
          <iframe id='kofiframe' src='https://ko-fi.com/pauzz/?hidefeed=true&widget=true&embed=true&preview=true' style={{border:'none', width:'100%', padding:'4px'}} height='712' title='pauzz'></iframe>
          </div>
        </div>
        <img src={Maxwell}/>
      </div>
    </div>
  )
}

export default Donate
