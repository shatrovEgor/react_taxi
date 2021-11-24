import React from "react";
import "../styles/Header.css";
import { useNavigate } from 'react-router';
import { connect } from "react-redux";
import {setLogOut} from '../actions'
import store from "../store";

const Header = () => {
    let navigate = useNavigate();
    function hadleClick() {
        navigate('/map')
    }
    function hadleClickProfile() {
        navigate('/profile')
    }
    function hadleClickLogin() {
        store.dispatch(setLogOut())
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

export default connect(
    null,
    { setLogOut }
)(Header);