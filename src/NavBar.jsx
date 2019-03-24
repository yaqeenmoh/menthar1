import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon, MDBInput, MDBCol, MDBRow, MDBNav
} from "mdbreact";
import "bootstrap-css-only/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

class NavBar extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (

      <MDBNavbar color="primary-color" dark expand="md">
<BrowserRouter>
        <MDBNav>
          <MDBNavItem>
                      <MDBIcon icon="question-circle" size="lg" className="white-text mr-5"></MDBIcon>
          </MDBNavItem>
          <MDBNavItem>
          <MDBIcon icon="bell" size="lg" className="white-text mr-2"></MDBIcon>
          </MDBNavItem>
          <MDBNavItem>
          <MDBIcon far icon="comments" size="lg" className="white-text mr-3"></MDBIcon>
          </MDBNavItem>
        </MDBNav>
        </BrowserRouter>
        <img
          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
          alt=""
          width="50px"
          height="50px"
          className="rounded-circle "
        />





        <MDBDropdown>
          <MDBDropdownToggle nav caret className="white-text">
            <span className="white-text mr-2"> لين قطاونة</span>
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem href="#!"> مفضلتي</MDBDropdownItem>
            <MDBDropdownItem href="#!"> دوراتي</MDBDropdownItem>
            <MDBDropdownItem href="#!"> جروباتي</MDBDropdownItem>
            <MDBDropdownItem href="#!"> ملفاتي</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBCol md="6" className="mt-3">
          <MDBInput hint=" ابحث عن معلمين, دورات ,أوراق عمل  " type="text" className="white-text text-right primary-color-dark pr-4" containerClass="active-primary-color-dark active-primary-color-dark-2 mt-0 mb-3" />
        </MDBCol>
        <MDBNavbarNav right>
          <MDBNavbarBrand>
            <MDBContainer>
              <MDBRow>
                <MDBCol className="m-0 p-0"><MDBIcon icon="gift" size="2x" className="white-text"></MDBIcon></MDBCol>
                <MDBCol className="m-0 pl-2"><strong className="white-text">JO | Academy</strong>
                  <h6>بالاشتراك مع @Zain</h6></MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBNavbarBrand>

        </MDBNavbarNav>

      </MDBNavbar>


    );
  }
}

export default NavBar;