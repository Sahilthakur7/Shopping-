import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Navbar from './components/navbar';
import ShoppingList from './components/ShoppingList';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <ShoppingList />
      </div>
    );
  }
}

export default App;
