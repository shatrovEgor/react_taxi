import React from "react";
import "../styles/Header.css"
import Login from "./Login";
import Map from "./Map";
import Profile from "./Profile";


const PAGES = {
    login: <Login/>,
    map: <Map/>,
    profile: <Profile/>,
}

class Header extends React.Component {
    state = {currentPage: "login"};

    navigateTo = (page) => {
      this.setState({ currentPage: page})
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
                        {PAGES[this.state.currentPage]}
                    </section>
                </main>
            </div>
        )
    }
}

export default Header;