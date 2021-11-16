import React from "react";
import "../styles/Header.css"
import { LoginWithAuth } from "./Login";
import Map from "./Map";
import {ProfileWithAuth} from "./Profile";
import { withAuth } from "../AuthContext";


const PAGES = {
    login: (props) => <LoginWithAuth {...props}/>,
    map: (props) => <Map {...props}/>,
    profile: (props) => <ProfileWithAuth {...props}/>,
}

class Header extends React.Component {
    state = {currentPage: "login"};

    navigateTo = (page) => {
        if(this.props.isLoggedIn){
            this.setState({ currentPage: page })
        }else{
            this.setState({ currentPage: 'login'})
        }
    }; 

    render() {
        return (
            <div>
                <div className="header">
                    <img src="/images/logo.png" alt="" className="img"/>
                    <div className="btn-bar">
                        <button className="btn" onClick={() => {
                            this.navigateTo("map")
                        }}>Карта</button>
                        <button className="btn" onClick={() => {
                            this.navigateTo("profile")
                        }}>Профиль</button>
                        <button className="btn" onClick={() => {
                            this.navigateTo("login")
                        }}>Выйти</button>
                    </div>
                </div>
                <main>
                    <section>
                        {PAGES[this.state.currentPage]({navigate: this.navigateTo})}
                    </section>
                </main>
            </div>
        )
    }
}

export const HeaderWithAuth = withAuth(Header)