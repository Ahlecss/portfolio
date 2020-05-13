import React from 'react';

import './Contact.scss'
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';

const Contact = () => {

    return(
        <div className='contact_wrapper'>
            <h2 className='contact_wrapper--title'>Let's work together !</h2>
            <a href="mailto:alexis.sejourne@hotmail.com" className="contact_wrapper--link">alexis.sejourne@hotmail.com</a>
            <div className="icon_wrapper">
                <a href="https://www.linkedin.com/in/alexis-sejourn%C3%A9-62898b150/" target='_blank' rel="noopener noreferrer" className="icon_wrapper--link"><img src={linkedin} alt="Linkedin"/></a>
                <a href="https://www.github.com/Ahlecss" target='_blank' rel="noopener noreferrer" className="icon_wrapper--link"><img src={github} alt="Github"/></a>
            </div>
        </div>
    )
}

export default Contact;