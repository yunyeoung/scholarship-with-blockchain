import React from "react";
import {
  Navbar, Nav, NavItem, NavLink
} from "reactstrap"

const HeaderNotLogin = () =>{
    return(
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
    );
}

export default HeaderNotLogin;