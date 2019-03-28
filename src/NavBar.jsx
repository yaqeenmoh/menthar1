import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon, MDBInput, MDBCol, MDBRow, MDBNav
} from "mdbreact";
import "bootstrap-css-only/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import path  from './icons/girl.png' ;
import Path2 from './icons/Path35.svg'
import chat1 from './icons/chat (1).svg'
import notification1 from './icons/notification (1).svg'
import questionmark from './icons/question-mark.svg'

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
                     <img className="margin" src={questionmark}></img>
          </MDBNavItem>
          <MDBNavItem>
          <img className="margin"  src={notification1}></img>
          </MDBNavItem>
          <MDBNavItem>
          <img
          src={chat1}
          alt="" className="margin" >
        </img><a href="#!"></a>
          </MDBNavItem>
        </MDBNav>
        </BrowserRouter>
        <img
          src={path}
          alt=""
          width="38.15px"
          height="35.02px"
          className="rounded-circle "
          opacity="0.75"
        >
        </img>





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
          <MDBInput hint=" ابحث عن معلمين, دورات ,أوراق عمل  " type="text"  className="white-text text-right primary-color-dark pr-4 inputStyle" containerClass="active-primary-color-dark active-primary-color-dark-2 mt-0 mb-3" />
        </MDBCol>
        <MDBNavbarNav right>
        <MDBNavbarBrand>
            <MDBContainer>
              <MDBRow>
              <img
          src={Path2}
          alt=""
          width="50px"
          height="50px"
          className="rounded-circle "
        >
        </img>

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