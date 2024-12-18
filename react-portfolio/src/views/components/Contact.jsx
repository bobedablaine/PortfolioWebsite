import { FiMail } from 'react-icons/fi'
import { FaGithub, FaInstagram } from 'react-icons/fa'

const Contact = () => {

    return(
        <div className="contact-content" id="contact">
              <h1>Contact Me</h1>
              <div className="contact-items">
                 <a href="mailto:jacobberry777@gmail.com" style={{ textDecoration: 'none', color: '#473527' }}>
                  <FiMail size="2em" />
                </a>
                <a href="https://github.com/bobedablaine" target="_blank" style={{ textDecoration: 'none', color: '#473527' }}>
                  <FaGithub size="2em" />
                </a>
                <a href="https://www.instagram.com/jacobberry11/" target="_blank" style={{ textDecoration: 'none', color: '#473527' }}>
                  <FaInstagram size="2em" />
                </a>
            </div>
        </div>
    )
}

export default Contact;