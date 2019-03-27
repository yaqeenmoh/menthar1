import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBInput } from 'mdbreact';
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
               <img  width="850" height="100%" src={image1}></img>
             
               <div className="centered">هل تبحث عن تخصص معين ؟</div>
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
                  
                <GalleryCard data={{title:"الهندسة المدنية",subject:"23",readMore:"إقرأ المزيد"}}/>
                  </MDBCol>
                
                  
                  <MDBCol md="2">
               
                  <GalleryCard data={{title:"الهندسة المدنية ",subject:"25",readMore:"إقرأ المزيد"}}/>
                
                  </MDBCol>
                  
                  <MDBCol md="2">
                 
                  <GalleryCard data={{title:"الهندسة المدنية ",subject:"25",readMore:"إقرأ المزيد"}}/>
                
                  
                  </MDBCol>
               
                  <MDBCol md="2">
                 
                  <GalleryCard data={{title:"الهندسة المدنية",subject:"25",readMore:"إقرأ المزيد"}}/>
                 
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
