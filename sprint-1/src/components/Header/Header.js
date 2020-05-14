import React from "react";
import logo from "../../assets/logo/Logo-brainflix.svg";

// console.log(logo);

const Header = () => (
    <section className="header">
        <Brand/>
        <Search/>
        <HeaderButton/>
    </section>
);

const Brand = props => (
    <img src={logo} alt="Logo" />
);

const Search = props => (
    <form>
        <input type="search" value="Search"></input>
    </form>
);

const HeaderButton = props => (
    <button>+ UPLOAD</button>
)

export default Header;