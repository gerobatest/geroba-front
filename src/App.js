import React from "react";
import Navbar from './components/Navbar';
import Accueil from './components/Accueil';
import APropos from './components/APropos';
import SectionFonc from './components/SectionFonc';
import SectionTelechargement from './components/SectionTelechargement';
import SectionDemo from './components/SectionDemo';
import Footer from './components/Footer';
import Fill from './components/Fill';
import { ParallaxProvider } from 'react-scroll-parallax';

import Login from './components/login/Login';
import BackOffice from './components/login/BackOffice';

function App(){
  return (
      <>
          {/* <Login/>
          <BackOffice/>*/}
         <Navbar/>  
          <div className = "container">
            <ParallaxProvider> 
              <Accueil title="Solution de mobilité"/>
              <APropos/>
              <SectionFonc title="Fonctionnalités"/>
            </ParallaxProvider>
            {/**/} <SectionTelechargement/>  
            <SectionDemo/>  
          <Footer/>
          <Fill/>
          </div> 
      </>
    );
}

export default App;
