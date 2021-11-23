import React from "react";
import "../styles/LoginPage.css";
import Map from "../components/Map"
import Login from "../components/Login";

const axios = require('axios').default
axios.post('https://loft-taxi.glitch.me/auth', {
    email: "email@example.com",
    password: "password"
})
.then(function (responce) {
    console.log(responce.data);
})

const subAuth = (dataAuth) => {
    console.log(dataAuth);
}

const LoginPage = () => {


    return (
        <div className="container">
            <div className="left-side">
            <img src="/images/logo_3.png" alt="" className="img_3"/>
            </div>
            <div className="rigth-side">
                <Map/>
                <div className="log-in-form">
                    <Login onSubmit={subAuth}/>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;