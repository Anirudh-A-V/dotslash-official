import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import eventData from "../assets/data/data.js"
const Events = () => {
  const events=eventData;

  const settings = {
    infinite: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          
          
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ listStyle: "none", margin: "0px", padding: "0px" ,justifyContent:"space-between"}}>
  {dots.map((dot, index) => (
    <li key={index} style={{ color: "red" }}>
      <div
        style={{
          width: dot.props.className.includes("slick-active") ? "25px" : "15px",
          height: "2px",
          backgroundColor: dot.props.className.includes("slick-active") ? "#C7D2FF" : "rgba(199, 210, 255, 0.30)",
        }}
      />
    </li>
  ))}
</ul>
      </div>
    ),
    
        
    
  };
   
   
  
  return (
    <div className=' w-full h-[100px] flex flex-col'>
      <div className='text-white  w-[90%] mx-auto p-2 justify-between items-center flex '>
        <div><h className="text-[23px] font-[500]">EVENTS</h></div>
        <div><a className="text-[16px] font-[500]">View More</a></div>
      </div>
      <Slider {...settings} className='w-[90%] mx-auto  '>
      
      
      <div className='w-full'>
        <div className='w-full h-[360px] bg-lime-200'>

        </div>
        <div className='mb-2 w-full p-[24px] pt-[12px] pb-[12px] justify-between flex  bg-[#434A66]'>
          <div className='my-auto'><button className="text-[16px] font-[500] text-[#D4DDFF]">View Details </button></div>
          <div><button className="text-[16px] font-[500] p-[8px] bg-[#C7D2FF] text-[#091A61]">Register</button></div>
        </div>
      </div>
      <div className='w-full'>
        <div className='w-full h-[360px] bg-blue-200'>

        </div>
        <div className='mb-2 w-full p-[24px] pt-[12px] pb-[12px] justify-between flex  bg-[#434A66]'>
          <div className='my-auto'><button className="text-[16px] font-[500] text-[#D4DDFF]">View Details </button></div>
          <div><button className="text-[16px] font-[500] p-[8px] bg-[#C7D2FF] text-[#091A61]">Register</button></div>
        </div>
      </div>
      
      </Slider>
      
      
    </div>
  )
}
;

export default Events