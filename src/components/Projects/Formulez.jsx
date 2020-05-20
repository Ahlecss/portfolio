import React from 'react';

import './Projects.scss';

import image1 from './Formulez1.png';
import Developpement from '../../assets/code.svg';
import Bugs from '../../assets/bugs.svg';

const Formulez = () => {

    return(
        <div className='project_wrapper'>
            <div className="project_wrapper-brief">
                <h2 className="project_name">Formulez</h2>
                <h3 className="project_technos">Angular | Typescript</h3>

                <div className='project_wrapper-resume'>
                    <div className='project_wrapper-resume-infos'>
                        <h4>BRIEF</h4>
                        <h4>2019</h4>
                    </div>
                    <p>Site conséquent côté Front End, permettant la création de formulaires personnalisables.</p>
                    <p>Développement réalisé lors d'un chouette stage.</p>
                </div>
            </div>


            <div className="project_wrapper-data">
                <div className="project-role">
                    <h2>RÔLE</h2>
                    <h3><img src={Developpement} alt="Developpement"/>Développement</h3>
                    <h3><img src={Bugs} alt="Developpement"/>Correction de bugs</h3>
                </div>
                <div className='resume2'>
                    <h3>Formulez un besoin</h3>
                    <p>La grande pédagogie de l'équipe fut également la raison de mon amélioration technique.</p>
                </div>
            </div>
            
            <div className="project-conception">
                <img src={image1} alt="Page d'accueil"/>
            </div>
            
            <div className="project-link formulez">
                <a href="https://www.formulez.com" target='blank' rel="noopener noreferrer" className="agenceleaf">VIEW WEBSITE</a>
            </div>

            <div className="project_wrapper-menu">
                <a href="/projects/inr" className="project_wrapper-menu_prev">
                    <h3>Précédent</h3><br/>
                    <h2>INR</h2>
                </a>
                <a href="/projects/ecoapp" className="project_wrapper-menu_next">
                    <h3>Suivant</h3><br/>
                    <h2>Ecoapp</h2>
                </a>
            </div>
        </div>
    )
}

export default Formulez;