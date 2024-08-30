import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ImageCarousel({ deviceType }) {

  const [isPlaying, setIsPlaying] = useState('true');

  const onClick = (ev) => {
    console.log('blimey!')
   // setIsPlaying(!isPlaying);
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (

    <div className='bg-low-opacity  p-4 drop-shadow-[4px_5px_1.5px_rgba(0,0,0,1.0)]'   onClick={onClick}>

      <h2 className='font-bold text-center my-4'>Take a look at our previous work</h2>
      <div className="flex h-full w-full justify-center items-center border-4 border-b-2 border-sky-950 bg-sky-900 rounded-md">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .25"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className='w-[320px] sm:w-[500px] md:w-[600px] lg:w-[800px] xl:w-[1200px]'
        >
          <img src="../assets/condo1/balcony1.jpg" atl="A view of the ocean from a balcony"></img>
          <img src="../assets/condo1/bathroom1.jpg" atl="A picture of a very clean bathroom"></img>
          <img src="../assets/condo1/bathroom2.jpg" atl="A picture of a very clean bathroom"></img>
          <img src="../assets/condo1/bathroom3.jpg" atl="A picture of a very clean bathroom"></img>
          <img src="../assets/condo1/bedroom1.jpg" atl="A picture of a clean bedroom"></img>
          <img src="../assets/condo1/bedroom2.jpg" atl="A picture of a clean bedroom"></img>
          <img src="../assets/condo1/livingroom1.jpg" atl="A view of clean living room"></img>
          <img src="../assets/condo1/condo1.jpg" atl="A view of clean kitchen"></img>
          <img src="../assets/condo1/hall1.jpg" atl="A view of clean living room"></img>

          <img src="../assets/condo2/bathroom1.jpg" atl="A picture of a very clean bathroom"></img>
          <img src="../assets/condo2/bedroom1.jpg" atl="A picture of a clean bedroom"></img>
          <img src="../assets/condo2/bathroom2.jpg" atl="A picture of a very clean bathroom"></img>
          <img src="../assets/condo2/bedroom2.jpg" atl="A picture of a clean bedroom"></img>
          <img src="../assets/condo2/kitchen1.jpg" atl="A picture of a clean kitchen"></img>
          <div className="flex h-full w-full justify-center items-center "> <img src="../assets/condo2/livingroom1.jpg" atl="A view of clean living room"></img></div>
          <img src="../assets/condo2/livingroom2.jpg" atl="A view of clean living room"></img>
          <img src="../assets/condo2/shower1.jpg" atl="A view of clean shower"></img>
          <img src="../assets/camper1/bathroom1.jpg" atl="A picture of a very clean bathroom"></img>
          <img src="../assets/camper1/bedroom1.jpg" atl="A picture of a clean bedroom"></img>

            <div className="flex h-full w-full justify-center items-center "><img src="../assets/camper1/exterior1.jpg" atl="A picture of a cleaned camper exterior"></img></div>
           <div className="flex h-full w-full justify-center items-center "><img src="../assets/camper1/exterior2.jpg" atl="A picture of a cleaned camper exterior"></img></div>
          <img src="../assets/camper1/kitchen1.jpg" atl="A picture of a clean kitchen"></img>
          <img src="../assets/camper1/kitchen2.jpg" atl="A picture of a clean kitchen"></img>
        </Carousel>

      </div>
    </div>
  );
}

export default ImageCarousel;
