import './header.css';
import logo from './icon-left-font-monochrome-white.svg';
import { AutoFixHighSharp } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LoginIcon from '@mui/icons-material/Login';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React, { useEffect, useState } from 'react'

function Header() {

    const disconnect = () => {
        localStorage.clear()
        window.location.href = "/login";
    }


    if (localStorage["loggedIn"] !== "true") {
        
        return (
            <>
            <div className="header" id="top">
                <img src={logo} alt="Logo" />
            </div>
            <div className="Navbar">
                <a href="/"><HomeIcon class="icon"/>Accueil</a>
                <a href="/login"><LoginIcon class="icon"/>Se connecter</a>
                <a href="/register"><AddCircleOutlineIcon class="icon"/>Créer un compte</a>
    
            </div>
            </>
        ) } else {
            return (
                <>
                <div className="header">
                    <img src={logo} alt="Logo" /> <button className='logout' onClick={disconnect}>Déconnexion</button>
                </div>
                <div className="Navbar">
                    <a href="/"><HomeIcon class="icon"/>Accueil</a>
                    <a href="/post"><PostAddIcon class="icon"/>Créer un post</a>
                    {/*<a href="/profil">Profil</a>*/}
        
                </div>
                </>
            )
        }
}

export default Header