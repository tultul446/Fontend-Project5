import React from 'react'
import HeroArea from './Hero';

import ImageCardSection from './ImageCardSection'

import ThingsToDo from './ThingsToDo';
import Chillsbay from './Chillsbay';
import Carousel from './Carousel';
import Galary from './Galary';



const HomePage= () => {
  return (
    <>
     <HeroArea/>  
      <ImageCardSection/>
    <ThingsToDo/>
   <Chillsbay/>
   <Carousel/>
    <Galary/>
    </>
  )
}

export default HomePage;
