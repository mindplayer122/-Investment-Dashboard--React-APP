import React from "react";
import myLogo from'../images/myLogo.jpg';
import './Header.css';



const Header = ({title = "Investment Calculator", subtitle}) => {
    return (
        <header id="header">
            <img className="header-img" src={myLogo} alt="Investment Calculator Logo" />
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
        </header>
    )
}

export default Header;