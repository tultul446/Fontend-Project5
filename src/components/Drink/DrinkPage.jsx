import React from 'react'
import DrinkHero from './DrinkHero'
import FindPlace from './FindPlace';

import MapPage from './Map';
import DrinkCarousel from './DrinkCarousel';

import RestaurantCard from '../common/RestuarantCard';

const DrinkPage = () => {
  return (
    <>
     <DrinkHero/> 
     <FindPlace/>
     <RestaurantCard title="Popular restuarants in Lagos"/>
    
     <DrinkCarousel/>
     {/* <NearBy/> */}
      <RestaurantCard title="Resturants nearby"/>

      <MapPage/>
    </>
  )
}

export default DrinkPage;
