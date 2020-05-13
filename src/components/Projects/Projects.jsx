import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    CSSTransition
} from "react-transition-group"

import './Projects.scss';
import image1 from './AgenceLeaf1.png';
import image2 from './INR1.png';
import image3 from './Formulez1.png';
import image4 from './Ecoapp1.png';

const Projects = () => {

    const history = useHistory();

    const selectProject = (link) => {
        history.push('projects' + link);
    }

    return (
        <CSSTransition
        appear
        in
        classNames='projects-transition-appear'
        timeout={500}>
        <div className='projects_box'>
            <ul className='project_list'>
                <li className='project_item'>
                    <a onClick={() => selectProject("/agenceleaf")}>Agence Leaf</a>
                    <div className='background' >
                        <img src={image1} />
                    </div>
                </li>
                <li className='project_item'>
                    <a onClick={() => selectProject("/inr")}>INR</a>
                    <div className='background'>
                        <img src={image2} />
                    </div>
                </li>
                <li className='project_item'>
                    <a onClick={() => selectProject("/formulez")}>Formulez</a>
                    <div className='background'>
                        <img src={image3} />
                    </div>
                </li>
                <li className='project_item'>
                    <a onClick={() => selectProject("/ecoapp")}>Ecoapp</a>
                    <div className='background'>
                        <img src={image4}/>
                    </div>
                </li>
                <li className='project_item'>
                    <a /*onClick={() => selectProject("/kidz")}*/>Kidz</a>
                    <div className='background'>
                        <img src='' alt='Soon !'/>
                    </div>
                </li>
                <li className='project_item'>
                    <a /*onClick={() => selectProject("/nexity")}*/>Nexity</a>
                    <div className='background'>
                        <img src='' alt='Soon !'/>
                    </div>
                </li>
                <li className='project_item'>
                    <a /*onClick={() => selectProject("/experiments")}*/>Experiments</a>
                    <div className='background'>
                        <img src='' alt='Soon !'/>
                    </div>
                </li>

            </ul>
        </div>
        </CSSTransition>

    )
}

export default Projects;