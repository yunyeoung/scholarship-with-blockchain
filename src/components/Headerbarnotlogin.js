import React from "react";
import { NavLink, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NotFound from './NotFound';

const Headerbarnotlogin = ()=>{
  return(
    <Router>
      <header>
        <NavLink to="/signin">SignIn</NavLink>
        <NavLink to="/signup">SignUp</NavLink>
        <NavLink to="/https://github.com/reactstrap/reactstrap">한국장학재단</NavLink>
      </header>
    </Router>
  );
};


export default Headerbarnotlogin;
