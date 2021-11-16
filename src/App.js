import React from "react";
import {HeaderWithAuth} from "./components/Header";
import "./styles/App.css"
import { LoginWithAuth } from "./components/Login";
import Map from "./components/Map";
import {ProfileWithAuth} from "./components/Profile";


const PAGES = {
  login: (props) => <LoginWithAuth {...props}/>,
  map: (props) => <Map {...props}/>,
  profile: (props) => <ProfileWithAuth {...props}/>,
}

class App extends React.Component {

  render() {
    return (
      <div>
        <HeaderWithAuth/>
      </div>
    );
  }
}

export default App;
