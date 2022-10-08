import React from 'react';
// import { Switch, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import "./App.scss";

import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
