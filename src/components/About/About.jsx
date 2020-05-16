import React from 'react';

import './About.scss'

const About = () => {

    //const aboutBox = document.getElementsByClassName('about_box');
    const cursor = document.getElementById('cursor');
    const cursorStroke = document.getElementById('cursor-stroke');

    const handleHover = (e) => {
        cursor.style.transform = 'scale(1)';
        cursorStroke.style.left = '-25px';
        console.log(document.getElementById('cursor'));
    }

    const handleOut = (e) => {
        cursor.style.transform = 'scale(.25)';
        console.log('yes');
    }

    const handleScroll = (event) => {
        console.log(event.srcElement.body.scrollTop)
    }

    //window.addEventListener('scroll', handleScroll());

    return(
        <div className="about_wrapper" onScroll={() => handleScroll()}>
        
            <div className="about_box">
                <div className='mask'>
                <h2>ABOUT ME</h2>
                </div>
                <p>Hi ! i'm a <strong>Junior Front End Developer</strong>,
                    currently working at <a href="https://www.ekino.com" target="_blank" rel="noopener noreferrer" onMouseOver={(e) => handleHover(e)} onMouseOut={(e) => handleOut(e)}>ekino.</a></p>
                    <p>Passionate with new technologies and art. 
                    I love to learn and create with others, 
                    that's why I currently apply for <strong>interactive developer's</strong> Degree at <a href="https://www.gobelins.fr" target="_blank" rel="noopener noreferrer" onMouseOver={(e) => handleHover(e)} onMouseOut={(e) => handleOut(e)}>Gobelins</a> !</p>
            </div>
            <div className="skills_box">
                <h2>SKILLS</h2>
                <p>I do my best with HTML / CSS, obviously and experiment with librairies like Three.js.
                   Angular, React and Vue are my essentials !
                   I also prototype and enhance  what i create, using Adobe XD, Sketch and Illustrator. </p>
            </div>
        </div>
    )
}

export default About;