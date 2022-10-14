import React, { useEffect, useState } from 'react';
import '../App.css'
import Axios from 'axios';

function Post() {
  useEffect(()=> {
    if (!localStorage.getItem("loggedIn")) {
      localStorage.setItem("loggedIn", false);
    }
  }, []);


    const url = window.location.href;
    const postid = url.split("/").pop();
    const [name, setName] = useState()
    const [file, setFile] = useState();
    const username = localStorage.username;
    const textPost = window.localStorage.getItem("postcontents");
  //   const postText = event => {
  //     db.query(
  //       `SELECT * FROM post WHERE id = ${postid} AND username = '${username}'`, (err, results) => {
  //         if (err) {
  //           console.log('authorized ===', err);
  //       }
  //       const newPostText = results[0];
  //       console.log(newPostText);
  //   }
  // )};
    
    const edit = event => {
      const data = new FormData();
      data.append("name", name);
      data.append('file', file);
      data.append("username", username);
      data.append("postid", postid);
      
      Axios.post('http://localhost:3001/post/edit', data)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    if (localStorage["loggedIn"] ===  "true") {

    return (
      <div className="Upload">
            <div className='loginText'>
                <h1>Modifiez votre post</h1>
                <p>Appliquez des modifications à votre post à partager!</p>
                    <form className='UploadForm' enctype="multipart/form-data">
                        <div className='inputBox'>
                                <textarea className='textPost' name="text" rows="12" cols="50" onChange={(event) => {
                                  const { value } = event.target;
                                  setName(value);
                                  }}>{textPost}</textarea>
                        </div>
                        <div className='inputBoxFile'>
                            <span className='label'>Joindre une photo</span>
                                <input type="file" placeholder='*****' className='loginPassword' id="file" onChange={(event) => {
                                  const file = event.target.files[0];
                                  setFile(file);
                                  }} />
                        </div>
                        <button className="btn" type="submit" onClick={edit} > Appliquer</button>
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