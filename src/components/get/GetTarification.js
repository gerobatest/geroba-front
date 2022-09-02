import React from 'react';
import parse from 'html-react-parser';

export default function GetModeStocks(props) {

        const displayText = (props) =>{
        
        const {text} = props; //text est un props

        if(text.length > 0){
            return(
                text.map((text) => {                   
                    //La partie qu'on veut montrer dans la page depuis la base de données
                    return(
                        <div>
                            <p className="paragraph">
                                {parse(text.para1)}
                            </p>

                            <p className="paragraph">
                                {parse(text.para2)}
                            </p>

                            <p className="paragraph">
                                {parse(text.para3)}
                            </p>

                            <p className="paragraph">
                                {parse(text.para4)}
                            </p>

                            <p className="paragraph">
                                
                                {parse(text.para5)}
                            </p>
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
