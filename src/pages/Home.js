import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";

function home() {
  return (
    <div className="home">
      <h1>THIS IS HOME PAGE</h1>
      <div className="home__header">
        <div className="home__headerLeft">
          {/* Link*/}
          <Link to="about">About</Link>
          {/* Link*/}
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          {/* Link*/}
          <Link to="gmail">Gamil</Link>

          {/* Link*/}
          <Link to="images">Images</Link>

          {/* ICON*/}
          <AppsIcon />
          {/* Avatar*/}
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Google_logo_%282013-2015%29.svg"
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default home;
