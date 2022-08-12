import React, {useState} from 'react';
import './Login.scss';
import axios from 'axios';


export default function Login() {

  const url_api ="http://localhost:9000/login";

  //état initial 
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState ("");

  //ce qui se passe quand on appuie sur se connecter
  const handleSubmit = (e) => {
    e.preventDefault();
    
    //configuration axios
    const configuration = {
      method: "post",
      url: "http://localhost:9000/login/",
      data: {
        username, 
        password
      },
    }

    //API envoye message en cas de succès ou non
    axios(configuration)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })
  }



  return (
    <div className="login-container">
        
        <h1>Se connecter</h1>
    
        <form onSubmit= {(e) => handleSubmit(e)}>
            <label >username</label>
            <input 
              type="text" 
              id="userName" 
              name="userName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}/>

            <label>password</label>
            <input 
              type="password" 
              id="psw" 
              name="psw"
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
        
            <input type="submit" value="Se connecter"/>
        </form>

    </div>
  )
}
