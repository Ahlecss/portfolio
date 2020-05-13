import React from 'react';

import './Projects.scss';

import image1 from './Ecoapp1.png';
import image2 from './Ecoapp2.png';
import image3 from './Ecoapp3.png';
import Recherche from '../../assets/search.svg';
import Maquette from '../../assets/brush.svg';
import Wireframe from '../../assets/maquette.svg';
import Developpement from '../../assets/code.svg';

const Ecoapp = () => {


    return(
        <div className='project_wrapper'>
            <div className="project_wrapper-brief">
                <h2 className="project_name">Ecoapp</h2>
                <h3 className="project_technos">React || Angular || Vue</h3>

                <div className='project_wrapper-resume'>
                    <div className='project_wrapper-resume-infos'>
                        <h4>BRIEF</h4>
                        <h4>2020</h4>
                    </div>
                    <p>Une application utile, minimaliste, et engagée, permetant l'amélioration de notre connaissance écologique.</p>
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
                    <h3>Agir collectivement</h3>
                    <p>L'application se veut ludique et pédagogique : chacun peut réaliser des quizzs pour parfaire sa connaissance de bons gestes, et les appliquer par la suite au moyen de défis.</p>
                    <p>Beaucoup de recherches ont étés nécessaires : tant sur le plan technique et visuel, que sur les parcours utilisateurs visant à être satisfaisant et récompensant Enfin, le contenu qui par la même m'a aidé à en connaitre d'avantage sur l'écologie.
 </p>
                </div>
            </div>
            
            <div className="project-conception">
                <img src={image1} alt="Page d'accueil"/>
                <img src={image2} alt="Page d'accueil" />
                <img src={image3} alt="Page d'accueil" className="downsized_image"/>
            </div>
            
            <div className="project-link ecoapp">
                <a href="http://ecoapp.netlify.app" target='_blank' rel="noopener noreferrer" className="agenceleaf">VIEW WEBSITE</a>
            </div>

            <div className="project_wrapper-menu">
                <a href="experiments" className="project_wrapper-menu_prev">
                    <h3>Précédent</h3><br/>
                    <h2>Expériments</h2>
                </a>
                <a href="inr" className="project_wrapper-menu_next">
                    <h3>Suivant</h3><br/>
                    <h2>INR</h2>
                </a>
            </div>
        </div>
    )
}

export default Ecoapp;