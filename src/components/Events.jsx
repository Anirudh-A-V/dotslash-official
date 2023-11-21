import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState, useEffect } from "react";
const Events = ({ eventData, sectionTitle }) => {
  // console.log(name);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setSlidesToShow(1);
    } else if (window.innerWidth <= 991) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    appendDots: (dots) => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul
          style={{
            listStyle: "none",
            margin: "0px",
            padding: "0px",
            justifyContent: "space-between",
          }}
        >
          {dots.map((dot, index) => (
            <li key={index} style={{ color: "red" }}>
              <div
                style={{
                  width: dot.props.className.includes("slick-active")
                    ? "25px"
                    : "15px",
                  height: "2px",
                  backgroundColor: dot.props.className.includes("slick-active")
                    ? "#C7D2FF"
                    : "rgba(199, 210, 255, 0.30)",
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    ),
  };

  return (
    <div className=" w-full flex flex-col">
      <div className="text-white  w-[90%] lg:w-3/4 mx-auto p-2 justify-between items-center flex ">
        <div>
          <h className=" text-xl lg:text-4xl font-[500]">{sectionTitle}</h>
        </div>
        <div>
          <a className="text-md lg:text-xl font-[500]">View More</a>
        </div>
      </div>

      <Slider {...settings} className=" w-[90%] lg:w-3/4 mx-auto  ">
        {eventData?.map((event, index) => (
          <div className="w-full p-0 md:pr-2 mb-6 ">
            <div className="w-full h-[360px] bg-lime-200">
              <img
                className="w-full h-full"
                src={event.eventPoster.src}
                alt="Event Poster"
              />
            </div>
            <div className="mb-2 w-full p-[24px] pt-[12px] pb-[12px] justify-between flex  bg-[#434A66]">
              <div className="my-auto">
                <button className="text-[16px] font-[500] text-[#D4DDFF]">
                  View Details{" "}
                </button>
              </div>
              <div>
                <a
                  href={event.eventRegistration}
                  className="text-[16px] font-[500] p-[8px] bg-[#C7D2FF] text-[#091A61]"
                >
                  {event.eventStatus === 1 ? "Register" : "Closed"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Events;
