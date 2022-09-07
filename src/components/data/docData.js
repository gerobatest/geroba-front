import { v4 as uuidv4 } from "uuid";

const docData = [
    {
        id: uuidv4(),
        image : '/cover_presentation.png', 
        name: 'Présentation de la Solution', 
        document: '/1-Presentation solution.pdf'  
    },
    {
        id: uuidv4(),
        image : '/cover_maitrise_ouvrage.png',  
        name: 'Plaquette – Maître d\'Ouvrage',
        document: '/2-Plaquette - Maîtrise d\'Ouvrage.pdf'    
    },
    {
        id: uuidv4(),
        image : '/cover_presentation_entreprise.png',
        name: 'Plaquette de présentation – Entreprise',
        document: '/3-Plaquette - Entreprise.pdf'  
    },
    {
        id: uuidv4(),
        image : '/cover_principes.png',
        name: 'Principes Généraux',
        document: '/4-Principes généraux.pdf'  
    },
    {
        id: uuidv4(),
        image : '/cover_organisation.png',
        name: 'Schéma – Organisation fonctionnelle', 
        document: '/5-Organisation fonctionnelle.pdf'
    }, 
    {   
        id: uuidv4(),
        image : '/cover_maintenance.png',
        name: 'Schéma – Organisation mission maintenance', 
        document: '/6-Missions maitenance.pdf'
    }

]

export default docData;