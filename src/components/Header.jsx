import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
                <div className="header">
                    <img src="/images/logo.png" alt="" className="img"/>
                    <div className="btn-bar">
                        <button className="btn"><Link to="/map">Карта</Link></button>
                        <button className="btn" ><Link to="/profile">Профиль</Link></button>
                        <button className="btn" ><Link to="/">Выйти</Link></button>
                    </div>
                </div>
        )
    }
}

export default Header;