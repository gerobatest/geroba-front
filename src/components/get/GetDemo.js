import React from 'react';
import parse from 'html-react-parser';

//Cette fonction extrait les données a mettre sur la page
export default function GetDemo(props){

    const displayNotes = (props) => {

        const {notes} = props;

        if (notes.length > 0) {
            return(
                notes.map((note, index) => {
                    //La partie qu'on veut montrer dans la page depuis la base de données
                    return(
                        <div className="sm-container" key={index}>
                            <p className="sm-paragraph">
                                {parse(note.para1)}
                            </p>
                        </div> 
                    )
                })
            )   
        }
    }

    return(
        <>
            {displayNotes(props)}
        </>
    )
}