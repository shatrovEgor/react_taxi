import React from "react";
import Header from "../components/Header"
import Profile from "../components/Profile"
import Map from "../components/Map"
import ModalProfile from '../components/ModalWindow/ModalProfile'


const ProfilePage = () => {
    return (
        <div className="container-prof">
            <Map/>
            <div className="header-prof">
                <Header/>
            </div>
            <ModalProfile/>
            <div className="profile-prof">
                <Profile/>
            </div>     
        </div>
    )
}

export default ProfilePage;