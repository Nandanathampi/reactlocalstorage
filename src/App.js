
import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LocalData from './component/LocalData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <LocalData />
      </div>
    );
  }
}
export default App;
