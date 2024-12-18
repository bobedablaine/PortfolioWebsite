import { useNavigate } from "react-router-dom";


const Portfolio = () => {
    const navigate = useNavigate();

    const goToProjects = () => {
        navigate('/projects')
    }

    return(
        <>
        <div className="portfolio-content" id="portfolio">
                <h1>Portfolio</h1>
                <p>Here are just a couple of my favorite projects that I have worked on throughout my time in coding</p>
                <div className="midgard-project">
                  <h1>Midgard</h1>
                  <img src="../../src/assets/midgard-home.png" alt="Midgard Application Home Screen" className="midgard-home"/>
                  <p>Midgard is a learning management system that allows users to read about cybersecurity while having interactive activities about the topics they are reading. Our application has interactive activities, quizzes, and even functional tools to help people stay safe online all in order to keep people educated and protected!</p>
                </div>

                <div className="mover-project">
                  <h1>Mover Melee</h1>
                  <img src="../../src/assets/mover-melee.png" alt="Boss fight in Mover Melee" className="mover-home"/>
                  <p>Mover Melee is a more polished version of a game I developed that has the look of classic top-down retro games with the feel of modern rogue-like elements. Developed using C# in Unity.</p>
                </div>
                <div className="button-holder">
                  <button onClick={goToProjects} className="projects-button">Check out more on my projects!</button>
                </div>
                </div>
        </>
    );
}

export default Portfolio;