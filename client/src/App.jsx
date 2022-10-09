

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import { useSelector } from 'react-redux';

import "./App.scss";

import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
