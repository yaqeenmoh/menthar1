import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon, MDBInput, MDBCol, MDBRow, MDBNav
} from "mdbreact";
import LeftSideBar from './LeftSideBar';
import image1 from './icons/sky_2.png';
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
import Jordan from './icons/Group_8304.png';
import CountryCard from './sub-view/country-card';
import just from './icons/just.svg'
import poly from './icons/شعار_جامعة_البلقاء_التطبيقية.svg'
import LOGO_FOOTER from './icons/LOGO_FOOTER.svg'
import psut from './icons/logo-en.svg';
import logo from './icons/logo.svg';
import india from './icons/Group8309.png';
import flag from './icons/flag.svg';
import BackgroundImage from 'react-background-image-loader';
import Icons from './icons';

 


var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { image1 } + ")"
};

const data={title:"الهندسة المدنية",desc:"يختص تخصص الهندسة المدنية بأمور المتعلقة برسم وبناء المباني والمنشآت، حيث يدرس في العديد من الجامعات ضمن كلية الهندسة والتصميم"}
const uniCardData  = [
{
  imgUrl :logo,
  title :"الجامعة الاردنية",
  number : 50
},
{
  imgUrl :poly,
  title :" جامعة البلقاء التطبيقية",
  number : 50
},
{
  imgUrl :just,
  title :" جامعة العلوم والتكنولوجيا",
  number : 50
},
// {
//   imgUrl :LOGO_FOOTER,
//   title :"الجامعة الهاشمية ",
//   number : 50
// },
{

  imgUrl:psut,
  title:"جامعة الأميرة سمية الخاصة",
  number: 30
}



];
const countryItems = [

  {url :Icons.Britsh,
  flag : Icons.BritshFlag,
title:"بريطانيا"},
{url :Icons.Britsh,
  flag : Icons.BritshFlag,
title:"بريطانيا"},
{url :Icons.Britsh,
  flag : Icons.BritshFlag,
title:"بريطانيا"},
{url :Icons.Britsh,
  flag : Icons.BritshFlag,
title:"بريطانيا"},
{url :Icons.Britsh,
  flag : Icons.BritshFlag,
title:"بريطانيا"},
 
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

            
             <MDBCol className="m-3">
               <Segment raised>
               <div className="rgba">
               <div className="container">
               <div className="row">
               <div className="container">
               {/* <form>
               <div >مرحباً بك في منظار </div>
               <label for="site-search">هل تبحث عن تخصص معين ؟</label>
<input type="search" id="site-search" name="q"
       aria-label="Search through site content"/>

<button>Search</button>
               <h1 className="title1">مرحباً بك في منظار   </h1>
               <h2>منظار هي اول و أقوى برمجية تتيح للطالب معرفة التخصصات الجامعية في الأردن في كل من الجامعات الحكومية و الخاصة حسب معدل الطالب المتوقع أو الحقيقي وتمكنه من معرفة خيارات تقريبية للتخصصات الجامعية التي تناسبه من حيث المعدل الشخصية مكان السكن و التكلفة المادية ليتمكن في ذهنه من حصر التخصصات عند التقديم للقبول الموحد</h2>
               <div className="centered">هل تبحث عن تخصص معين ؟</div>
               </form> */}
               <img src={image1} style={{height:400}} />
               </div>
             
        </div>
           
           
             
               </div>
               </div>
               </Segment>
               
               </MDBCol>
               
       </MDBRow>
     
       
<MDBRow className="align-right w">


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

         
             


            <MDBRow className="align-right w">


<span style={{margin:20}}>أكثر الجامعات ظهوراً في نتائج البحث</span>
<img  src={UniImage}></img>

</MDBRow>
<div class="block-line"></div>
<MDBRow className="w-auto box-container uni">
<DrawUni/>
</MDBRow>



<MDBRow className="align-right w">


<span style={{margin:20}}>أكثر البلدان ظهوراً في نتائج البحث</span>
<img  src={flag}></img>

</MDBRow>
<div class="block-line"></div>
<MDBRow className="w-auto box-container country">
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
