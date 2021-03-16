import React, { Component } from "react";
import {  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse} from "mdbreact";
import { withRouter } from 'react-router';
import AuthService from "../../services/AuthService";


class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}



render() {
    const isUserLoggedIn = AuthService.isUserLoggedIn();
    return (
    <header>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/home">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink  to="/table">Table</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          <MDBNavItem>
              {!isUserLoggedIn && <MDBNavLink to="/login">Log in</MDBNavLink>}
              {isUserLoggedIn && <MDBNavLink to="/login">Logged in ({AuthService.getLoggedInUsername()})</MDBNavLink>}       
          </MDBNavItem>
          <MDBNavItem>
              <MDBNavLink to="/home" onClick={AuthService.logout}>Log out</MDBNavLink>
          </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </header>
    );
  }
}

export default withRouter(NavbarPage);