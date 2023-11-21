import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { eventData } from "../assets/data/data.js"
import { useState, useEffect } from 'react';

const Events = () => {
	console.log(eventData);
	const [slidesToShow, setSlidesToShow] = useState(3);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 767) {
				setSlidesToShow(1);
			} else if (window.innerWidth <= 991) {
				setSlidesToShow(2);
			} else {
				setSlidesToShow(3);
			}
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const settings = {
		infinite: false,
		dots: true,
		slidesToShow: slidesToShow,
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
					alignItems: "center",
					bottom: "-40px",	
				}}
			>
				<ul style={{ listStyle: "none", margin: "0px", marginTop: "24px", padding: "0px", justifyContent: "space-between" }}>
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
		<div className=' w-full flex flex-col'>
			<div className='text-white  w-[90%] lg:w-3/4 mx-auto p-2 justify-between items-center flex mb-2'>
				<div><h className="text-[23px] font-[500]">PRE-EVENTS</h></div>
				<div><a className="text-[16px] font-[500]">View More</a></div>
			</div>

			<Slider {...settings} className=' w-[90%] lg:w-3/4 mx-auto  '>


				{eventData.map((event, index) => (
					<div className='w-full p-0 md:pr-2 '>
						<div className='w-full h-[360px] bg-lime-200'>
							<img
								className="w-full h-full"
								src={event.eventPoster.src}
								alt="Event Poster"
							/>
						</div>
						<div className='mb-2 w-full p-[24px] pt-[12px] pb-[12px] justify-between flex  bg-[#434A66]'>
							<div className='my-auto'><button className="text-[14px] lg:text-[16px] font-[500] text-[#D4DDFF]">View Details </button></div>
							<div><a href={event.eventRegistration} className="text-[14px] lg:text-[16px] font-[500] p-[8px] bg-[#C7D2FF] text-[#091A61]">Register</a></div>
						</div>
					</div>

				))}
			</Slider>
		</div>
	)
};

export default Events