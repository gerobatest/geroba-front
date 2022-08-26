import React, {useState, useEffect} from 'react';
import {sliderData} from "./data-slider";
import '../style/Section.scss'; 
import '../style/Slider.scss';
import { Parallax } from 'react-scroll-parallax';

import GetAccueil from "./get/GetAccueil";
import axios from 'axios';

const SectionText = (props) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto () {
      slideInterval = setInterval(nextSlide, intervalTime)
  }
  
  useEffect(() =>{
      setCurrentSlide(0)
  }, [])

  useEffect(() =>{
      if (autoScroll){
          auto();
      }
      return () => clearInterval(slideInterval);
  }, [currentSlide]);


  const moveDot = index => {
     setCurrentSlide(index)
  }

  //backend 
  const url_api = "https://gero-api.herokuapp.com/accueil/";

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
    <>
      <div id="home">
        <div className='slider'>    

            {/* Slider Navigation */}
            {sliderData.map((slide, index) =>{
                return(     
                    <div className={index === currentSlide ?
                      "slide current" : "slide"} key = {index}>
                          {index === currentSlide && (
                              <>
                                  <img src={slide.image} alt="slide"/>
                              </>          
                          )}
                    </div>         
                ) 
            })}

            <div className='textslide'>
                <h1>GESTION </h1>
                <h1>ROUTES</h1>
                <h1> BÂTIMENTS</h1>
            </div>
            

            <div className='container-dots'> 
                {Array.from({length: 3}).map((item, index,) => (
                    <div key={index}
                    onClick={() => moveDot(index + 0)}
                    className={currentSlide === index + 0? "dot active" : "dot"}></div>
                ))}
            </div>
        </div> 


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
