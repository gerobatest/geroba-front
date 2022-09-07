import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import '../style/SectionDemo.scss';
import '../style/Tarification.scss';
import '../style/Section.scss';


export default function Tarification() {

  return ( 
    <div className="sectionContainer" id="tarification">
            <div className="sectionText">
                <h1 className="title" >
                    Tarification
                </h1>

                
                <div>
                    <div className="paragraph">
                      <p>Pour les maître d'ouvrage, la tarification est basée sur 3 critères : </p> 
                      <ul> 
                        <li>Le contenu et le nombre de familles thématiques métiers souhaitées.</li> 
                        <li>Le nombre d’objets dans la base.</li> 
                        <li>Le nombre d’utilisateurs de la version Mobile
                        (sans limitation pour la version Master)</li> 
                      </ul>
                    </div>

                    <div className="paragraph">
                      <p>Des fonctionnalités opératoires complémentaires sont également disponibles, en options.</p>
                    </div>

                    <div className="paragraph">
                      <p>Le budget est compris entre 2 500 € HT et 15 000 € HT (montant plafond) par année, 
                        comprenant, la solution, la création de la base (sans intégration de données), 
                        la formation initiale, l’hébergement des données et l’assistance utilisateurs.</p>
                    </div>

                    <div className="paragraph">
                      <p>Pour les entreprises, la tarification est basée sur deux critères uniquement :</p> 
                      <ul> 
                        <li>Le nombre de dossier gérés avec l’application.</li> 
                        <li>Le nombre d’objets gérés par dossier.</li> 
                      </ul>
                    </div>

                    <div className="paragraph">
                      <p>Le budget est donc fonction de l’importance que l’entreprise donnera à la solution 
                      dans son organisation.</p>
                    </div>
                  </div>
                
                
            </div>

            <div className="sectionImage" id="tablette">
                {/* <Parallax translateX={['80px', '-80px']}>  */}
                <Parallax translateX={['120px', '-120px']}>
                  <img src="tarification.jpg" alt="Tablette avec carte"/>
                </Parallax>
            </div>
        </div>
  )
}
