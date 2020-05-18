import React from 'react';

import './Home.scss';
import download from '../../assets/download.svg';
import arrow from '../../assets/arrow.svg';
import pic from '../../assets/profilepic.png';
import CV from '../../assets/CV.pdf';

const Home = () => {

    return (
        <>
            <div className='Presentation_wrapper'>
                <div>
                    <div className='Home__wrapper'>
                        <h2>Hi ! Nice to meet you, i'm</h2>
                        <h1>ALEXIS <span>SEJOURNE</span></h1>
                    </div>
                    <div className='btn_wrapper'>
                        <a className="btn_cv" href={CV} target='_blank' rel="noopener noreferrer">Download resume !<img src={download} alt="download" /></a>
                        <a className="btn_learn" href='/about'>Learn more<img src={arrow} alt="scroll" /></a>
                    </div>
                </div>
                <div><img src={pic} alt="Alexis Sejourne's profile" className='profilepic' /></div>
            </div>
        </>
    )
}

export default Home;