import React from 'react';
import parse from 'html-react-parser';

export default function GetModeStocks(props) {

        const displayText = (props) =>{
        
        const {text} = props; //text est un props

        if(text.length > 0){
            return(
                text.map((text) => {
                    //console.log(text); 
                    
                    //La partie qu'on veut montrer dans la page depuis la base de données
                    return(
                        <div>
                           
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
