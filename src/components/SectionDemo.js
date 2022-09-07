import React, {useEffect, useState}  from 'react'
import ClientData from "./data/ClientData";
import Slider from "react-slick";
import '../style/SectionDemo.scss';
import '../style/VideoDemo.scss';
import "../style/Clients.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
        <div id="demo">
          <h1 className="title titleDemo">
              Démo
          </h1>

          <div className="sm-container">
              <p className="sm-paragraph">
                Ci-dessous, une présentation succincte de GEROBA et de quelques fonctionnalités.
              </p>
          </div>
          
          {/* Video demonstration */}
          <div className="video-container">

            <img src="/video.png" alt="Vidéo en cours de route"/>

            {/* Si la vidéo est enregistrée localement
            <video className="videoDemo" width="640" height="264" controls
              src="/GerobaDemo.mp4" type="video/mp4">
            </video> */}


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
              </div>
              ))}
            </Slider>     
          </div>
        </div>
  )
}

export default SectionDemo;