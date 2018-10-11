import React, { Component } from 'react';
import logo from './imagen/ll.png';
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
        <body>

        <div class="main ui text container">
        <h1 class="ui dividing centered header">Popular Products</h1>
        <div id="content"></div>
        </div>
        <script src="./js/seed.js"></script>
        <script src="./js/app.js"></script>

        <script type="text/babel" data-plugins="transform-class-properties"
        src="./js/app-complete.js">

        </script>
        </body>

       <div className='item'>
       <div className='image'>
        <img src="/imagen/ll.png" />
        <img src={logo} className="App-logo" alt="logo" />
        </div>

        </div>

      </div>
    );
  }
}


export default App;



