import React from 'react';
import logo from './logo.svg';
import {Axios} from './components/Axios'
import Nav from './components/Navigation'
import "./App.css"

function App() {
  return (
    <div className="App">
      <Nav />
      <Axios />

    </div>
  );
}

export default App;
