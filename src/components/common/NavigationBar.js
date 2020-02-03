import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import {
  Navbar, Nav, NavItem, NavLink, NavbarBrand
} from "reactstrap"

import HeaderNotLogin from "./HeaderNotLogin";
import Main from "../Main"
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import NoticeList from "../NoticeList";
import ScholarList from "../ScholarList";
//import MyApplyList from "../MyApplyList";
import Notice from "../NoticeDetail";
import ScholarDetail from "../ScholarDetail";
import MyApplyDetail from "../MyApplyDetail";
import WriteComponent from "../WriteComponent";

import LoginForm from '../../containers/LoginForm';
import HeaderContainer from '../../containers/common/HeaderContainer';
import NoticeViewer from "../../containers/NoticeViewer";
import NoticeListContainer from "../../containers/NoticeListContainer";
import ApplyListContainer from "../../containers/ApplyListContainer";

const NavigationBar = ()=>{
  return(
    <div>
      <HeaderContainer />
      <div>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
        <Nav className="mr-auto" navbar>
          <NavbarBrand className="nav-link ml-5" href="/main">학생용장학금관리</NavbarBrand>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <NavItem className="nav-link ml-5">
            <NavLink href="/noticelist">공지사항</NavLink>
            </NavItem>
            <NavItem className="nav-link ml-5">
            <NavLink href="/list">장학금 정보/신청</NavLink>
            </NavItem>
          <NavItem className="nav-link ml-5">
          <NavLink href="/applylist">신청현황조회</NavLink>
          </NavItem>
          <NavItem className="nav-link ml-5">
          <NavLink href="/main">사이트이용방법</NavLink>
          </NavItem>
          <NavItem className="nav-link ml-5">
          <NavLink href="/main">HOME</NavLink>
          </NavItem>
          <NavItem className="nav-link ml-5">
          <NavLink href="/writeNotice">공지쓰러가자~!</NavLink>
          </NavItem>
          </ul>
        </div>
        </Nav>
      </Navbar>
      </div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signin" component={LoginForm} />
        <Route path="/signup" component={SignUp} />
        <Route path="/main" component={Main}/>
        <Route path="/noticelist" component={NoticeListContainer}/>
        <Route path="/list" component={ScholarList} />
        <Route path="/applylist" component={ApplyListContainer} />
        <Route path="/notice/:id" component={NoticeViewer}/>
        <Route path="/schlarDetail/:id" component={ScholarDetail}/>
        <Route path="/myapplys/:id" component={MyApplyDetail}/>
        <Route path="/writeNotice" component={WriteComponent}/>
      </Switch>
    </div>
  );
}

export default NavigationBar;
