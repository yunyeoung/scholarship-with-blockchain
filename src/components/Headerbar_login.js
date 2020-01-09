import React from "react";

import { NavLink, Route, Switch, BrowserRouter } from "react-router-dom";


import Mypage extends './Mypage';
import Logout extends './Logout';

const Headerbar_login = ()=>{
  return(
    <header>
      <NavLink to="/signout"><button>signout</button></NavLink>
      <NavLink to="/mypage">mypage</NavLink>
      <NavLink to="https://github.com/reactstrap/reactstrap">한국장학재단</NavLink>
      <Route path="/signout" component={Logout}/>
      <Route path="/mypage" component={Mypage}/>
    </header>
  );
};

export default Headerbar_login;
