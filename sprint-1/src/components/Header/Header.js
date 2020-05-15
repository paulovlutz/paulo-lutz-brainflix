import React from "react";
import logo from "../../assets/logo/Logo-brainflix.svg";
import "./header.scss";

// console.log(logo);

const Header = () => (
    <header className="header">
        <Brand/>
        <Search/>
        <UploadButton/>
    </header>
);

const Brand = () => (
    <img src={logo} alt="Logo" className="header__logo" />
);

const Search = () => (
    <form>
        <input type="search" placeholder="Search" className="header__search"></input>
    </form>
);

const UploadButton = () => (
    <button className="header__button button">+ UPLOAD</button>
)

export default Header;