import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon, MDBInput, MDBCol, MDBRow, MDBNav
} from "mdbreact";
import LeftSideBar from './LeftSideBar';
import image1 from './icons/sky.png';
import image2 from './icons/drawing.svg';
import { Segment, Tab, Label, Icon, Button } from 'semantic-ui-react';
import SideBar from './sideBar';
import GalleryCard from './card';
import RightSideBar from './rightSideBar';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


class App extends Component {



  render() {

 
    return (
      <div className="grey lighten-5">
       <NavBar></NavBar>
     
         
     
       <MDBRow className="w-100 text-center position">
<RightSideBar/>
{/* <SideBar></SideBar> */}
             {/* <LeftSideBar></LeftSideBar> */}
            
             <MDBCol className="m-3">
               <Segment raised>
               <div className="rgba">
               <div className="container">
               <div class="row">
               <div class="col-md-8">
               <img  width="850" height="100%" src={image1}/>
               
           
               <div className="centered">هل تبحث عن تخصص معين ؟
               
              <label>هل تبحث عن تخصص معين ؟</label>
          <MDBInput hint=" ابحث عن معلمين, دورات ,أوراق عمل  " type="text"  className="white-text text-right primary-color-dark pr-4" containerClass="active-primary-color-dark active-primary-color-dark-2 mt-0 mb-3" />
       
               </div>
              
              
               </div>
               </div>
               </div>
               </div>
               </Segment>
               
               </MDBCol>
               
       </MDBRow>
     
       {/* <MDBRow>
       <MDBCol>
                <div className="float-right w-auto">
                
                  <span >أكثر التخصصات ظهوراً في نتائج البحث</span>
                  <img  src={image2}></img>
                  <GalleryCard>
                  </GalleryCard>
                  
                </div>
                <div className="float-right w-auto">
                
                  <span >أكثر التخصصات ظهوراً في نتائج البحث</span>
                  <img  src={image2}></img>
                  <GalleryCard>
                  </GalleryCard>
                  
                </div>
                
                
              </MDBCol>
            </MDBRow> */}

<MDBRow className="w-auto align-right">
<MDBCol md="6"></MDBCol>

<span style={{margin:20}}>أكثر التخصصات ظهوراً في نتائج البحث</span>
<img  src={image2}></img>

</MDBRow>
<div class="block-line"></div>
<div className="container">
<MDBRow className="w-auto box-container">
            
{/* <AliceCarousel autoPlay={false} mouseDragEnabled> */}
             
             
                <MDBCol md="2">
                  
                <GalleryCard data={{title:"yaqeen",age:"23"}}/>
                  </MDBCol>
                
                  
                  <MDBCol md="2">
               
                  <GalleryCard data={{title:"muath",age:"25"}}/>
                
                  </MDBCol>
                  
                  <MDBCol md="2">
                 
                  <GalleryCard data={{title:"muath",age:"25"}}/>
                
                  
                  </MDBCol>
               
                  <MDBCol md="2">
                 
                  <GalleryCard data={{title:"muath",age:"25"}}/>
                 
                 </MDBCol>

     
                 {/* </AliceCarousel> */}
            </MDBRow>
           
            </div>
             
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
