import React, { Component } from "react";
// import SideMenu from 'react-sidemenu';
// import Sidebar from 'react-sliding-sidemenu'
import { SideNav, Nav } from 'react-sidenav'
import item1 from './icons/drawing.svg';
import groupIcon from './icons/return.svg';
import GalleryCard2 from './sideBarCard';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBInput } from 'mdbreact';





class RightSideBar extends Component{

	render (){
        return (
		
		

		<div className="sidemenu-right menu-right">
		<br/>
		<div className="row" style={{width:250 , overFlow:"hidden" , marginLeft:0 , height:50  ,backgroundColor:"#F8F8F8"  , lineHeight:3}}>
		
		<div className="col-md-3">
		<img src={groupIcon} className="m-1"></img>
		</div>
		<div className="col-md-9" >
				<p style={{color:"black"}}>العودة الى جو اكادمي</p>
				
				</div>
				</div>
				<GalleryCard2 data={{text:"ch"}}/>
           <SideNav className="slideNav"  defaultSelectedPath="1">
		   
            <Nav className="nav-item" id="1"  >الموسوعة
			<Nav className="nav-item" className="nav-item" id="1_1">
			
		
			 بلدان</Nav>
			<Nav id="1_2">جامعات</Nav>
			<Nav className="nav-item" id="1_3">تخصصات</Nav>

			</Nav>
        
			<Nav className="nav-item" id="2">المناهج
			<Nav className="nav-item" className="nav-item" id="2_1">
			
		
			 دورات</Nav>
			<Nav id="2_2">ملفات </Nav>
			<Nav className="nav-item" id="2_3">فيديوهات</Nav>

			</Nav>
			<Nav className="nav-item" id="3">الأدوات
			<Nav className="nav-item" className="nav-item" id="3_1">
			
		
			 احسب معدلي</Nav>
			<Nav id="3_2">شخصيتي</Nav>
			

			</Nav>
        </SideNav>
           
			</div>)
	};
}
	
export default RightSideBar;