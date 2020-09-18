import React, { Component } from "react";
import "bootswatch/dist/flatly/bootstrap.min.css";
import Nabvar from "./components/Navbar";
import "./App.css";
import Home from "./views/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nabvar />
        <header className='Header-App'>
          <Home />
        </header>
        
      </div>
    );
  }
}

export default App;
