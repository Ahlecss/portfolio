import React from 'react';

import './Projects.scss';

import image1 from './AgenceLeaf1.png';
import image2 from './AgenceLeaf2.png';
import Recherche from '../../assets/search.svg';
import Maquette from '../../assets/brush.svg';
import Wireframe from '../../assets/maquette.svg';
import Developpement from '../../assets/code.svg';

const AgenceLeaf = () => {

    return (
        <div className='project_wrapper'>
            <div className="project_wrapper-brief">
                <h2 className="project_name">Agence Leaf</h2>
                <h3 className="project_technos">HTML | CSS | Javascript</h3>

                <div className='project_wrapper-resume'>
                    <div className='project_wrapper-resume-infos'>
                        <h4>BRIEF</h4>
                        <h4>2018</h4>
                    </div>
                    <p>La création d'un site agence fictive, innovant visuellement et techniquement, reposant sur la valeur commune de ses membres : l'écologie.</p>
                </div>
            </div>


            <div className="project_wrapper-data">
                <div className="project-role">
                    <h2>RÔLE</h2>
                    <h3><img src={Recherche} alt="Recherches" />Recherches</h3>
                    <h3><img src={Maquette} alt="Maquettes" />Maquettes</h3>
                    <h3><img src={Wireframe} alt="Wireframes" />Wireframes</h3>
                    <h3><img src={Developpement} alt="Developpement" />Développement</h3>
                </div>
                <div className='resume2'>
                    <h3>Une équipe créative</h3>
                    <p>La polyvalence de l'équipe et le partage des tâches m'a permis d'adopter la position de développeur et de designer.</p>
                    <p>Afin de nous démarquer et faire valoir notre créativité engagée, le site de l'agence Leaf fut pensé comme un patron d'origami. La navigation originale permet de créer une accroche interactive auprès de l'utilisateur, en plus d'être un challenge de développement. </p>
                </div>
            </div>

            <div className="project-conception">
                <img src={image1} alt="Page d'accueil" />
                <img src={image2} alt="Page d'accueil" className="downsized_image" />
            </div>

            <div className="project-link">
                <a href="alexissejourne.fr/agenceleaf/agenceleaf" target='_blank' rel="noopener noreferrer" className="agenceleaf">VIEW WEBSITE</a>
            </div>

            <div className="project_wrapper-menu">
                <a href="/projects/experiments" className="project_wrapper-menu_prev">
                    <h3>Précédent</h3><br />
                    <h2>Expériments</h2>
                </a>
                <a href="/projects/inr" className="project_wrapper-menu_next">
                    <h3>Suivant</h3><br />
                    <h2>INR</h2>
                </a>
            </div>
        </div>
    )
}

export default AgenceLeaf;