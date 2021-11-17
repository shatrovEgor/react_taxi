import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
    return(
        <div>
            <Link to="/login">login</Link>
            <Link to="/map">map</Link>
        </div>
    )
}

export default Login;