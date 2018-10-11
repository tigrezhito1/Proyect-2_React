import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink,
  HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class App extends Component{
// 
  render() {
    return (

      <div className="App">
       

        <HashRouter>
         <div>
          
          <ul className="header">
             <li><NavLink to="/">Home</NavLink></li>
            <li>< NavLink to="/stuff"  class="active">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">

            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>

          </div>

        </div>

        </HashRouter>

      </div>
    );
  }
}


export default App;



