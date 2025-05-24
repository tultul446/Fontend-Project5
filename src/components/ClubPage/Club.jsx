import React from 'react'
import ClubHero from './ClubHero';
import FindPlace1 from './FindPlace';
import RestaurantCard from '../common/RestuarantCard';
import ClubCarousel from './ClubCarousel';

import MapPage1 from './Map';
const Club = () => {
  return (
    <div>
       <ClubHero/> 
     
     <RestaurantCard isDark title="Popular Night Clubs" api='/Data-copy.json'/>
    
     <ClubCarousel isDark/>
     {/* <NearBy/> */}
      <RestaurantCard isDark title="Bars and Night clubs near you" api='/Data-copy.json'/>

      <MapPage1/>
    </div>
  )
}

export default Club
