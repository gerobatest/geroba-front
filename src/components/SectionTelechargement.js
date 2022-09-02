import React, {useEffect, useState} from 'react'
import '../style/Section.scss'
import Doc from "./Doc";
import axios from 'axios';
import  GetTelechargment from './get/GetTelechargement';
import {url_api} from '../conf/Config.js';

function SectionTelechargement() {

    //notes sera l'état des donées reçues depuis la base de donnée
    const [notes, getNotes] = useState('');

    //Cette fonction extrait les données depuis la base de données en utilisant axios
    const getAllNotes = () => {
        axios.get(`${url_api}/telechargement/`)
        .then((response) => {
            const allNotes = response.data; //les données reçu depuis l'api sont gardées ici
            getNotes(allNotes); //react state est mise à jour avec les données reçues
        })
        .catch(error => console.error(`Error: ${error}`));
    }

    //la fonction getAllNotes() est executée quand la page est rendue (rendered)
    useEffect(() => {
        getAllNotes();
    })

  return( 
        <>
            <div className="container-telechargement" id="téléchargement">     
                <h1 className="title titleTelechargement" >
                    Téléchargements
                </h1>
                
                < GetTelechargment notes={notes}/>

                {/* Les documents*/}
                <Doc/>
            </div>
            
        </>
  )
}

export default SectionTelechargement