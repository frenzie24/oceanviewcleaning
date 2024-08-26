import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ImageCarousel({deviceType}) {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className="flex flex-row flex-wrap jusitfy-center items-center  bg-pink-500">

      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      className='lg:w-[1440px] md:w-[768px] sm:w-[240px]'>
        <div><img src="../assets/condo1/balcony1.jpg" atl="A view of the ocean from a balcony"></img></div>
        <div><img src="../assets/condo1/bathroom1.jpg" atl="A picture of a very clean bathroom"></img></div>
        <div><img src="../assets/condo1/bedroom1.jpg" atl="A picture of a clean bedroom"></img></div>
        <div><img src="../assets/condo1/livingroom1.jpg" atl="A view of clean living room"></img></div>
        <div><img src="../assets/condo1/bathroom2.jpg" atl="A picture of a very clean bathroom"></img></div>
        <div><img src="../assets/condo1/bedroom2.jpg" atl="A picture of a clean bedroom"></img></div>
        <div><img src="../assets/condo1/hall1.jpg" atl="A view of clean living room"></img></div>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
