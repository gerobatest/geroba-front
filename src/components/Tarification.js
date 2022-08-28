import React from 'react';
import '../style/SectionDemo.scss';
import '../style/Tarification.scss';
import  GetTarification from './get/GetTarification';

export default function Tarification() {
  return (
    <div id="tarification">
        <h1 className="title titleDemo">
            Tarification
        </h1>

         {/* <GetTarification/> */}

        <div className="sm-container">
            <div className="sm-paragraph">
                <p>Pour les maître d'ouvrage, la tarification est basée sur 3 critères : </p>
                <ul>
                    <li>Le contenu et le nombre de familles thématiques métiers souhaitées.</li>
                    <li>Le nombre d’objets dans la base.</li>
                    <li>Le nombre d’utilisateurs de la version Mobile (sans limitation pour la version Master)</li>
                </ul>
            </div>
            <div className="sm-paragraph">           
            </div>
        </div> 
    </div>
  )
}
