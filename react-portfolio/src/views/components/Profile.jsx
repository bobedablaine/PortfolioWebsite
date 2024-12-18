import Typewriter from '../../assets/typewriter'

const Profile = () => {

    return(
        <>
        <div className="profile-content">
            <div className="intro">
                <h1>Hey! I'm Jacob Berry</h1>
            <div className="typediv">
                <p className="typing"><Typewriter text="New grad and aspiring software developer" delay={100} infinite /></p>
            </div>
            </div>
            <div className="picture-container">
                <img src="/images/profile.jpg" alt="My Profile" className='profile-picture'/>
            </div>
        </div>
        </>
        
       
    )
}

export default Profile;