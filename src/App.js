import React, { Component } from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import Form from './components/Form';

console.log('prueba');

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="mb-2">
          <div className="logo">
            <h1>Inserte logo random</h1>
          </div>
        </nav>
        <Form />
      </div>
    );
  }
}

export default App;
