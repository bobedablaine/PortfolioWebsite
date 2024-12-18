import { useState, useEffect } from 'react'
import Typewriter from '../../assets/typewriter'
import DropDownMenu from '../../assets/dropdown'
import Profile from '../components/Profile'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

const Home = () => {
    const [backgroundColor, setBackgroundColor] = useState("#ecb6f3"); // Initial color (red)

    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top
    }, []);

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
      <DropDownMenu/>
      <div
        style={{
        backgroundColor, // Set dynamic background color
        transition: "background-color 0.4s ease", // Smooth color transition
        }}
        className="springBody"
      >
            <div className="realBody">
              
              <div className="real-body" id="home">
              <div className="nav-bar">
                  <nav>
                    <a href="#about">About</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                  </nav>
                </div>
                <Profile/>
                <About/>
                <Portfolio/>
                <div className="skills-content" id="skills">
                  <h1>Skills</h1>
                  <div className="skills-container">
                    <div className="skills-left">
                    <h3>Technical</h3>
                    <ul className="skills-list">
                      <li>Frontend Developement</li>
                      <li>Backend Developement</li>
                      <li>Logic and Processing</li>
                      <li>Work-flow Management</li>
                    </ul>
                    </div>
                    <div className="skills-right">
                    <h3>Non-Technical</h3>
                    <ul className="skills-list">
                      <li>Fast Learner</li>
                      <li>Strong Communicator</li>
                      <li>Detail-oriented</li>
                      <li>Independent Worker</li>
                    </ul>
                    </div>
                  </div>
                </div>
                <Contact/>
              </div>
      
        </div>
      </div>
      
  </div>
  
  )
}

export default Home;