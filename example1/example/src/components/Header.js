import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class Header extends Component {
  render () {
    return(
      <header className="header">
        <nav>
          <div className="row">
            <div className="col col-xs-2">
              <h1 className="header-title">
                <a href="#">usable</a>
                <em>.</em>
              </h1>
            </div>
            <div className="nav-container col col-xs-10">
              <ul className="nav">
                <li><a href="#" className="nav-link nav-link--active">Home</a></li>
                <li><a href="#" className="nav-link">Features</a></li>
                <li><a href="#" className="nav-link">How it Works</a></li>
                <li><a href="#" className="nav-link">FAQ</a></li>
                <li><a href="#" className="nav-link">Products</a></li>
                <li><a href="#" className="nav-link">Contact</a></li>
                <li><a href="#" className="nav-link">Login</a></li>
                <li><button className="btn btn-success">Sign up for free</button></li>
              </ul>
              <FontAwesome name="bars" className="bars" size="2x"/>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
