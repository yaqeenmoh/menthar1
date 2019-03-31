import React, { Component } from "react";
// import SideMenu from 'react-sidemenu';
// import Sidebar from 'react-sliding-sidemenu'
import { SideNav, Nav } from 'react-sidenav'
import item1 from './icons/drawing.svg';
import groupIcon from './icons/return.svg';
import GalleryCard2 from './sideBarCard';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBInput } from 'mdbreact';
import conversation from './icons/conversation.svg';
import telescope from './icons/telescope (2).svg';
import Ellipse from './icons/Ellipse 9.svg';
import Group2 from './icons/Group 8312.svg';
import Book from './icons/other/book.svg'
import ArrowCircle from './icons/other/arrow-circle.png';
import {Collapse} from 'react-bootstrap'
import Innovation from './icons/other/innovation.svg';
import Videolecture from './icons/other/video-lecture.svg';
import Research from './icons/other/research.svg';
import Newspaper from './icons/other/newspaper.svg';
import Event from './icons/other/event.svg';


class RightSideBar extends Component{
isOpen = false;
isOpen2 = false;
isOpen3 = false;
	constructor(props){
super(props)
this.state = {open : false , open2 : false , open3 : false};
	}

	openMenu = ()=>{
		const app = this;
		if(!app.isOpen)
		{
			app.setState({open:true});


		}
		else{
			app.setState({open : false});
		}

		app.isOpen = !app.isOpen;
	}

	openMenu2 = ()=>{
		const app = this;
		if(!app.isOpen2)
		{
			app.setState({open2:true});


		}
		else{
			app.setState({open2 : false});
		}

		app.isOpen2 = !app.isOpen2;
	}
	openMenu3 = ()=>{
		const app = this;
		if(!app.isOpen3)
		{
			app.setState({open3:true});


		}
		else{
			app.setState({open3 : false});
		}

		app.isOpen3 = !app.isOpen3;
	}
	render (){
        return (
		
		

		<div className="sidemenu-right menu-right">
		<br/>
		<div className="row" style={{width:200 , overFlow:"hidden" , marginLeft:0 , height:50  ,backgroundColor:"#F8F8F8"  , lineHeight:3 , marginBottom:15}}>
		
		<div className="col-md-3">
		<img src={groupIcon} className="m-1"></img>
		</div>
		<div className="col-md-9">
				<p style={{color:"black"}} className="backtojo">العودة إلى جو أكادمي</p>
				
				</div>
				</div>
				<div className="row">
				<div className="col-md-4"  >
				<GalleryCard2 data={{Imgurl :conversation,text :"شبابيك"  }}/>
				</div>
				<div className="col-md-4" style={{marginRight:20}}>
				<GalleryCard2 data={{Imgurl :telescope,text :"منظار"  }}/>
				</div>
				</div>
     <div className="slideNav">
	 <div className="menu1">
	 <img src={Book} />
	 <a href="javascript:void(0);" style={{marginRight:10}}>
	 
	 الموسوعة
	 </a>
	 <a className="arrow-ref" href="javascript:void(0);" onClick={this.openMenu}><img src={ArrowCircle} style={{cursor:"pointer"}} /></a>
	<Collapse in={this.state.open}>
	 <div className="menu-container">
		 <ul>
		 <li><a href="javascript:void(0);">بلدان</a></li>
		 <li><a href="javascript:void(0);">جامعات</a></li>
		 <li><a href="javascript:void(0);">تخصصات</a></li>
		 </ul>
	 </div>
	 </Collapse>
		 </div>
		 <div className="menu2">
	 <img src={Innovation} />
	 <a href="javascript:void(0);" style={{marginRight:10}}>
	 
	 المناهج
	 </a>
	 <a className="arrow-ref" href="javascript:void(0);" onClick={this.openMenu2}><img src={ArrowCircle} style={{cursor:"pointer"}} /></a>
	<Collapse in={this.state.open2}>
	 <div className="menu-container">
		 <ul>
		 <li><a href="javascript:void(0);">دورات</a></li>
		 <li><a href="javascript:void(0);">ملفات</a></li>
		 <li><a href="javascript:void(0);">فيديوهات</a></li>
		 </ul>
	 </div>
	 </Collapse>
		 </div>

		 <div className="menu3">
	 <img src={Videolecture} />
	 <a href="javascript:void(0);" style={{marginRight:10}}>
	 
	 الأدوات
	 </a>
	 <a className="arrow-ref" href="javascript:void(0);" onClick={this.openMenu3}><img src={ArrowCircle} style={{cursor:"pointer"}} /></a>
	<Collapse in={this.state.open3}>
	 <div className="menu-container">
		 <ul>
		 <li><a href="javascript:void(0);">إحسب معدلي</a></li>
		 <li><a href="javascript:void(0);">شخصيتي</a></li>
		 </ul>
	 </div>
	 </Collapse>
		 </div>

		 <div className="other-rows" style={{marginTop:30}}>
		 
			<div>
		 <img src={Research}/>
		 <a>القبولات الجامعية-محرك البحث</a>
		 </div>
		 <div>
		 <img src={Newspaper}/>
		 <a>المدونة والأخبار</a>
		 </div>
		 <div>
		 <img src={Event}/>
		<a>الفعاليات</a>
		 </div>
		
		 
		 </div>
           </div>
			</div>)
	};
}
	
export default RightSideBar;