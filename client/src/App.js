import React from "react";
//import ReactDOM from "react-dom/client";
import "./App.css";
import Home from './pages/home';
import Header from './components/header/header'
import Login from './pages/login';
import Register from './pages/register';
import Error from './pages/error'
import Post from './pages/post'
import Edit from './pages/edit.js'
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from 'react-router-dom'
import {Route, Routes} from 'react-router'

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post" element={<Post />} />
          <Route path="/edit/:id" element={<Edit />} />
       </Routes>
    </Router>
);
}

export default App;

reportWebVitals();