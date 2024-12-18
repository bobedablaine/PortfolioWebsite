


const About = () => {

    const goToResume = () => {
      window.open('https://docs.google.com/document/d/14FxJ-niuQ8Os7YzIhaWAlTheMLnlNpNYsxKMBvuNCQo/edit?usp=sharing')
    }

    return(
        <>
        <div className="about-content" id="about">
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center"}}>
                  <h1>About Me</h1>
                  </div>
                  <div className="about-left">
                    <div className="inside-left">
                      <div style={{flexDirection: "column"}}>
                      <h2>Attention to Detail</h2>
                      <p>Whether it is in normal conversation or having to do with my work, whoever or whatever I am engaged with receives my undivided attention. I pride myself on paying close attention to the little things, whether that be making sure everyone feels included or finding a itty-bitty bug in some code!</p>
                      </div>
                      <div className="inside-left-pictures">
                        <img src="../../src/assets/communication.webp" alt="Magnifying Glass" className="img-left"/>
                        <img src="../../src/assets/finding-bugs.jpg" alt="Finding Bugs in Code" className="img-right"/>
                      </div>
                    </div>
                  </div>
                  <div className="about-right">
                    <div className="inside-right">
                      <div className="inside-right-pictures">
                          <img src="../../src/assets/coding-concept.avif" alt="Coding Word" className="img-left"/>
                          <img src="../../src/assets/Healthy habit-cuate.png" alt="Finding Bugs in Code" className="img-right" style={{backgroundColor: "white"}}/>
                        </div>
                      <div style={{flexDirection: "column", marginLeft: "20px"}}>
                        <h2>Loves to be Active</h2>
                        <p>Being active mentally and physically is what gives me the most gratification in life. My ideal day revolves around running in the morning to get my energy up, and then getting some work done. There is no better feeling than wrapping up a day of working hard both mentally and physically.</p>
                      </div>
                      </div>
                    
                      
                  </div>
                  <div className="about-left">
                  <div className="inside-left">
                      <div style={{flexDirection: "column", marginRight: "20px"}}>
                      <h2>New Grad Excited for Whats in Store</h2>
                      <p>A new chapter is opening up and I am curious what is in store for me next. School has been good to me, graduating with a 3.9 GPA, I thrived in that environment, but I am hungry to begin a career in the field I love, working on projects I am passionate about. It's the beginning of the rest of my life, and I am excited to start it!</p>
                      </div>
                      <div className="inside-left-pictures">
                        <img src="../../src/assets/newGrad2.avif" alt="New Grad" className="img-right-solo" style={{marginRight: "20px", height: "auto", width: "35vw"}}/>
                      </div>
                    </div>
                    <div className="button-holder">
                  <button  onClick={goToResume}className="projects-button" style={{marginLeft: "20px"}}>Check out my resume!</button>
                </div>
                  </div>
                </div>
        </>
    )
}

export default About;