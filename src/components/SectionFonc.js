import React, {useState, useEffect} from 'react';
import '../style/Section.scss';
import '../style/Modal.scss';
import { Parallax } from 'react-scroll-parallax';
import { HiOutlineX } from "react-icons/hi";

function SectionFonc(props) {

//contenu du modal mode existant
    const Existant  = ({ content,limit}) => {

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

                                <div className="sm-container">
                                  <p className="sm-paragraph">
                                    Il est mis en place soit grâce à des données existantes au sein
                                    de la collectivité (par exemple des données SIG au format « .shp » importables) ; 
                                    il peut également être réalisé au travers d’un relevé traditionnel pédestre 
                                    grâce à la solution mobile de l’application ; enfin, il peut être réalisé en 
                                    tout ou partie, à l’aide d’un relevé images terrain (différentes solutions possibles, 
                                    dont du 360°) et une exploitation de type IA (Intelligence Artificielle).  
                                  </p>
                                  <p className="sm-paragraph">
                                    A chaque objet de la base, il peut être associé autant de photos que
                                    souhaité (avec choix de la photo de « couverture ») ainsi que des 
                                    documents techniques liés à l’objet ; par exemple, documentation technique
                                    d’un équipement, note de calcul d’un PPHM, … 
                                    <br/>Cet existant est ensuite 
                                    mise à jour au fur et à mesure des évolutions du terrain. 
                                  </p> 
                                </div>

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

                      <div className="sm-container">
                          <p className="sm-paragraph">
                            Les études sont réalisés avec les outils techniques dont dispose l’opérateur.
                            Elles sont ensuite intégrées dans l’application soit en affectant les spécifications
                            à des points existants, soit en créant de nouveaux points si l’étude conclu au
                            rajout de certains équipements.<br/>
                            Les spécifications des objets sont renseignées avec le niveau de détail souhaité ; 
                            elles pourront être complétées ultérieurement.
                          </p>
                          <p className="sm-paragraph">
                            A noter que pour certaines thématiques, des interfaces d’intégration d’attributs 
                            de façon semi-automatiques ont été développées. La récupération des données peut 
                            également être complétée par des application d’IA, également développés en 
                            périphérie de la solution.
                          </p>
                      </div>

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
                      <img src="/etape-3.jpg" alt="Mode existant"/>
                      <h1 className="title">Etape 3</h1>
                      <p className="lightTitle">Statut Stocks</p>
                      
                      <div className="sm-container">
                        <p className="sm-paragraph">
                          Pour certains équipements, la collectivité dispose de stocks dans ses propres dépôts. Mais, 
                          qu’est ce qui est disponible, depuis quand et où se trouvent ses équipements ? Ce statut 
                          permet d’assurer la gestion des équipements qui sont dans des dépôts localisés et qui 
                          serviront à des travaux de maintenance.<br/>
                          La particularité de ce module stock est sa fonction « Import » qui permet, si la relation
                          a ainsi été contractualisée, que ce soit le fournisseur qui alimente la base stock. Le 
                          lien avec les équipements en stock peut se faire par QR Code ou Code barre. La saisie 
                          peut également se faire manuellement lors de l’entrée en stock des équipements avec des 
                          identifiants (QR Code ou Code barre) créés par l’application et imprimable.
                        </p>
                        <p className="sm-paragraph">
                          Chaque objet est alors associé à ses caractéristiques technique et la pose d’un équipement sur
                          un lieu permet automatiquement d’affecter ces caractéristiques à l’objet nouvellement mis en 
                          œuvre et à mettre le stock à jour. Il est possible de modifier l’affectation d’un objet d’un dépôt
                          à un autre et de disposer d’une vision centralisée de tous les dépôts.
                        </p> 
                      </div>

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

                        <div className="sm-container">
                          <p className="sm-paragraph">
                            La maîtrise d'ouvrage décide d'engager des travaux de renouvellement ou de maintenance ; elle 
                            confie une mission à une entreprise ou réalise les prestations en régie.<br/>
                            Le maître d'œuvre défini en amont du lancement du chantier, le suivi qu’il souhaite avoir au 
                            travers d’une interface modulable. Il peut définir des points d’arrêts, les photos attendues 
                            à chacune des étapes. Celui qui exécute va alors « dire » ce qu’il fait suivant la décomposition
                            en actions unitaires définies précédemment. Chaque action est horodatée.
                          </p>
                          <p className="sm-paragraph">
                            Maître d'ouvrage, maître d'œuvre et entreprises peuvent également communiquer, via l’application, 
                            sur un objet en fonction de ce qui se passe sur le terrain, les éléments visualisables sur les 
                            photos, … Ces échanges sont alors conservés dans l’historique des travaux.<br/>
                            Les travaux peuvent concerner une ou plusieurs entreprises. Prochainement, il sera possible de 
                            valoriser, aussi bien pour la maîtrise d'ouvrage que pour les entreprises, les travaux réalisés ; 
                            ainsi, établissement et vérification des situations de travaux sont simplifiées.
                          </p> 
                        </div>

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

                      <div className="sm-container">
                        <p className="sm-paragraph">
                          Le patrimoine doit être surveillé à la fois sur le plan physique et fonctionnel. 
                          Des actions de surveillances sont définies sur tout ou une partie du patrimoine 
                          et les éventuels besoins d'intervention identifiés puis suivis.<br/>
                          Le suivi du patrimoine sur le terrain se fait sous différentes formes : patrouilles, missions 
                          de surveillance ciblées sur une zone ou une typologie d’objets ou encore un critère 
                          technique spécifique ; il est également réalisé au travers d’une remontée 
                          d’information du terrain à la volée de la part de techniciens, d’élus ou bien 
                          des citoyens eux-mêmes. Toutes les remontées d’information sont horodatées et mémorisées.   
                        </p>
                        <p className="sm-paragraph">
                          Elles peuvent nécessiter le déclenchement d’interventions thématiques ou focalisées sur certains objets. 
                          Ces actions peuvent donner lieu à de nouvelles missions internes ou externes. Le contenu des actions 
                          à réaliser est détaillé. 
                          Chaque action est alors suivie, avec une traçabilité de la mission, objet par objet.
                          Pour un même équipement, il est possible de connaître toutes les actions de gestion qui ont 
                          été réalisées : surveillance, entretien, maintenance, …
                        </p> 
                      </div>

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
                        <img src="engineer.png" alt="Construction worker"/>
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
                              <Existant content=" Il est mis en
                                place soit grâce à des données existantes au sein
                                de la collectivité (par exemple des données SIG au format « .shp » importables) ; 
                                il peut également être réalisé au travers d’un relevé traditionnel pédestre 
                                grâce à la solution mobile de l’application ; enfin, il peut être réalisé en 
                                tout ou partie, à l’aide d’un relevé images terrain (différentes solutions possibles, 
                                dont du 360°) et une exploitation de type IA (Intelligence Artificielle).  " 
                                limit={147}/>
                            </div>  
                        </li>
                        <li>
                            <b>Statut « Etude » :</b> 
                            <div className='modeLong'>
                            <Etude content="Les études sont réalisés avec les outils techniques dont dispose l’opérateur.
                              Elles sont ensuite intégrées dans l’application soit en affectant les spécifications
                              à des points existants, soit en créant de nouveaux points si l’étude conclu au
                              rajout de certains équipements.
                              Les spécifications des objets sont renseignées avec le niveau de détail souhaité ; 
                              elles pourront être complétées ultérieurement." 
                              limit={78}/>
                            </div> 
                        </li>
                        <li>
                            <b>Statut « Stocks » :</b> 
                            <div>
                                <Depots content="Pour certains équipements, la collectivité dispose de stocks dans ses propres dépôts. Mais, 
                                  qu’est ce qui est disponible, depuis quand et où se trouvent ses équipements ? Ce statut 
                                  permet d’assurer la gestion des équipements qui sont dans des dépôts localisés et qui 
                                  serviront à des travaux de maintenance.  " 
                                  limit={313}/>
                            </div>
                        </li>
                        <li>
                            <b>Statut « Travaux » :</b>
                            <div>
                                <Travaux content="La maîtrise d'ouvrage décide d'engager des travaux de renouvellement ou de maintenance ; elle 
                                  confie une mission à une entreprise ou réalise les prestations en régie.  "
                                  limit={169}/>
                            </div>
                        </li>
                        <li>
                            <b>Statut « Gestion » :</b> 
                            <div>
                              <Gestion content="Le patrimoine doit être surveillé à la fois sur le plan physique et fonctionnel. 
                                Des actions de surveillance sont définies sur tout ou une partie du patrimoine. Il en résulte, 
                                quand nécessaire, les besoins d'intervention qui sont identifiés, attribués puis suivis.  "
                              limit={"269"}/>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </>   
  )
}

export default SectionFonc;