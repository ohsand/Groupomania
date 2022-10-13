import React, { useEffect, useState } from 'react';
import '../App.css'
import Axios from 'axios';

var input = document.getElementById("uploadForm");
if (input){
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("aupload").click();
  }
})};

function Post() {
  useEffect(()=> {
    if (!localStorage.getItem("loggedIn")) {
      localStorage.setItem("loggedIn", false);
    }
  }, []);


    
    const [name, setName] = useState()
    const [file, setFile] = useState();
    const username = localStorage.username;
    
    const upload = event => {
      const data = new FormData();
      data.append("name", name);
      data.append('file', file);
      data.append("username", username);
      
      Axios.post('http://localhost:3001/post/upload', data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    if (localStorage["loggedIn"] ===  "true") {

    return (
      <div className="Upload" id='uploadForm'>
            <div className='loginText'>
                <h1>Créer un post</h1>
                <p>Partagez avec la communauté Groupomania!</p>
                    <form className='UploadForm' enctype="multipart/form-data">
                        <div className='inputBox'>
                                <textarea className='textPost' name="text" rows="12" cols="50" onChange={(event) => {
                                  const { value } = event.target;
                                  setName(value);
                                  }}></textarea>
                        </div>
                        <div className='inputBoxFile'>
                            <span className='label'>Joindre une photo</span>
                                <input type="file" placeholder='*****' className='loginPassword' id="file" onChange={(event) => {
                                  const file = event.target.files[0];
                                  setFile(file);
                                  }} />
                        </div>
                        <button className="btn" type="submit" id="upload" onClick={upload} >Publier</button>
                    </form>
            </div>
        </div>
    ) } else {
      return (
        <p> Vous devez être connecté pour accéder à cette page</p>
      )
    }
  };
  
  export default Post 