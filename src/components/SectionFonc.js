import React, {useState, useEffect} from 'react';
import '../style/Section.scss';
import '../style/Modal.scss';
import { Parallax } from 'react-scroll-parallax';
import { HiOutlineX } from "react-icons/hi";

import axios from 'axios';
import GetModeExistant from "./get/GetModeExistant";
import GetModeEtude from "./get/GetModeEtude";
import GetModeStocks from "./get/GetModeStocks";
import GetModeTravaux from "./get/GetModeTravaux";
import GetModeGestion from "./get/GetModeGestion";

function SectionFonc(props) {

//contenu du modal mode existant
    const Existant  = ({ content,limit}) => {

    //backend 
    const url_api = "https://gero-api.herokuapp.com/modeExistant/";

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
    
    const [modal, setModal] = useState(false);
    const toggleModal = (event) => {
        event.preventDefault();
        setModal(!modal);
    };

    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
    if (content.length <= limit) {
      return <div>{content}</div>
    }

    const toShow = content.substring(0, limit) + "...";

    return (
        <>
            <div> 
                {/* La texte preview  */}
                {toShow}  
                <a onClick={toggleModal}  className="openFonc"  href={"/"}>En savoir plus &#62;</a>
                {modal && (
                    <div className='modal'>
                        <div onClick={toggleModal} className="overlay"></div>
                            <div className="PopUp">
                                <img src="/etape-1.jpg" alt="Mode existant"/>
                                <h1 className="title">Etape 1</h1>
                                <p className="lightTitle">Statut Existant</p>

                                <GetModeExistant text={text}/>

                                <button className="close-modal" onClick={toggleModal}>
                                  <HiOutlineX />
                                </button>   
                            </div> 
                    </div>
                    )}
            </div>
        </>
        )
  }


  //contenu du modal mode etude 
  const Etude = ({ content,limit}) => {

    //backend 
    const url_api = "https://gero-api.herokuapp.com/modeEtude/";

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


    const [modal, setModal] = useState(false);
    const toggleModal = (event) => {
        event.preventDefault();
        setModal(!modal);
    };

    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    if (content.length <= limit) {
      return <div>{content}</div>
    }
    const toShow = content.substring(0, limit) + "...";
    return <div> 
      {toShow} 
      <a onClick={toggleModal} className="openFonc" href={"/"}>En savoir plus &#62;</a>
      {modal && (
          <div className='modal'>
              <div onClick={toggleModal} className="overlay"></div>
                  <div className="PopUp">
                      <img src="/etape-2.jpg" alt="Mode existant"/>
                      <h1 className="title">Etape 2</h1>
                      <p className="lightTitle">Statut Etude</p>

                      <GetModeEtude text={text}/>

                      <button className="close-modal" onClick={toggleModal}>
                        <HiOutlineX />
                      </button>   
                  </div> 
            </div>
          )}
    </div>
  }


  //contenu du modal mode depots 
  const Depots = ({ content,limit}) => {
     
    //backend 
    const url_api = "https://gero-api.herokuapp.com/modeStocks/";

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


     const [modal, setModal] = useState(false);
     const toggleModal = (event) => {
         event.preventDefault();
         setModal(!modal);
     };
     if(modal) {
       document.body.classList.add('active-modal')
     } else {
       document.body.classList.remove('active-modal')
     }
     //atreto
    if (content.length <= limit) {
      return <div>{content}</div>
    }
    const toShow = content.substring(0, limit) + "...";
    return <div> 
      {toShow} 
      <a onClick={toggleModal} className="openFonc" href={"/"}>En savoir plus &#62;</a>
      {modal && (
          <div className='modal'>
              <div onClick={toggleModal} className="overlay"></div>
                  <div className="PopUp">
                      <img src="/etape-3.jpg" alt="Mode existant"/>
                      <h1 className="title">Etape 3</h1>
                      <p className="lightTitle">Statut Stocks</p>
                      
                      <GetModeStocks text={text}/>

                      <button className="close-modal" onClick={toggleModal}>
                        <HiOutlineX />
                      </button>   
                </div> 
          </div>
          )}
    </div>
  }

  //contenu du modal mode travaux
  const Travaux = ({ content,limit}) => {

    //backend 
    const url_api = "https://gero-api.herokuapp.com/modeTravaux/";

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

    
     const [modal, setModal] = useState(false);
     const toggleModal = (event) => {
         event.preventDefault();
         setModal(!modal);
     };
     if(modal) {
       document.body.classList.add('active-modal')
     } else {
       document.body.classList.remove('active-modal')
     }
    
    if (content.length <= limit) {
      return <div>{content}</div>
    }
    const toShow = content.substring(0, limit) + "...";
    return <div> 
      {toShow} 
      <a onClick={toggleModal} className="openFonc" href={"/"}>En savoir plus &#62;</a>
        {modal && (
            <div className='modal'>
                <div onClick={toggleModal} className="overlay"></div>
                    <div className="PopUp">
                        <img src="/etape-4.jpg" alt="Mode existant"/>
                        <h1 className="title">Etape 4</h1>
                        <p className="lightTitle">Statut Travaux</p>

                        <GetModeTravaux text={text}/>

                        <button className="close-modal" onClick={toggleModal}>
                          <HiOutlineX />
                        </button>   
                    </div> 
            </div>
          )}
    </div>
  }

  //contenu du modal mode gestion
  const Gestion = ({ content,limit}) => {

    //backend 
    const url_api = "https://gero-api.herokuapp.com/modeGestion/";

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
    
    const [modal, setModal] = useState(false);
    const toggleModal = (event) => {
        event.preventDefault();
        setModal(!modal);
    };
    
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
     

    if (content.length <= limit) {
      return <div>{content}</div>
    }

    const toShow = content.substring(0, limit) + "...";

    return <div> 
      {toShow} 
      <a onClick={toggleModal} className="openFonc" href={"/"}>En savoir plus &#62;</a>
      {modal && (
          <div className='modal'>
              <div onClick={toggleModal} className="overlay"></div>
                  <div className="PopUp">
                      <img src="/etape-5.jpg" alt="Mode existant"/>
                      <h1 className="title">Etape 5</h1>
                      <p className="lightTitle">Statut Gestion</p>

                      <GetModeGestion text={text}/>

                      <button className="close-modal" onClick={toggleModal}>
                        <HiOutlineX />
                      </button>   
                  </div> 
          </div>
      )}
    </div>
  }

    return (
        <>
            {/* Contenu visible sur la page*/}
             <div className="sectionContainer" id="fonctions">
                <div className="sectionImage" id="man">
                    <Parallax translateX={['0px', '200px']}>    
                        <img src="engineer.avif" alt="Construction worker"/>
                    </Parallax>  
                </div>
                <div className="sectionText">
                    <h1 className="title" >
                      Fonctions
                    </h1>
                    <p className="paragraph">
                      La solution permet de gérer les équipements dans ses différentes étapes de vie
                      pour les différentes thématiques des domaines routiers et (demain) bâtiments.
                      Il est possible d’activer plusieurs statuts et ainsi, de pouvoir comparer des
                      données à des moments différents ; par exemple, un objet dans son état actuel
                      (Existant), sa demande de réparation (Gestion) et son projet de modification (Etude).
                    </p>

                    <ol>
                        <li>
                            <div className='modeLong'>
                              <b>Statut « Existant » :</b>
                              {/* La texte à limiter montrer dans la partie visible*/}
                              <Existant content="C'est ce qui existe sur le terrain, l'état « 0 »." 
                              limit={48}/>
                            </div>  
                        </li>
                        <li>
                            <b>Statut « Etude » :</b> 
                            <div className='modeLong'>
                            <Etude content=" Il s'agit du fruit de l'expertise
                            de l'existant et la définition de ce qu'il devrait y
                            avoir " 
                            limit={95}/>
                            </div> 
                        </li>
                        <li>
                            <b>Statut « Stocks » :</b> 
                            <div>
                                <Depots content=" Pour les objets qui le
                            nécessitent, c'est la gestion des équipements qui
                            sont dans des dépôts localisés et qui serviront à
                            des travaux de maintenance. blablabla" 
                            limit={125}/>
                            </div>
                        </li>
                        <li>
                            <b>Statut « Travaux » :</b>
                            <div>
                                <Travaux content=" La maîtrise d'ouvrage
                                décide d'engager des travaux de changement
                                ou de maintenance ; elle confie une mission à
                                une entreprise ou en régie et le maître d'oeuvre
                                va suivre les actions, pas à pas suivant le détail,
                                modulable, défini en amont. "
                                limit={125}/>
                            </div>
                        </li>
                        <li>
                            <b>Statut « Gestion » :</b> 
                            <div>
                              <Gestion content=" Le patrimoine doit être
                              surveillé à la fois sur le plan physique et
                              fonctionnel. Des actions de surveillances sont
                              définies sur tout ou une partie du patrimoine et
                              les éventuels besoins d'intervention identifiés
                              puis suivis. balabalab"
                              limit={125}/>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </>   
  )
}

export default SectionFonc;
