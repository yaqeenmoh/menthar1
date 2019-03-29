import React from 'react';
import Facebook from '../icons/social-media/face.svg';
import Whatsapp from '../icons/social-media/whatsapp.svg';
import Uni from '../icons/other/uni.svg';
import Desc from '../icons/other/desc.png';
import {
  
     MDBCol, MDBRow
  } from "mdbreact";


const Files = (d) => {




  return (
    <MDBCol md="row">
    <div className="col-md-12">
    <div className="fileContainer">
    <div class="row">
    <div class="col-md-1">
    <ul class="horizontal-list">
      <li><img src={Facebook}/>"</li>
      <li style={{marginRight:30}}><img src={Whatsapp}/>"</li>
    </ul>

    </div>
    <div className="col-md-3 centertext">
    <input type="button" className="btn-add" value="تحميل"/>
    <p style={{color:"black"}}>186 تحميل</p>
    </div>
    <div style={{margin:0}}  className="col-md-2">
    <div class="uni-box">
    <img src={Uni} />
    </div>
    </div>

{/*  */}

<div style={{margin:0}} className="col-md-2">
    <div style={{margin:0}} class="dr-name">
    <p style={{height:10}}  class="title">
    إسم الدكتور
    </p>
    <p class="value">
    الدكتورة سهى
    </p>
    </div>
    </div>
    {/*  */}
    <div style={{margin:0}} className="col-md-2">
    <div style={{margin:0}} class="mnhaj-name">
    <p style={{height:10}} class="title">
    إسم المادة
    </p>
    <p class="value">
    كالكولاس 1
    </p>
    </div>
    </div>
    <div style={{marginTop:25}} class="col-md-2">
    <span style={{color:"black"}}>
ملخص المادة
    </span>
    <img style={{marginLeft:10}} src={Desc}/>
    </div>
    </div>
    </div>
    </div>
 
    </MDBCol>
  );
};

export default Files;