import React from 'react'

export default function GetModeTravaux(props) {

        const displayText = (props) =>{
        
        const {text} = props; //text est un props

        if(text.length > 0){
            return(
                text.map((text) => {
                    //console.log(text); 
                    
                    //La partie qu'on veut montrer dans la page depuis la base de données
                    return(
                        <div className="sm-container" key={text}>
                            <p className="sm-paragraph">
                                {text.para1}   
                            </p>
                            <p className="sm-paragraph">
                                {text.para2}
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
