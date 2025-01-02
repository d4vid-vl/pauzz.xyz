import '../styles/About.css';
import Maxwell from '../assets/About/maxwell.gif';
import { Social } from '../helpers/Social';
import { Socials } from '../components/Socials';
import { BackEnd, FrontEnd, DevTools, CreativeTools } from '../helpers/Stuff';
import { Languages } from '../components/Languages';

function About() {
  return (
    <div className="aboutPage">
      <h2 className="aboutHeader">About Me</h2>

      {/* Intro */}
      <div className="aboutContent">
        <img src={Maxwell}/>
        <p className="aboutText">
        Hey, I'm David, a software engineer student based in Chile 🇨🇱. I'm currently studying at the Pontificia Universidad Católica de Chile. Currently I'm working on myself (mentally and physically), learning a lot of programming languages, making and listening to music, and I'm also interested in complex mathematics! I speak Spanish (Native), English (C1) and Portuguese 🇧🇷 (30/40%).
        </p>
        <div className="aboutSocials"> 
          {Social.filter(item => item.name === "Github" || item.name === "Twitter").map((item, index) => (
            <Socials key={index} name={item.name} link={item.link} svg={item.svg} />
          ))}
        </div>
      </div>
      
      {/* "Experience" lmao */}
      <h2 className="aboutHeader">Experience</h2>
      <div className="langContent">
        <p className="expText">Keep in mind that I'm currently learning most of these and will continue learning! Will keep updated when possible
        </p>
        <div className="aboutSpace"></div>
        <h3>Back-End</h3>
        <div className="langItems">
          {BackEnd.map((item, index) => (
            <Languages key={index} name={item.name} svg={item.svg} />
          ))}
        </div>
        <h3>Front-End</h3>
        <div className="langItems">
          {FrontEnd.map((item, index) => (
            <Languages key={index} name={item.name} svg={item.svg} />
          ))}
        </div>
        <h3>Dev Tools</h3>
        <div className="langItems">
          {DevTools.map((item, index) => (
            <Languages key={index} name={item.name} svg={item.svg} />
          ))}
        </div>
        <h3>Creative Tools</h3>
        <div className="langItems">
          {CreativeTools.map((item, index) => (
            <Languages key={index} name={item.name} svg={item.svg} />
          ))}
        </div>
      </div>

      {/* Interests */}
      <h2 className="aboutHeader">Interests</h2> 
      <div className="aboutContent">
        <div className="aboutSocials">
          {Social.filter(item => item.name === "RateYourMusic" || item.name === "Last.fm" || item.name === "Bandcamp 1" || item.name === "Bandcamp 2").map((item, index) => (
          <Socials key={index} name={item.name} link={item.link} svg={item.svg} />
          ))}
        </div>
        <p className="aboutText">
         Normally on my free time, I enjoy making and listening to music, it's a hobby I'm very passionate about and had some projects see the light of day, you can check them out on my Bandcamp pages! Apart from what I said earlier, I enjoy talking about movies and series, some books, and obviously some video games too. Other topics I can talk about are programming, mathematics, and some other stuff like history, sociology, football, etc... I'm a very open-minded person, so feel free to talk to me about anything! 🌟
        </p>
        <img src={Maxwell}/>
      </div>

      {/*Socials*/}
      <h2 className="aboutHeader">Socials</h2>
      <div className="aboutContent">
        <img src={Maxwell}/>
        <p className="aboutText">
        Apart from the other socials I already linked above, you can text me on Discord or check my Pronouns page! I'm always open to talk to new people and talk about anything, or just to have a good time :)
        </p>
        <div className="aboutSocials">         
          {Social.filter(item => item.name === "Discord" || item.name === "Pronouns").map((item, index) => (
            <Socials key={index} name={item.name} link={item.link} svg={item.svg} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

