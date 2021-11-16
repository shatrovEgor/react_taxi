import React from "react";
import "./styles/App.css"
import { HeaderWithAuth } from "./components/Header";


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
