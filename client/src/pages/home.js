import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
// import { useAsyncValue } from 'react-router-dom';
import '../App.css';
import { AutoFixHighSharp } from '@mui/icons-material';
//import image from './16644430197124927082.png'
//import images from '../../../server/images';
//const SERVER = "http://localhost:3001/16644430197124927082.png";
//const image = 'http://localhost:3001/images/1664455878582selfie.png';

// import image from 'http://localhost:3001/images/1664455878582selfie.png';

function Home() {

  const [uploads, setUploads] = useState([]);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      localStorage.setItem("loggedIn", false);
    }
  }, []);

  const getData = () => {
    Axios.get("http://localhost:3001/post").then((response) => {
      setUploads(response.data);
      // response.data.map((val)=> {
      //   setLikes([...likes, val.likes]);
      // });
    });
    console.log(likes);
  }

  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "true") {
    getData(); } else {
      alert("vous devez être connecté pour afficher ce contenu!");
      window.location.href = "/login";
    }
  }, []);


  const likePost = (id) => {
    Axios.post("http://localhost:3001/post/like", { userLiking: localStorage.getItem('username'), postid: id }).then((response) => {
      console.log("You liked this post", response);
      getData();
    });
  };

  const editPost = (id) => {
    window.location.href = `/edit/${id}`;
    console.log(id);
    
  };

  const deletePost = (id) => {
    Axios.post("http://localhost:3001/post/delete", { username: localStorage.getItem('username'), postid: `${id}` }).then((response) => {
      console.log("You are attempting to delete a post", response);
    });
    window.location.href = "/";
  };

  return (
    <><div className='home'>
      {uploads.map((val) => {
        return (
          <div className='post'>
            <div className='user'><AccountCircleIcon class="userIcon"/>{val.username}</div>
            <div className='content'>{val.post}</div>
            <div id="postImage"> <img src={val.image} alt="postphoto" /> </div>
            <ThumbUpAltIcon
              id="likeButton"
              onClick={() => {
                likePost(val.id);
              }}
            />
            {val.likes}
            <button class="editbtn" onClick={() => {
                editPost(val.id);
              }}>modifier ce post</button>
              <button class="deletebtn" onClick={() => {
                deletePost(val.id);
              }}>supprimer ce post</button>
          </div>
        )
      })}

    </div>
    <a href="#top" id="topArrowContainer"><ArrowCircleUpIcon id="topArrow"/></a>
    </>
  )
}; 

export default Home