import React, {useEffect, useState} from 'react'
import '../style/Section.scss'
import Doc from "./Doc";

function SectionTelechargement() {

  return( 
        <>
            <div className="container-telechargement" id="téléchargement">     
                <h1 className="title titleTelechargement" >
                    Téléchargements
                </h1>
                
                <div className="sm-container">
                    <p className="sm-paragraph">
                    Ci-dessous, quelques documents de présentation de la solution qui sont téléchargeables 
                    en version « PDF ».
                    </p>
                </div> 

                {/* Les documents*/}
                <Doc/>
            </div>
            
        </>
  )
}

export default SectionTelechargement