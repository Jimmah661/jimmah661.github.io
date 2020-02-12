import React from "react";
import NavBar from "./components/NavBar";
import ContactMe from './components/contactme'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/portfolio" >Portfolio page     
        </Route>
        <Route path="/contact" >
          <ContactMe />       
        </Route>
        <Route path="/aboutMe" >About Me        
        </Route>
        <Route path="/" >Home Page        
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
