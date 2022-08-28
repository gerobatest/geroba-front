import React, {useRef} from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import {AiOutlineDownload} from "react-icons/ai";
import docData from './data/docData';
import '../style/Doc.scss'

export default function Doc() {

  const scrollable = useRef(null); 
  
  //const scrollHeight = scrollable.current?.clientHeight / 2;
  const scrollHeight = 250;

  const scrollUp = () => {
    const scrollLength = -scrollHeight; //calcul moitié de la div final
    scrollable.current.scrollBy({top: scrollLength, behavior: "smooth"});
  }

  const scrollDown = () => {
    const scrollLength = scrollHeight; //calcul moitié de la div final
    scrollable.current.scrollBy({top: scrollLength, behavior: "smooth"})
  }

  return (
    <>
    <div className="scroll-container">
      <div className="doc-container" ref={scrollable}>
        {/* Les documents */}
        {docData.map((slide, index) =>{
            return(     
                <div className="single-doc-container" id={index} key={index}>
                
                    <a href={slide.document} target="_blank" rel="noopener noreferrer">
                      <img src={slide.image} alt={slide.image}/>
                      <p className="doc-name">{slide.name}</p> 
                      <p className="download"><AiOutlineDownload/></p>
                    </a>
                </div>    
            ) 
        })}
      </div>
      <button className="scroll-up" onClick={scrollUp}><IoIosArrowUp/></button>
      <button className="scroll-down" onClick={scrollDown}><IoIosArrowDown/></button>
    </div>
    </>
  )
}
