import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom'
import {MDBNavItem,MDBNavLink,MDBNav,MDBRow,MDBIcon,MDBContainer,MDBCol,MDBCard,MDBCardImage ,MDBCardBody} from 'mdbreact';
import { Segment } from "semantic-ui-react";
import groupIcon from './icons/return.svg';
import conversation from './icons/conversation.svg';
import telescope from './icons/telescope (2).svg';
import Rectangle from './icons/Rectangle 6535.png';
import Rectangle2 from './icons/Rectangle 6545.png';
import icon1 from './icons/5e9f026d-dff4-4376-b34c-72befe06906c.jpg'
import book from './icons/book.png';

class SideBar extends Component {


  render() {
    return (
        
            <MDBCol className="p-4 ml-3 shadow-box-example z-depth-2 left-side-bar-container" size="3">
<MDBContainer className="mb-3">

<MDBCardImage className="img-fluid" src={Rectangle2} waves  />
<div style={{float:"right", color:"#327BF9"}}> العودة إلى جو اكاديمي <img src={groupIcon} className=" m-1"></img></div>

<table id="myTable" style={{width:"100%"}}>
        <tbody>
        <div>
            <tr>
               
               
                <td a href="#" width="40%"align="center">  <img className="width"    src={conversation}></img></td>
           
                </tr>
                <p className="blue-text font" > شبابيك</p>
            </div>
            
        </tbody>
    </table>
    <table id="myTable" style={{width:"100%"}}>
        <tbody>
        <div>
   
               
               
                <td a href="#" width="40%"align="center">  <img className="width"    src={telescope}></img></td>
           
             
                <p className="blue-text font" > منظار</p>
            </div>
            
        </tbody>
    </table>
   <MDBCol className="m-0 p-0">
   
   </MDBCol>

   <MDBCol> 
     <a href="#!" className="rotate-btn" data-card="card-1" onClick={this.handleFlipping}>
    
     <div
   className="grey lighten-2 jumbotron">
   <div style={{float:"right", color:"#327BF9"}}>
 <a style={{width:"20%", textAlign:"right",marginTop:12}}>  <img src={book} className=" m-1"></img>  </a>
    </div>
    </div>
              </a>
             
       
        </MDBCol>
</MDBContainer>




        

<BrowserRouter>
<MDBNav className="flex-column md-0">

 <MDBNavItem>
    <MDBNavLink  className="grey-text" to="#!">
    <table>
    <tbody>
    <tr>
   <td style={{width:"20%"}}>   <td><a href="#"> <img  src={telescope}></img></a></td>
    </td>
    
   
   <td><a href="#"> <img height="59px" width="200px" src={telescope}></img></a></td>
   
   <td align="right" style={{width:"20%"}}>     </td>
   </tr>
    </tbody>
    </table>
    </MDBNavLink>
  </MDBNavItem>

  <MDBNavItem>
    <MDBNavLink className="grey-text" to="#!">
    <table>
    <tbody>
    <tr>
   <td style={{width:"20%"}}>  <MDBIcon far   size="2x" icon="arrow-alt-circle-left" />  </td>
    
   
    <td align="right" style={{width:"60%"}}>  ملفات </td>
   
   <td align="right" style={{width:"20%"}}>  <MDBIcon icon="tablet-alt" size="2x" className="grey-text  m-1 ml-3"></MDBIcon>     </td>
   </tr>
    </tbody>
    </table>
    </MDBNavLink>
  </MDBNavItem>
  <MDBNavItem>
    <MDBNavLink className="grey-text" to="#!">
    <table>
    <tbody>
    <tr>
   <td style={{width:"20%"}}>  <MDBIcon far   size="2x" icon="arrow-alt-circle-left" />  </td>
    
   
    <td align="right" style={{width:"60%"}}>  شبابيك </td>
   
   <td align="right" style={{width:"20%"}}>  <MDBIcon icon="comment-alt" size="2x" className="grey-text  m-1 ml-3"></MDBIcon>     </td>
   </tr>
    </tbody>
    </table>
    </MDBNavLink>
  </MDBNavItem>
  <MDBNavItem>
    <MDBNavLink  className="grey-text" to="#!">
    <table>
    <tbody>
    <tr>
   <td style={{width:"20%"}}>  <MDBIcon far   size="2x" icon="arrow-alt-circle-left" />  </td>
    
   
    <td align="right" style={{width:"60%"}}>  منظار </td>
   
   <td align="right" style={{width:"20%"}}>  <MDBIcon icon="microscope" size="2x" className="grey-text  m-1 ml-3"></MDBIcon>     </td>
   </tr>
    </tbody>
    </table>
    </MDBNavLink>
  </MDBNavItem>
  <MDBNavItem>
    <MDBNavLink className="grey-text" active to="#!">
    <table>
    <tbody>
    <tr>
   <td style={{width:"20%"}}>  <MDBIcon far   size="2x" icon="arrow-alt-circle-left" />  </td>
    
   
    <td align="right" style={{width:"60%"}}>  فرص </td>
   
   <td align="right" style={{width:"20%"}}>  <MDBIcon icon="chart-bar" size="2x" className="grey-text  m-1 ml-3"></MDBIcon>     </td>
   </tr>
    </tbody>
    </table>
    </MDBNavLink>
  </MDBNavItem>
  <MDBNavItem>
    <MDBNavLink className="grey-text" to="#!">
    <table>
    <tbody>
    <tr>
   <td style={{width:"20%"}}>  <MDBIcon far   size="2x" icon="arrow-alt-circle-left" />  </td>
    
   
    <td align="right" style={{width:"60%"}}>  أدوات الموقع </td>
   
   <td align="right" style={{width:"20%"}}>  <MDBIcon icon="calculator" size="2x" className="grey-text  m-1 ml-3"></MDBIcon>     </td>
   </tr>
    </tbody>
    </table>
    </MDBNavLink>
  </MDBNavItem>
  <MDBNavItem>
    <MDBNavLink className="grey-text" to="#!">
    <table>
    <tbody>
    <tr>
   <td style={{width:"20%"}}>  <MDBIcon far   size="2x" icon="arrow-alt-circle-left" />  </td>
    
   
    <td align="right" style={{width:"60%"}}>  مدارس </td>
   
   <td align="right" style={{width:"20%"}}>  <MDBIcon icon="school" size="2x" className="grey-text  m-1 ml-3"></MDBIcon>     </td>
   </tr>
    </tbody>
    </table>
    </MDBNavLink>
  </MDBNavItem>
  <MDBNavItem>
    <MDBNavLink className="grey-text" to="#!">
    <table>
    <tbody>
    <tr>
   <td style={{width:"20%"}}>  <MDBIcon far  size="2x" icon="arrow-alt-circle-left" />  </td>
    
   
    <td align="right" style={{width:"60%"}}>  معلمون </td>
   
   <td align="right" style={{width:"20%"}}>  <MDBIcon icon="university" size="2x" className="grey-text  m-1 ml-3"></MDBIcon>     </td>
   </tr>
    </tbody>
    </table>
    </MDBNavLink>
  </MDBNavItem>

</MDBNav>

</BrowserRouter>

</MDBCol>


     
          

    );
  }
}

export default SideBar;

