import React, { Component } from "react";
import {
  MDBCol, MDBRow, MDBIcon,MDBBtn,MDBBadge, MDBContainer 
  } from "mdbreact";
import icon1 from './icons/Mask Group 26.png'
import icon2 from './icons/Mask Group 27.png'
import icon3 from './icons/Mask Group 28.png'
import uniLogo from './icons/University_of_Jordan_Logo.svg.png'
import groupIcon from './icons/return.svg';
import Rectangle from './icons/Rectangle 6700.svg';
import conversation from './icons/conversation.svg';
import telescope from './icons/telescope (2).svg';
import './index.css'

export default ()=>(
   
   <MDBCol className="p-4 ml-3 shadow-box-example z-depth-2 left-side-bar-container" size="3">

    <div style={{float:"right", color:"#327BF9"}}> العودة إلى جو اكاديمي <img src={groupIcon} className=" m-1"></img></div>
  <br style={{clear:"right"}}></br>
<div className="row">
<div className="col-md-12">
<div className="col-md-7">
    <table id="myTable" style={{width:"100%"}}>
        <tbody>
        <div>
            <tr>
               
               
                <td width="40%"align="center">  <img className="width"    src={conversation}></img></td>
                
                </tr>
            </div>
            
        </tbody>
    </table>
    </div>
    <div className="col=md-7">
    <table id="myTable" style={{width:"100%"}}>
        <tbody>
        <div>
            <tr>
               
               
                <td width="30%"align="center">  <img className="width"    src={telescope}></img></td>
                
                </tr>
            </div>
            
        </tbody>
    </table>
    
    </div>
    
    </div>
    </div>
    <div
   className="grey lighten-2 jumbotron"
  ><h4>    مساحة اعلان
  </h4>

    </div>
    <hr ></hr>
    <hr></hr>
    <div  style={{float:"right"}} ><h3>هاشتغ الاكثر استخداما</h3></div>
    <hr style={{clear:"right"}}></hr>

   <div style={{ width: "100%", flex: "wrap" }}>
   <MDBContainer >
      
      <MDBBadge className="pt-2 pb-2 pr-4 pl-4 m-1" pill color="light">توجيهي ادبي# </MDBBadge>
      <MDBBadge className="pt-2 pb-2 pr-4 pl-4 m-1" pill color="light">توجيهي علمي #</MDBBadge>
      <MDBBadge className="pt-2 pb-2 pr-4 pl-4 m-1" pill color="light">علوم الطاقة# </MDBBadge>
      <MDBBadge className="pt-2 pb-2 pr-4 pl-4 m-1" pill color="light">هندسة صناعية# </MDBBadge>
      <MDBBadge className="pt-2 pb-2 pr-4 pl-4 m-1" pill color="light">هندسة الميكاترونكس# </MDBBadge>
        <MDBBadge className="pt-2 pb-2 pr-4 pl-4 m-1" pill color="light">احياء # </MDBBadge>
        <MDBBadge className="pt-2 pb-2 pr-4 pl-4 m-1" pill color="light">احياء # </MDBBadge>
        <MDBBadge className="pt-2 pb-2 pr-4 pl-4 m-1" pill color="light">احياء # </MDBBadge>
   
    </MDBContainer>
         
     </div>

    <hr style={{clear:""}}></hr>
   
    </MDBCol>
)