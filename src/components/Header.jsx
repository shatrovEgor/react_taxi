import React from "react";
import "../styles/Header.css";
import { useNavigate } from 'react-router';

const Header = () => {
    let navigate = useNavigate();
    function hadleClick() {
        navigate('/map')
    }
    function hadleClickProfile() {
        navigate('/profile')
    }
    function hadleClickLogin() {
        navigate('/')
    }

        return (
                <div className="header">
                    <img src="/images/logo.png" alt="" className="img"/>
                    <div className="btn-bar">
                        <button className="btn" onClick={hadleClick}>Карта</button>
                        <button className="btn" onClick={hadleClickProfile}>Профиль</button>
                        <button className="btn" onClick={hadleClickLogin}>Выйти</button>
                    </div>
                </div>
        )
}

export default Header;