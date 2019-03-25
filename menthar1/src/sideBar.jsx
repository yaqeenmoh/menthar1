import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom'
import {MDBNavItem,MDBNavLink,MDBNav,MDBRow,MDBIcon,MDBContainer,MDBCol,MDBCard } from 'mdbreact';
import { Segment } from "semantic-ui-react";
import groupIcon from './icons/return.svg';


class SideBar extends Component {


  render() {
    return (
        <div>
<MDBContainer className="mb-3">
<div style={{float:"right", color:"#327BF9"}}> العودة إلى جو اكاديمي <img src={groupIcon} className=" m-1"></img></div>
<MDBRow className="pl-1">
    <MDBCol className="m-0 p-0">
<MDBIcon icon="question-circle" size="3x" className="blue-text m-1"></MDBIcon>
<p className="blue-text"> مفضلتي</p>
</MDBCol>
<MDBCol className="m-0 p-0">
   <MDBIcon icon="question-circle" size="3x" className="blue-text m-1"></MDBIcon>
   <p className="blue-text"> دوراتي</p>
   </MDBCol>
   <MDBCol className="m-0 p-0">
   <MDBIcon icon="question-circle" size="3x" className="blue-text m-1"></MDBIcon>
   <p className="blue-text"> جروباتي</p>
   </MDBCol>
   <MDBCol className="m-0 p-0">
   <MDBIcon icon="question-circle" size="3x" className="blue-text m-1"></MDBIcon>
   <p className="blue-text"> ملفاتي</p>
   </MDBCol>
</MDBRow>
    
</MDBContainer>

        

<BrowserRouter>
<MDBNav className="flex-column md-0">

 <MDBNavItem>
    <MDBNavLink  className="grey-text" to="#!">
    <table>
    <tbody>
    <tr>
   <td style={{width:"20%"}}>  <MDBIcon far   size="2x" icon="arrow-alt-circle-left" />  </td>
    
   
    <td align="right" style={{width:"60%"}}>  دورات </td>
   
   <td align="right" style={{width:"20%"}}>  <MDBIcon icon="tv" size="2x" className="grey-text  m-1 ml-3"></MDBIcon>     </td>
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

<MDBContainer className="mt-4">
<MDBRow className="pl-1">
    <MDBCol className="m-0 p-0">
<MDBIcon icon="question-circle" size="3x" className="grey-text m-1"></MDBIcon>
<strong className="indigo-text"> متجر</strong>
</MDBCol>
<MDBCol className="m-0 p-0">
   <MDBIcon icon="question-circle" size="3x" className="grey-text m-1"></MDBIcon>
   <strong className="indigo-text"> بنك الأسئلة</strong>
   </MDBCol>
   <MDBCol className="m-0 p-0">
   <MDBIcon icon="question-circle" size="3x" className="grey-text m-1"></MDBIcon>
   <strong className="indigo-text"> استازي</strong>
   </MDBCol>
   <MDBCol className="m-0 p-0">
   <MDBIcon icon="question-circle" size="3x" className="grey-text m-1"></MDBIcon>
   <strong className="indigo-text"> نقاط البيع</strong>
   </MDBCol>
</MDBRow>
    
</MDBContainer>
</div>

     
          

    );
  }
}

export default SideBar;

