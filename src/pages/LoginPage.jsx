import React from "react";
import "../styles/LoginPage.css";
import Map from "../components/Map"
import Login from "../components/Login";
import  {useNavigate}  from 'react-router-dom'
import store from "../store";
import {setLogIn} from '../actions'

const LoginPage = () => {
    let navigate = useNavigate();

    const axios = require('axios').default

    const subAuth = (dataAuth) => {
        console.log(dataAuth);
        axios.post('https://loft-taxi.glitch.me/auth', {...dataAuth})
    .then(function (responce) {
        console.log(responce.data)
        if(responce.data.success === true) {
            store.dispatch(setLogIn())
            navigate('/map')
        }
    })
    }


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