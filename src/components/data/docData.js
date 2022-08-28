import { v4 as uuidv4 } from "uuid";

const docData = [
    {
        id: uuidv4(),
        image : '/cover.png', 
        name: 'Présentation de la solution', 
        document: 'geroba.ppt'  
    },
    {
        id: uuidv4(),
        image : '/cover.png',  
        name: 'Plaquette de présentation – Maître d\'ouvrage',
        document: '/demo2.pdf'    
    },
    {
        id: uuidv4(),
        image : '/cover.png',
        name: 'Plaquette de présentation – Entreprise',
        document: '/demo3.pdf'  
    },
    {
        id: uuidv4(),
        image : '/cover.png',
        name: 'Schéma - Principes Généraux',
        document: '/demo4.pdf'  
    },
    {
        id: uuidv4(),
        image : '/cover.png',
        name: 'Schéma – Organisation fonctionnelle', 
        document: '/demo5.pdf'
    }, 
    {   
        id: uuidv4(),
        image : '/cover.png',
        name: 'Schéma – Organisation mission maintenance', 
        document: '/demo5.pdf'
    }

]

export default docData;