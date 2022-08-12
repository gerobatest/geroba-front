import React, {useState, useEffect} from 'react';
import './BackOffice.scss';
import GetAccueil from "../get/GetAccueil";
import axios from 'axios';

export default function BackOffice() {

    //backend 
  const url_api = "http://localhost:9000/accueil/";

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

    const handleSubmit= (e) => {
        e.preventDefault();

        //fait la mise à jour des données dans la base de donnée depuis l'interface
    }

    return (
        <div className="parent-container">
            <h1>Section Solution / Accueil </h1>

            <form onClick={handleSubmit}>
                <textarea
                  value={"hi"}   
                />
                    
              
                <input type="submit" value="Update"/>
            </form>

            {/* <GetAccueil text={text}/> */}
            
        </div>
    )
}
