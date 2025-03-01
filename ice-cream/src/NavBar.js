import React from 'react'
import logo_of_website from './logo_of_website.png';
import './NavBar.css';
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img src={logo_of_website} alt=" " className="logo" />
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/customize")}>Customize</li>
        <li onClick={() => navigate("/branded")}>Branded</li>
        <li onClick={() => navigate("/addtocart")}>Cart</li>
      </ul>
      <div className="search-box">
        <button className="login-button" 
        onClick={() =>navigate("/loginmainpage")}>
          Login
        </button>
      </div>
    </div>
  );
}
