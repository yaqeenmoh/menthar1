import React from 'react';
import CardLayout3 from './CardLayout3';
import card1 from './icons/Rectangle 6036.svg'



const GalleryCard3 = (d) => {




  return (
    <CardLayout3>

      <div className="card-layout3">


         <p>{d.data.text}</p>
         
      
          
          
       

        {/* <span className="jr-link card-link"><i className="zmdi zmdi-image zmdi-hc-fw"/>Gallary</span>
        <span className="jr-link card-link"><i className="zmdi zmdi-railway zmdi-hc-fw"/>Route</span>
        <span className="jr-link card-link"><i className="zmdi zmdi-money zmdi-hc-fw"/>Avarage Cost</span> */}
      </div>
    </CardLayout3>
  );
};

export default GalleryCard3;