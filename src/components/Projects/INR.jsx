import React from 'react';

import './Projects.scss';

import image1 from './INR1.png';
import Recherche from '../../assets/search.svg';
import Maquette from '../../assets/brush.svg';
import Wireframe from '../../assets/maquette.svg';
import Developpement from '../../assets/code.svg';

const INR = () => {


    return(
        <div className='project_wrapper'>
            <div className="project_wrapper-brief">
                <h2 className="project_name">I<span>nstitut </span>N<span>umérique </span>R<span>esponsable</span></h2>
                <h3 className="project_technos">HTML | CSS | Wordpress</h3>

                <div className='project_wrapper-resume'>
                    <div className='project_wrapper-resume-infos'>
                        <h4>BRIEF</h4>
                        <h4>2018</h4>
                    </div>
                    <p>Concevoir un site institutionnel visant à sensibiliser et réfléchir autour du numérique responsable, et délivrer des labels.</p>
                </div>
            </div>

            <div className="project_wrapper-data">
                <div className="project-role">
                    <h2>RÔLE</h2>
                    <h3><img src={Recherche} alt="Recherches"/>Recherches</h3>
                    <h3><img src={Maquette} alt="Maquettes"/>Maquettes</h3>
                    <h3><img src={Wireframe} alt="Wireframes"/>Wireframes</h3>
                    <h3><img src={Developpement} alt="Developpement"/>Développement</h3>
                </div>
                <div className='resume2'>
                    <h3>Une équipe créative</h3>
                    <p>Dans la continuité de ma formation, l'Institut du Numérique Responsable est un site réalisé avec l'équipe Leaf. Son fondateur, M. Vincent Courboulay, visait à créer un site collaboratif autour de l'écologie dans le milieu du numérique. Grâce à son approche pédagogique sur le sujet, et son expertise en tant que membre du collectif Green IT, le challenge de l'éco responsabilité fut réalisé.</p>
                </div>
            </div>
            
            <div className="project-conception">
                <img src={image1} alt="Page d'accueil"/>
            </div>
            
            <div className="project-link inr">
                <a href="https://institutnr.org/" target='_blank' rel="noopener noreferrer">VIEW WEBSITE</a>
            </div>

            <div className="project_wrapper-menu">
                <a href="/projects/agenceleaf" className="project_wrapper-menu_prev">
                    <h3>Précédent</h3><br/>
                    <h2>Agence Leaf</h2>
                </a>
                <a href="/projects/formulez" className="project_wrapper-menu_next">
                    <h3>Suivant</h3><br/>
                    <h2>Formulez</h2>
                </a>
            </div>
        </div>
    )
}

export default INR;