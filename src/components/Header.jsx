import React from "react";
import "../styles/Header.css"
import Mybutton from "./UI/button/Mybutton";

const Header = function () {
    return (
        <div className="header">
            <img src="/images/logo.png" alt="" className="img"/>
            <div className="btn-bar">
                <Mybutton title="Карта"/>
                <Mybutton title="Профиль"/>
                <Mybutton title="Логин"/>
            </div>
        </div>
    )
}

export default Header;