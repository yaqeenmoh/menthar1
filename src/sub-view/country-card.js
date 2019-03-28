import React from 'react';
import Shadow from '../icons/country-shadow.png';
import {
  
     MDBCol, MDBRow
  } from "mdbreact";


const CountryCard = (d) => {

const style = {
    background: "url("+d.data.url+")",
    width:273.5,
    height:50.72,
    position:"relative"
}



  return (
    <MDBCol md="2">
   
        <div style={style}>
        {/* <img className="country-shadow" src={Shadow}/> */}

        </div>

   
    </MDBCol>
  );
};


    export default CountryCard;