import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBInput } from 'mdbreact';
import LeftSideBar from './LeftSideBar';
import image1 from './icons/Screen-Shot-2017-12-05-at-15.40.31-860x375.svg';
import image2 from './icons/drawing.svg';
import { Segment, Tab, Label, Icon, Button } from 'semantic-ui-react';
import SideBar from './sideBar';


class App extends Component {
  render() {
    return (
      <div className="grey lighten-5">
       <NavBar></NavBar>
         
     
<MDBRow className="w-100 text-center">
             
             <LeftSideBar></LeftSideBar>
   
             <MDBCol className="m-3">
               <Segment raised>
               <div className="rgba">
               <div className="container">
               <img  width="100%" height="100%" src={image1}></img>
             
               <div className="centered">هل تبحث عن تخصص معين ؟</div>
               </div>
               </div>
               </Segment>
               </MDBCol>
               
       </MDBRow>
       <MDBCol size="2" className="h-auto white shadow-box-example z-depth-3">
            <SideBar></SideBar>
          </MDBCol>
       <MDBRow>
       <MDBCol>
                <div className="float-right w-auto">
                  <span>أكثر التخصصات ظهوراً في نتائج البحث</span>
                  <img  src={image2}></img>
                </div>
              </MDBCol>
            </MDBRow>
           
       <MDBRow  className="mt-4">
       
      <MDBCol size="12">
     <Footer/>
     
        </MDBCol>
</MDBRow>

      </div>
    );
  }
}

export default App;
