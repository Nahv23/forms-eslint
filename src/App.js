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
        <Form />
      </div>
    );
  }
}

export default App;
