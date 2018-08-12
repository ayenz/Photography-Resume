import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Photoswipe from './components/Photoswipe';

import {
  BrowserRouter as Router,
} from 'react-router-dom'

class App extends Component{

  render(){
    return(
      <Router>
        <div className="App">
          <Header />
          <Home/>
          <About/>
          <Works/>
          <Contact/>
          <Footer/>
          <Photoswipe />
        </div>
      </Router>
    )
  }
}


export default App;
