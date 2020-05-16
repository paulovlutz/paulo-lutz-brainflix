import React from "react";
import logo from "../../assets/logo/Logo-brainflix.svg";
import profilePicture from "../../assets/images/Mohan-muruge.jpg";
import "./header.scss";

// console.log(logo);

const Header = () => (
    <header className="header">
        <Brand/>
        <Search/>
        <div className="header__upload">
            <UploadButton/>
            <ProfilePicture/>
        </div>
    </header>
);

const Brand = () => (
    <div className="header__image">
        <img src={logo} alt="Logo" className="header__logo" />
    </div>
);

const Search = () => (
    <form className="header__form">
        <input type="search" placeholder="Search" className="header__search"></input>
    </form>
);

const UploadButton = () => (
    <button className="header__button button">+ UPLOAD</button>
)

const ProfilePicture = () => (
    <img src={profilePicture} alt="Profile Picture" className="header__profile-picture" />
)

export default Header;