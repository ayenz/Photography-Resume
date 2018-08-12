import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Photoswipe from './components/Photoswipe';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: {}
    };
  }

  getData(){
    $.ajax({
      url:'/personalData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({personalData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getData();
  }

  render(){
    return(
      <Router>
        <div className="App">
          <Header />
          <Home data={this.state.personalData}/>
          <About data={this.state.personalData}/>
          <Works data={this.state.personalData}/>
          <Contact data={this.state.personalData}/>
          <Footer data={this.state.personalData}/>
          <Photoswipe />
        </div>
      </Router>
    )
  }
}


export default App;
