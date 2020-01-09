import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import {
  Navbar, Nav, NavItem, NavLink, NavbarBrand
} from "reactstrap"

import Main from "./Main"
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Enroll from "./Enroll";
import ScholarList from "./ScholarList";

const NavigationBar = ()=>{
  return(
    <div>
      <header>
        <Navbar className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="collapse navbar-collapse mr-auto" id="navbarSupportedContent">
          <Nav >
          <ul className="navbar-nav ml-auto">
            <NavItem>
            <NavLink href="/signin">
              <div className="btn-group mr-2" role="group" area-label="First group">
              <button className="btn btn-outline-light my-2 my-sm-0" type="button">로그인</button>
              </div>
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/signup"><button className="btn btn-outline-light my-2 my-sm-0" type="button">회원가입</button></NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/https://github.com/reactstrap/reactstrap"><button className="btn btn-outline-light my-2 my-sm-0" type="button">한국장학재단</button></NavLink>
            </NavItem>
            </ul>
          </Nav>
          </div>
        </Navbar>
      </header>
      <div>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
        <Nav className="mr-auto" navbar>
          <NavbarBrand className="nav-link ml-5" href="/main">재단용장학금관리</NavbarBrand>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <NavItem className="nav-link ml-5">
            <NavLink href="/enroll">장학금등록</NavLink>
            </NavItem>
            <NavItem className="nav-link ml-5">
            <NavLink href="/list">장학금 확인 및 선발</NavLink>
            </NavItem>
          <NavItem className="nav-link ml-5">
          <NavLink href="/main">사이트이용방법</NavLink>
          </NavItem>
          <NavItem className="nav-link ml-5">
          <NavLink href="/main">HOME</NavLink>
          </NavItem>
          </ul>
        </div>
        </Nav>
      </Navbar>
      </div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/main" component={Main}/>
        <Route path="/enroll" component={Enroll}/>
        <Route path="/list" component={ScholarList} />
      </Switch>
    </div>
  );
}

export default NavigationBar;
