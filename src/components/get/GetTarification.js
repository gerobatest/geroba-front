import React from 'react';
import parse from 'html-react-parser';

export default function GetTarification(props) {

        const displayText = (props) =>{
        
        const {text} = props; 

        if(text.length > 0){
            return(
                text.map((text) => {                   
                    //La partie qu'on veut montrer dans la page depuis la base de données
                    return(
                        <div key={text}>
                            <div className="paragraph">
                                {parse(text.para1)}
                            </div>

                            <div className="paragraph">
                                {parse(text.para2)}
                            </div>

                            <div className="paragraph">
                                {parse(text.para3)}
                            </div>

                            <div className="paragraph">
                                {parse(text.para4)}
                            </div>

                            <div className="paragraph">
                                {parse(text.para5)}
                            </div>
                        </div>
                    )
                })
            )  
        }
    }

    return (
        <>
            {displayText(props)}
        </>
    )
}
