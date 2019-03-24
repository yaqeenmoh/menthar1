import React from 'react'

import { MDBTable, MDBTableBody, MDBTableHead,MDBContainer,MDBRow,MDBIcon, MDBCol } from 'mdbreact';
// import playstore from './icone-play-store.png'
// import appstore from './icon-app-store.png'
const Footer = props => {
  return (
      <div>
    <MDBTable className="pl-2 text-center unique-color-dark white-text"  borderless>

      <MDBTableHead>
        <tr>
        <th>من نحن</th>
            <th>من نحن</th>
            
            <th>الدعم</th>
            <th>روابط سريعه</th> 
            
   
        
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
        <td>جروبات جو اكاديمي</td>
    <td>دبلومات ودورات</td>
     <td>مدارس وجامعات</td>
     <td> بنك الاسئلة</td>  
        </tr>
        <tr>
        <td>جروبات جو اكاديمي</td>
            <td>دبلومات ودورات</td>
            <td>مدارس وجامعات</td>
            <td> بنك الاسئلة</td>
           
        </tr>
        <tr>
        <td> بنك الاسئلة</td> 
            <td>جروبات جو اكاديمي</td>
             
            <td>دبلومات ودورات</td>
            <td>مدارس وجامعات</td>  
        </tr>
        <tr>
            <td>جروبات جو اكاديمي</td>
            <td>دبلومات ودورات</td>
            <td>مدارس وجامعات</td>
            <td> بنك الاسئلة</td>  
            
        </tr>
        <tr>
                {/* <td ><a href="#"><img className="m-2" src={playstore}></img></a> </td>
                 <td><a href="#"> <img height="59px" width="200px" src={appstore}></img></a></td> */}
                <td>مدارس وجامعات</td>
                <td> بنك الاسئلة</td>  
            
        </tr>

        <tr>
            <td>
            
            </td>
            <div> 
                 <MDBRow className="m-3">
                 <MDBCol >
             <MDBIcon className="p-2" fab size="2x" icon="instagram" />
             <MDBIcon  className="p-2" fab  size="2x" icon="facebook-f" />
             <MDBIcon  className="p-2" fab  size="2x" icon="twitter" />
             <MDBIcon  className="p-2" fab  size="2x" icon="youtube" />
             <MDBIcon  className="p-2" fab  size="2x" icon="whatsapp" />
             <MDBIcon  className="p-2" far  size="2x" icon="envelope" />
             </MDBCol>
             </MDBRow>
           
            </div>
        </tr>
      </MDBTableBody>
    </MDBTable>

    </div>
  );

  
}

export default Footer;
