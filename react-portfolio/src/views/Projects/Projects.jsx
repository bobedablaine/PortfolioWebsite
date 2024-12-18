import { useState, useEffect } from 'react'
import Typewriter from '../../assets/typewriter'
import DropDownMenu from '../../assets/dropdown'
import Profile from '../components/Profile'
import About from '../components/About'
import { useNavigate } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
    const [backgroundColor, setBackgroundColor] = useState("#ecb6f3"); // Initial color (red)
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top
      }, []);
    
    const toHome = () => {
        navigate('/');
    };

    const toGitHub = () => {
        window.open('https://github.com/bobedablaine')
    }
    
    // Define custom color stops
    const colorStops = [
      { stop: 0, color: "#ecb6f3" }, 
      { stop: 0.25, color: "#dad28a" }, 
      { stop: 0.75, color: "#eba7a7" }, 
      { stop: 1, color: "#8bc0df"}
    ];
  
    // Interpolate between two colors
    const interpolateColor = (color1, color2, factor) => {
      const c1 = parseInt(color1.slice(1), 16); // Convert hex to integer
      const c2 = parseInt(color2.slice(1), 16);
  
      const r = Math.round(((c2 >> 16) - (c1 >> 16)) * factor + (c1 >> 16));
      const g = Math.round((((c2 >> 8) & 0xff) - ((c1 >> 8) & 0xff)) * factor + ((c1 >> 8) & 0xff));
      const b = Math.round(((c2 & 0xff) - (c1 & 0xff)) * factor + (c1 & 0xff));
  
      return `rgb(${r}, ${g}, ${b})`;
    };
  
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Current scroll position
      const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height
  
      if (docHeight === 0) return; // Prevent division by zero
  
      const scrollFraction = scrollTop / docHeight; // Scroll progress (0 to 1)
  
      // Find the two nearest color stops
      const lowerStop = colorStops.reduce((prev, curr) => (curr.stop <= scrollFraction ? curr : prev));
      const upperStop = colorStops.find((stop) => stop.stop >= scrollFraction) || lowerStop;
  
      // Interpolate between the colors
      const factor = (scrollFraction - lowerStop.stop) / (upperStop.stop - lowerStop.stop || 1);
      const newColor = interpolateColor(lowerStop.color, upperStop.color, factor);
  
      setBackgroundColor(newColor);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <div className="springParent">
      <button onClick={toHome} className="menu-button-projects">Back to Home</button>
      <div
        style={{
        backgroundColor, // Set dynamic background color
        transition: "background-color 0.4s ease", // Smooth color transition
        }}
        className="springBody"
      >
            <div className="realBody">
              
              <div className="real-body" id="home">
              
                <div className="portfolio-content-projects" id="portfolio">
                <h1>Portfolio</h1>
                <p>A more in-depth look into my projects!</p>
                <div className="midgard-project">
                  <h1>Midgard</h1>
                  <img src="/images/midgard-home.png" alt="Midgard Application Home Screen" className="midgard-home"/>
                  <p>The home page of Midgard allowing the user to see all the navigable pages and giving a professional air to the website. Establishes a consistant aesthetic that is present throughout the entire application.</p>
                  <img src="/images/midgard-content.png" alt="Midgard Application Content Screen" className="midgard-content"/>
                  <p style={{clear: "right"}}>The interactive textbook content that takes the user through a variety of cybersecurity topics that can be crucial to know. Our application provides the user interactive activities throughout the chapters and with a way for them to quiz themselves whenever they feel confident in what they read. Also with an integrated AI terminal allowing users to ask questions about the content whenever they might need a refresher.</p>
                  <img src="/images/midgard-tools.png" alt="Midgard Application Tools Screen" className="midgard-tools"/>
                  <p>The tools page of Midgard which gives users the ability to apply what they have learned by scanning potentially malicious url's or creating a secure password with our password generator.</p>
                </div>

                <div className="mover-project">
                  <h1>Mover Melee</h1>
                  <img src="/images/mover-melee-hub.png" alt="Boss fight in Mover Melee" className="mover-home"/>
                  <p>Mover Melee begins with the player in a hub that allows them to pick and use one of three weapons, each with a unique style of play. This game contains a progression system where the player must defeat a room of enemies north, west, and east of the npc in the hub and saves the players progression upon victory.</p>

                  <img src="/images/mover-melee.png" alt="Boss fight in Mover Melee" className="mover-boss"/>
                  <p style={{clear: "right"}}>Upon completion of the previous two rooms, the player is faced with a boss fight where the boss will spawn smaller enemies, each on one hit point, during it. This project, while turned in to a class, became mostly a passion project for me. I had a lot of fun developing the different weapon styles and progression system, as well as implementing some music to give it some much needed ambience. I hope this glimpse into it was interesting for you too!</p>

                </div>

                <div className="github-project">
                    <h2>Check out my Github for More!</h2>
                    <button onClick={toGitHub} className="github-button"><FaGithub/></button>
                </div>
                
                </div>
              </div>
      
        </div>
      </div>
      
  </div>
  
  )
}

export default Projects;