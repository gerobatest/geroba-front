import React, {useState, useEffect} from 'react';
import { Parallax } from 'react-scroll-parallax';
import '../style/SectionDemo.scss';
import '../style/Tarification.scss';
import '../style/Section.scss';
import  GetTarification from './get/GetTarification';
import axios from 'axios';
import {url_api} from '../conf/Config.js';

export default function Tarification() {

  //backend
  //state des données reçues
  const [text, getText] = useState('');

  //Extraire les données depuis l'api (serveur)
  const getAllText = () =>{
    axios.get(`${url_api}/tarification/`)
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
    <div className="sectionContainer" id="tarification">
            <div className="sectionText">
                <h1 className="title" >
                    Tarification
                </h1>

                
                <GetTarification text={text}/>
                
                
            </div>

            <div className="sectionImage" id="tablette">
                <Parallax translateX={['200px', '-30px']}> 
                    <img src="image404.png" alt="Tablette avec carte"/>
                </Parallax>
            </div>
        </div>
  )
}
