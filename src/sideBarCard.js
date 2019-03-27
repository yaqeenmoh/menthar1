import React from 'react';
import CardLayout2 from './CardLayout2';
import card1 from './icons/Rectangle 6036.svg'


const GalleryCard2 = (d) => {




  return (
    <CardLayout2>

      <div className="card-layout">


         <p>{d.data.text}</p>
        {/* <p>{d.data.subject}</p> 
        <p className="style1">{d.data.readMore}</p> */}
      
          
          
       

        {/* <span className="jr-link card-link"><i className="zmdi zmdi-image zmdi-hc-fw"/>Gallary</span>
        <span className="jr-link card-link"><i className="zmdi zmdi-railway zmdi-hc-fw"/>Route</span>
        <span className="jr-link card-link"><i className="zmdi zmdi-money zmdi-hc-fw"/>Avarage Cost</span> */}
      </div>
    </CardLayout2>
  );
};

export default GalleryCard2;