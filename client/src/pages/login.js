import '../App.css'
import React, { useState } from 'react';
import Axios from "axios";

var input = document.getElementById("loginBox");
if (input){
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("login").click();
  }
})};

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        Axios.post("http://localhost:3001/user/login", {
            username: username,
            password: password,
        }).then((response)=> {
            if (response.data.loggedIn) {
                localStorage.setItem("loggedIn", true);
                localStorage.setItem("username", response.data.username);
                window.location.href = "/";
            } else {
                //setErrorMessage(response.data.message);
                alert(response.data.message);
            }
        });
    };

    return (
        
        <div className="loginBox">
            <div className='loginText'>
                <h1>Se connecter</h1>
                <p>Connectez vous à votre profil Groupomania!</p>
                    <form className='loginForm'>
                        <div className='inputBox'>
                            <span className='label'>E-mail</span>
                                <input type="text" placeholder='name@abc.com' className='loginEmail' onChange={(event) => {setUsername(event.target.value);}} />
                        </div>
                        <div className='inputBox'>
                            <span className='label'>Mot de passe</span>
                                <input type="password" placeholder='*****' className='loginPassword' onChange={(event) => {setPassword(event.target.value);}} />
                        </div>
                        <button className="btn" type="submit" id="login" onClick={login} >Connexion</button>
                        <div className='createAccount'>
                            <span>Vous n'avez pas encore de compte?</span>
                            <a href="/register">Créer un compte</a>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default Login