import React, { useState } from 'react';
import '../App.css';
import Axios from "axios";

var input = document.getElementById("loginBox");
if (input){
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("register").click();
  }
})};

function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (username.match(mailformat)){
            Axios.post("http://localhost:3001/user/register", {
            username: username,
            password: password,
        }).then((response)=> {
            console.log(response);
            window.alert("Compte crée avec succès!")
        });
           
        } else {
            window.alert("Ceci n'est pas une addresse mail valide!");
    }
    };

    return (
        <>
        
        <div className="loginBox">
            <div className='loginText'>
                <h1>Créer un compte</h1>
                <p>Créez votre profil Groupomania!</p>
                    <form className='loginForm'>
                        <div className='inputBoxRegister'>
                            <span className='label'>E-mail</span>
                                <input type="text" placeholder='name@abc.com' className='loginEmail' id="email" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" onChange={(event) => {setUsername(event.target.value);}} />
                        </div>
                        <div className='inputBoxRegister'>
                            <span className='label'>Mot de passe</span>
                                <input type="password" placeholder='*****' className='loginPassword' onChange={(event) => {setPassword(event.target.value);}} />
                        </div>
                        <button className="btn" type="submit" id="register" onClick={register} >S'inscrire</button>
                        <div className='createAccount'>
                            <span>Vous avez déjà un compte?</span>
                            <a href="/login">Se connecter</a>
                        </div>
                    </form>
            </div>
        </div>
        </>
    )
    
}

export default Register
