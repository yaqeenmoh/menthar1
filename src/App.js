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
import UniImage from './icons/uni.svg';
import { Segment, Tab, Label, Icon, Button } from 'semantic-ui-react';
import SideBar from './sideBar';
import GalleryCard from './card';
import RightSideBar from './rightSideBar';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import GalleryCard3 from './uniCard';
import UniCard from './sub-view/uni-card';
import UniJorLogo from './icons/uni.png';
import Jordan from './icons/jordan2.png';
import CountryCard from './sub-view/country-card';


const data={title:"الهندسة المدنية",desc:"يختص تخصص الهندسة المدنية بأمور المتعلقة برسم وبناء المباني والمنشآت، حيث يدرس في العديد من الجامعات ضمن كلية الهندسة والتصميم"}
const uniCardData  = [
{
  imgUrl :UniJorLogo,
  title :"الجامعة الاردنية",
  number : 50
},
{
  imgUrl :UniJorLogo,
  title :"الجامعة الاردنية",
  number : 50
},
{
  imgUrl :UniJorLogo,
  title :"الجامعة الاردنية",
  number : 50
},
{
  imgUrl :UniJorLogo,
  title :"الجامعة الاردنية",
  number : 50
}



];
const countryItems = [

  {url :Jordan},
  {url :Jordan},
  {url :Jordan},
  {url :Jordan}
 
];
class App extends Component {



  render() {

    const DrawUni = () =>{
      
     return uniCardData.map((item)=>{
      return (
        <UniCard data={item}/>
      )
      })
      
    }

    const DrawCountry  =()=>{
      return countryItems.map((item)=>{
        return (
          <CountryCard data={item}/>
        )
        })
    }



 
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
          <MDBInput hint=" ابحث عن معلمين, دورات ,أوراق عمل  " type="text"  className="sty" />
       
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
{/* <MDBRow className="w-auto align-right">
<MDBCol md="6"></MDBCol>

<span style={{margin:20}}>أكثر الجامعات ظهوراً في نتائج البحث
</span>
<img  src={image2}></img>

</MDBRow> */}
<MDBRow className="w-auto align-right">
<MDBCol md="6"></MDBCol>

<span style={{margin:20}}>أكثر التخصصات ظهوراً في نتائج البحث</span>
<img  src={image2}></img>

</MDBRow>
<div class="block-line"></div>
<div className="container-fluid" style={{marginLeft:0,marginRight:"auto"}}>
<MDBRow className="w-auto box-container">
            
{/* <AliceCarousel autoPlay={false} mouseDragEnabled> */}
             
             
             <MDBCol md="2">
               
               <GalleryCard data={data} />
             
               </MDBCol>
                
                  
                  <MDBCol md="2">
               
                  <GalleryCard data={data} />
                
                  </MDBCol>
                  
                  <MDBCol md="2">
                 
                  <GalleryCard data={data} />
                
                  
                  </MDBCol>
               
                  <MDBCol md="2">
                 
                  <GalleryCard data={data}/>
                 
                 </MDBCol>

     
                 {/* </AliceCarousel> */}
            </MDBRow>

             
    





           
          
            </div>

         
             


            <MDBRow className="w-auto align-right">
<MDBCol md="6"></MDBCol>

<span style={{margin:20}}>أكثر الجامعات ظهوراً في نتائج البحث</span>
<img  src={UniImage}></img>

</MDBRow>
<div class="block-line"></div>
<MDBRow className="w-auto box-container uni">
<DrawUni/>
</MDBRow>



<MDBRow className="w-auto align-right">
<MDBCol md="6"></MDBCol>

<span style={{margin:20}}>أكثر البلدان ظهوراً في نتائج البحث</span>
<img  src={UniImage}></img>

</MDBRow>
<div class="block-line"></div>
<MDBRow className="w-auto box-container uni">
<DrawCountry/>
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
