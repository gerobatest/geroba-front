import React from 'react';
import Slider from './Slider';
import '../style/Section.scss'; 
import '../style/Slider.scss';
import { Parallax } from 'react-scroll-parallax';

const SectionText = (props) => {

  return (
    <>
      <div id="home">
        <Slider/>
        {/* Solution de mobilité   */}
        <div className="sectionContainer">

            <div className="sectionImage" id="pc">
              <Parallax translateX={['-125px', '80px']}> 
                <img className="iMac" src="imac.png" alt="iMac"/>
              </Parallax>      
            </div>

            <div className="sectionText">
              
              <h1 className="title" >
                Solution de mobilité
              </h1>

              <div>
                  <p className="paragraph">
                    GEROBA permet de procéder à une gestion du patrimoine 
                    routier (et prochainement bâtiment), 
                    à partir d’un état des lieux existants 
                    (récupérable dès lors que les données sont géolocalisées)
                    ou à réaliser par la collectivité ou par nos soins.
                  </p>
                  <p className="paragraph">
                    Cette solution permet de répondre aux besoins des 
                    collectivités sur la gestion de celui-ci. Elle a 
                    particulièrement pris en compte le volet "mise à jour" 
                    afin de garantir que la base puisse être facilement actualisée.
                  </p>
                  <p className="paragraph">
                    La solution a été développée autour de quelques concepts fondamentaux :
                    une version pour les gestionnaires sur PC pour analyser le patrimoine
                    au travers de multiples requêtes, la définition d’actions de terrain
                    qui sont alors mise en œuvre à l’aide d’une version mobile (Android)
                    pour toutes les : relevé initial, surveillance, mise à jour, suivi
                    de travaux, maintenance, …
                  </p>
                  <p className="paragraph">
                    L'application est simple d'utilisation et adaptée à la fois 
                    aux cadres managers et aux agents de terrain. Elle permet que
                    celui qui réalise une action (régie et/ou entreprise) renseigne
                    lui-même la base, en temps réel ou en temps différé, sans avoir
                    besoin de compétence numérique.
                  </p>
                  <p className="paragraph">
                    Elle permet également une gestion dynamique des stocks, 
                    de l'usine à la pose des équipements.
                  </p>
                  <p className="paragraph">
                    <b>La solution est aussi bien destinée aux maîtres d'ouvrage,
                    aux maîtres d'œuvres ainsi qu’aux entreprises.</b>
                  </p>
              </div> 
            </div>
          </div>
        </div>
    </>
  )
}

export default SectionText;
