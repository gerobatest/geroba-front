import React from 'react'
import { Parallax } from 'react-scroll-parallax';

function APropos() {

  return (
        <div className="sectionContainer" id="about">
            <div className="sectionText">
                <h1 className="title" >
                    Comment ça marche ?
                </h1>

                <div>
                    <p className="paragraph">
                      Il s’agit d’une solution Full web qui offre la possibilité d'une version
                      mobile qui puisse fonctionner avec ou sans connexion Internet.
                    </p>
                    <p className="paragraph">
                      Une fois la base constituée, l’application permet d'anticiper
                      sur les actions de maintenance préventive et les renouvellements
                      et ainsi de générer des économies polyvalentes.
                    </p>
                    <p className="paragraph">
                      La facilité d'utilisation est un élément majeur de nos interfaces 
                      ; l’objectif est que des personnes non initiées avec l'informatique 
                      puissent utiliser de façon simple la solution, afin de garantir la
                      mise à jour de la base informative.
                    </p>
                    <p className="paragraph">
                      Grâce à des menus programmables par l'administrateur local, chaque
                      écran est configurable en fonction du besoin défini par chaque 
                      collectivité. Les conditions d’accès aux données sont également
                      définies, utilisateurs par utilisateurs en fonction des droits accordés.
                    </p>
                    <p className="paragraph">
                      La gestion multithématique de l'application permet de couvrir tous
                      les besoins au sein d'une même direction.
                    </p>
                    <p className="paragraph">
                      Pour la partie routière, une base d'images dynamiques peut être intégrée
                      (type Google Street View privé). Si des relevés existent à des dates
                      différentes, on peut même procéder à une comparaison des bases
                      à un même emplacement.
                    </p>
                    <p className="paragraph">
                      Dans le domaine routier, le fonctionnement se fait en PR + Abs et bien entendu en coordonnées  (x ; y) ; pour le bâtiment le 
                      fonctionnement se fera en niveau (avec demi-niveau possible) 
                      dans un bâtiment et en localisation des objets dans un plan ; 
                      les coordonnées (x ; y) seront également disponibles.
                    </p>
                </div>    
            </div>

            <div className="sectionImage" id="tablette">
                <Parallax translateX={['200px', '-30px']}> 
                    <img src="/tablette.png" alt="Tablette avec carte"/>
                </Parallax>
            </div>
        </div>
  )
}

export default APropos