import React, {useState, useEffect} from 'react';
import Slider from './Slider';
import '../style/Section.scss'; 
import '../style/Slider.scss';
import { Parallax } from 'react-scroll-parallax';
import {url_api} from '../conf/Config.js';

import GetAccueil from "./get/GetAccueil";
import axios from 'axios';

const SectionText = (props) => {

  //backend 
  //state des données reçues
  const [text, getText] = useState('');

  //Extraire les données depuis l'api (serveur)
  const getAllText = () =>{
    axios.get(`${url_api}/accueil/`)
    .then((response) => {
      const allText = response.data; //ce que nous reçevons de l'api
      getText(allText); //le state contient les données reçues depuis la base de donnée
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
    })
  }

  //la fonction est executée dès que la page est rendu (loads)
  useEffect(()=>{
    getAllText();
  })

  return (
    <>
      <div id="home">

        {/* Slider */}
        <Slider/>

        {/* Solution de mobilité   */}
        <div className="sectionContainer">

            {/* Image avec Parallax */}
            <div className="sectionImage" id="pc">
              <Parallax translateX={['-200px', '40px']}>     
                <img className="iMac" src="imac.avif" alt="iMac"/>
              </Parallax>      
            </div>

            <div className="sectionText">
              
              <h1 className="title" >
                Solution de mobilité
              </h1>

              {/* Les textes depuis la base de données*/}
              <GetAccueil text={text}/>

            </div>
          </div>
        </div>
    </>
  )
}

export default SectionText;
