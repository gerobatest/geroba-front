import React from 'react'

export default function GetAccueil(props) {

    const displayText = (props) =>{
        
        const {text} = props; //text est un props

        if(text.length > 0){
            return(
                text.map((text) => {
                    //console.log(text); loop?? 
                    
                    //La partie qu'on veut montrer dans la page depuis la base de données
                    return(
                        <div key={text}>
                            <p className="paragraph">
                                {text.para1}
                            </p>
                            <p className="paragraph">
                                {text.para2}
                            </p>
                            <p className="paragraph">
                                {text.para3}
                            </p>
                            <p className="paragraph">
                                {text.para4}
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
