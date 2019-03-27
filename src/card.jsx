import React from 'react';
import CardLayout from './CardLayout';
import card1 from './icons/Rectangle 6036.svg'


const GalleryCard = (d) => {




  return (
    <CardLayout>

      <div className="card-layout">


         <p>{d.data.title}</p>
        <p>{d.data.age}</p> 
      
          
          
       

        {/* <span className="jr-link card-link"><i className="zmdi zmdi-image zmdi-hc-fw"/>Gallary</span>
        <span className="jr-link card-link"><i className="zmdi zmdi-railway zmdi-hc-fw"/>Route</span>
        <span className="jr-link card-link"><i className="zmdi zmdi-money zmdi-hc-fw"/>Avarage Cost</span> */}
      </div>
    </CardLayout>
  );
};

export default GalleryCard;