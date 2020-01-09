import React from "react";
import { NavLink, Route, Switch, BrowserRouter } from "react-router-dom";

import NavigationBar from "./NavigationBar"
import Footer from "./Footer"
import NavigationTest from "./NavigationTest";

import './App.css';

const App = ()=>{
  return(
    <div>
      <BrowserRouter>
      <NavigationBar />
      <Footer />
      </BrowserRouter>
    </div>
  );
};


export default App;
