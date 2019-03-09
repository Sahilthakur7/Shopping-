import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import store from './store';


import Navbar from './components/navbar';
import ShoppingList from './components/ShoppingList';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Navbar />
                    <ShoppingList />
                </div>
            </Provider>
        );
    }
}

export default App;
