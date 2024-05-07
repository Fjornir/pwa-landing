import React from "react";
import googlePlayLogo from "../imgs/GooglePlayLogo.svg";
import searchImg from "../imgs/search.png";
import questionImg from "../imgs/question.svg";
import profileImg from "../imgs/profile.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-nav">
        <img className="header-nav__logo" src={googlePlayLogo} alt="" />
        <div className="header-nav-wrapper">
          <button className="header-nav-item">
            <span className="header-nav-item__text">Games</span>
          </button>
          <button className="header-nav-item check">
            <span className="header-nav-item__text header-nav-item__pressed">
              Apps
            </span>
          </button>
          <button className="header-nav-item">
            <span className="header-nav-item__text">Movies</span>
          </button>
          <button className="header-nav-item">
            <span className="header-nav-item__text">Books</span>
          </button>
          <button className="header-nav-item">
            <span className="header-nav-item__text">Kids</span>
          </button>
        </div>
      </div>
      <div className="header-menu">
        <span className="header-menu-item">
          <img src={searchImg} alt=""></img>
        </span>
        <span className="header-menu-item">
          <img src={questionImg} alt=""></img>
        </span>
        <span className="header-menu-item">
          <img src={profileImg} alt=""></img>
        </span>
      </div>
    </header>
  );
}
