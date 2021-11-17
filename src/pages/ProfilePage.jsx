import React from "react";
import Header from "../components/Header"
import Profile from "../components/Profile"
import Map from "../components/Map"


const ProfilePage = () => {
    return (
        <div className="container-prof">
            <Map/>
            <div className="header-prof">
                <Header/>
            </div>
            <div className="profile-prof">
                <Profile/>
            </div>     
        </div>
    )
}

export default ProfilePage;