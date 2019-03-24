import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBInput } from 'mdbreact';



class App extends Component {
  render() {
    return (
      <div className="grey lighten-5">
       <NavBar></NavBar>
         
       <MDBRow  className="mt-4">
      <MDBCol size="12">
        <Footer></Footer>
        </MDBCol>
</MDBRow>
 
      </div>
    );
  }
}

export default App;
