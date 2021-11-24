import React from "react";
import Header from "../components/Header"
import Profile from "../components/Profile"
import Map from "../components/Map"
import ModalProfile from '../components/ModalWindow/ModalProfile'
import store from "../store";
import { saveCardData } from "../actions";


const ProfilePage = () => {

    const onSubmit = (formData) => {
        console.log(formData);
        store.dispatch(saveCardData(formData))
      }
      
    return (
        <div className="container-prof">
            <Map/>
            <div className="header-prof">
                <Header/>
            </div>
            <ModalProfile/>
            <div className="profile-prof">
                <Profile onSubmit={onSubmit}/>
            </div>     
        </div>
    )
}

export default ProfilePage;