import React from "react";
import "../styles/LoginPage.css";
import Map from "../components/Map"
import Login from "../components/Login";


const LoginPage = () => {


    return (
        <div className="container">
            <div className="left-side">
            <img src="/images/logo_3.png" alt="" className="img_3"/>
            </div>
            <div className="rigth-side">
                <Map/>
                <div className="log-in-form">
                    <Login/>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;