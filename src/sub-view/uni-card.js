import React from 'react';
import CardLayout from '../CardLayout';
import {
  
     MDBCol, MDBRow
  } from "mdbreact";


const UniCard = (d) => {




  return (
    <MDBCol md="2" className="uni-col" >
    <CardLayout>

      <div className="align-right">


       <img src={d.data.imgUrl}/>
       <p className="uni-title">{d.data.title}</p>
       <pre className="uni-number">  <span>تخصص </span><span>{d.data.number}</span></pre>
      
          
          
       

        {/* <span className="jr-link card-link"><i className="zmdi zmdi-image zmdi-hc-fw"/>Gallary</span>
        <span className="jr-link card-link"><i className="zmdi zmdi-railway zmdi-hc-fw"/>Route</span>
        <span className="jr-link card-link"><i className="zmdi zmdi-money zmdi-hc-fw"/>Avarage Cost</span> */}
      </div>
    </CardLayout>
    </MDBCol>
  );
};

export default UniCard;