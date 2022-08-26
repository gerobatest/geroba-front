import React, {useEffect, useState}  from 'react'
import ClientData from "./ClientData";
import Slider from "react-slick";
import '../style/Commun.scss';
import '../style/SectionDemo.scss';
import '../style/VideoDemo.scss';
import "../style/Clients.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import axios from 'axios';
import  GetDemo from './get/GetDemo';

function SectionDemo() {

  //Slider clients
  const settings = {
    infinite: true,
    centerMode:true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 5,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  };

  const url_api = "https://gero-api.herokuapp.com/demo/";

    //notes sera l'état des donées reçues depuis la base de donnée
    const [notes, getNotes] = useState('');

    //Cette fonction extrait les données depuis la base de données en utilisant axios
    const getAllNotes = () => {
        axios.get(`${url_api}`)
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


  return (
        <div id="demo">
          <h1 className="title titleDemo">
              Démo
          </h1>

          < GetDemo notes={notes}/>
          
          {/* Video demonstration */}
          <div className="video-container" id="test">

            {/* Si la vidéo est enregistrée localement 
            <video className="videoDemo" width="640" height="264" controls
              src="/GerobaDemo.mp4" type="video/mp4">
            </video>*/}


            {/* Si la vidéo est en ligne 
            <iframe width="640" height="264"
              src="https://www.youtube.com/embed/avBbvVwLMnY?autoplay=1"
              className="videoDemo"
              title="Geroba demonstration"
            />  */} 

          </div>
          
          {/*Slider collaborations*/}
          <p className="pclients"><i>Ils nous font confiance... Voici quelques exemples de collaborations qui illustrent notre savoir-faire.</i></p>
          <div className="cards">
            <Slider {...settings}>
              {ClientData.map((item, index) => (
              <div key="item" className="card"> 
                <img className="clientLogo" id={index} src={item.imgPath} alt={item.title} title={item.title}/>
                {/* <img className="clientLogo" style={{top: item.style}} id={index} src={item.imgPath} alt={item.title} title={item.title}/> */}
              </div>
              ))}
            </Slider>     
          </div>
        </div>
  )
}

export default SectionDemo;
