import React, { Component } from 'react';
import Images from './images/Images';
import './App.css';

export default class App extends Component {

  render() {

    return (
      <div className="app">
        <header role="banner" id="header">
          <section className="head-container maxwidth-wrap">
            <h1 className="logo">Bunnies</h1>
            <nav>
              <ul>
                <li>Home</li>
              </ul>
            </nav>
          </section>
        </header>
        <main role="main" id="main">
          <section className="main-container maxwidth-wrap">
            <Images/>
          </section>
        </main>
      </div>
    );
  }
}