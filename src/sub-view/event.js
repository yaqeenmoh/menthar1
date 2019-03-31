import React from 'react';
import Pic from '../icons/other/pic1.png';

import {
  
     MDBCol, MDBRow
  } from "mdbreact";


const Event = (d) => {





  return (
    <MDBCol md="3" style={{margin:25 , marginLeft : d.margin }}>

    <div className="event-pic">
    <img src={Pic}/>
    <div className="event-content">
    <div className="row">
    <div className="col-md-8">
    <p style={{marginLeft:10}}>٣ ديسمبر‏، الساعة ‏٨:٢٤ م‏ </p>
    </div>
    <div className="col-md-4">
    <p>أخبار محلية
 </p>
    </div>
    <div className="row">
    <div style={{marginLeft:"auto",marginRight:"auto"}} className="col-md-8">
    <p>
    نتائج التوجيهي ستعلن في الخامس من الشهر الجاري بعد انعقاد المؤتمر

    </p>
    </div>
    </div>
  
    
  <a className="event-read" href="javascript:void(0);">إقرا المزيد</a>
 
    </div>
    </div>
    </div>
   

   
    </MDBCol>
  );
};


    export default Event;