import React from 'react';
import CardLayout from './CardLayout';
import card1 from './icons/Rectangle 6036.svg'


const GalleryCard = () => {
  return (
    <CardLayout styleName="col-lg-6">

      <div className="card-body">
        <div className="row">
          <div className="col-sm-8">
          <img  src={card1}></img>
          </div>
          
        </div>

        {/* <span className="jr-link card-link"><i className="zmdi zmdi-image zmdi-hc-fw"/>Gallary</span>
        <span className="jr-link card-link"><i className="zmdi zmdi-railway zmdi-hc-fw"/>Route</span>
        <span className="jr-link card-link"><i className="zmdi zmdi-money zmdi-hc-fw"/>Avarage Cost</span> */}
      </div>
    </CardLayout>
  );
};

export default GalleryCard;