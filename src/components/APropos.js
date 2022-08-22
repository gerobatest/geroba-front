import React, {useState, useEffect} from 'react'
import { Parallax } from 'react-scroll-parallax';
import GetApropos from "./get/GetApropos";
import axios from 'axios';

function APropos() {


    //backend 
  const url_api = "https://gero-api.herokuapp.com/apropos/";

  //state des données reçues
  const [text, getText] = useState('');

  //Extraire les données depuis l'api (serveur)
  const getAllText = () =>{
    axios.get(`${url_api}`)
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
        <div className="sectionContainer" id="about">
            <div className="sectionText">
                <h1 className="title" >
                    Comment ça marche ?
                </h1>

                <GetApropos text={text}/>
                
            </div>

            <div className="sectionImage" id="tablette">
                <Parallax translateX={['200px', '-30px']}> 
                    <img src="/tablette.avif" alt="Tablette avec carte"/>
                </Parallax>
            </div>
        </div>
  )
}

export default APropos
