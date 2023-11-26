import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import Slider from "react-slick";
import { Dialog, Transition } from '@headlessui/react'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { urlFor } from "@/utils/sanity";

const PPTelegraffont = localFont({
	src: [
		{
			path: "../../public/fonts/PPTelegraf-Ultrabold.otf",
			weight: "800",
			style: "normal",
		},
	]
})

const PPNeueMontrealFont = localFont({
	src: [
		{
			path: "../../public/fonts/PPNeueMontreal-Book.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/PPNeueMontreal-Medium.otf",
			weight: "500",
			style: "normal",
		},
	],
});

const path = {
	"PRE EVENTS": "pre-events",
	"WORKSHOPS": "workshops",
	"INFORMALS": "informals",
	"COMPETITIONS": "competitions",
	"featured events": "featured-events",
	"DOTSLASH FOR JUNIORS": "juniors",
}
const Events = ({ eventData, sectionTitle, id }) => {


	const [slidesToShow, setSlidesToShow] = useState(3);
	const [eventModal, setEventModal] = useState(null);
	const [slidesToScroll, setSlidesToScroll] = useState(1);
	const [isOpen, setIsOpen] = useState(false)

	function closeModal() {
		setIsOpen(false)
	}

	function openModal(data) {
		setEventModal(data)
		setIsOpen(true)
	}

	const handleResize = () => {
		if (window.innerWidth <= 767) {
			setSlidesToShow(1);
			setSlidesToScroll(1);
		} else if (window.innerWidth <= 991) {
			setSlidesToShow(2);
			setSlidesToScroll(1);
		} else {
			if (eventData.length < 3) {
				setSlidesToShow(eventData.length);
				setSlidesToScroll(1);
			} else {
				setSlidesToShow(3);
				setSlidesToScroll(3);
			}
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
		slidesToScroll: slidesToScroll,
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
		<div className="w-full flex flex-col" id={id}>
			<div className="text-white  w-[90%] lg:w-3/4 mx-auto mb-2 p-2 justify-between items-center flex ">
				<div>
					<h className={` text-[23px] font-[500] ${PPNeueMontrealFont.className}`}>{sectionTitle}</h>
				</div>
				<div>
					<Link
						className={`text-base font-[500] text-[#C7D2FF] ${PPNeueMontrealFont.className}`}
						href={`/events/${path[sectionTitle]}`}
					>
						View All
					</Link>
				</div>
			</div>

			<Slider {...settings} className=" w-[90%] lg:w-3/4 mx-auto">
				{eventData?.map((event, index) => (
					<div className="w-full p-0 md:pr-2 mb-6 " key={index}>
						<div className="w-full h-full ">
							{/* <img
								className="w-full h-full object-cover"
								src={urlFor(event.eventPoster).url()}
								alt="Event Poster"
							/> */}
							<Image
								// className="w-4/5 h-4/5 md:w-full md:h-full"
								className="w-full h-full"
								src={urlFor(event.eventPoster).url()}
								alt="Event Poster"
								width={370}
								height={460}
								placeholder="blur"
								blurDataURL={event.eventPoster.asset.metadata.lqip}
							/>
						</div>
						<div className="mb-2 w-full p-[24px] pt-[12px] pb-[12px] justify-between flex  bg-[#090C53]">
							<div className="my-auto">
								<button className="text-[14px] lg:text-[16px] font-[500] text-[#D4DDFF]"
									onClick={(e) => openModal(event)}
								>
									View Details{" "}
								</button>
							</div>
							<div>
								{event.isOpen ? (
									<Link
										className={`text-[14px] lg:text-[16px] font-medium text-[#091A61] bg-[#C7D2FF] px-[12px] py-[6px] ${PPNeueMontrealFont.className}`}
										href={event.eventRegistration}
										target="_blank"
									>
										Register
									</Link>
								) : (
									<span className="text-[14px] lg:text-[16px] font-medium text-[#091A61] bg-[#C7D2FF] px-[12px] py-[6px] cursor-not-allowed opacity-50">
										Closed
									</span>
								)}
							</div>
						</div>
					</div>
				))}
			</Slider>

			{eventModal && (
				<Transition appear show={isOpen} as={Fragment}>
					<Dialog as="div" className="relative z-30" onClose={closeModal}>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<div className="fixed inset-0 bg-black/25" />
						</Transition.Child>

						<div className="fixed inset-0 overflow-y-auto">
							<div className="flex min-h-full items-center justify-center p-4 text-center">
								<Transition.Child
									as={Fragment}
									enter="ease-out duration-300"
									enterFrom="opacity-0 scale-95"
									enterTo="opacity-100 scale-100"
									leave="ease-in duration-200"
									leaveFrom="opacity-100 scale-100"
									leaveTo="opacity-0 scale-95"
								>
									<Dialog.Panel className="w-full max-w-4xl flex flex-col transform overflow-hidden bg-[#121212] p-4 md:p-8 md:pt-6 text-left align-middle transition-all">
										<div className="flex justify-end items-center mb-4">
											<button
												className={`text-[14px] lg:text-[16px] font-extrabold text-white ${PPTelegraffont.className}`}
												onClick={closeModal}
											>
												CLOSE{" "}
											</button>
										</div>
										<div className="flex flex-col lg:flex-row justify-center items-center md:items-start gap-6">
											<div className="w-full flex-1 flex justify-center items-center">
												{/* <img
													// className="w-4/5 h-4/5 md:w-full md:h-full"
													className="w-full h-full"
													src={urlFor(eventModal.eventPoster).url()}
													alt="Event Poster"
												/> */}
												<Image
													// className="w-4/5 h-4/5 md:w-full md:h-full"
													className="w-full h-full"
													src={urlFor(eventModal.eventPoster).url()}
													alt="Event Poster"
													width={404}
													height={505}
													placeholder="blur"
													blurDataURL={eventModal.eventPoster.asset.metadata.lqip}
												/>
											</div>
											<div className="overflow-hidden flex flex-1 flex-col h-full justify-between items-start">
												<div className="flex flex-col">
													<p className={`text-[16px] lg:text-[18px] ${PPNeueMontrealFont.className} font-medium w-full text-white mb-4`}>
														{eventModal.eventName}
													</p>
													<p className={`scroll text-sm md:text-lg overflow-auto h-[250px] md:h-[400px] font-normal text-white mb-4 whitespace-pre-line ${PPNeueMontrealFont.className}`}>
														{eventModal.eventDesc ? eventModal.eventDesc : "No description available"}
													</p>
												</div>


												<div className="flex w-full justify-end items-center mt-2">
													{eventModal.isOpen ? (
														<Link
															className={`text-[14px] lg:text-[16px] font-medium text-[#091A61] bg-[#C7D2FF] px-[12px] py-[6px] ${PPNeueMontrealFont.className}`}
															href={eventModal.eventRegistration}
															target="_blank"
														>
															Register
														</Link>
													) : (
														<span className="text-[14px] lg:text-[16px] font-medium text-[#091A61] bg-[#C7D2FF] px-[12px] py-[6px] cursor-not-allowed opacity-80">
															Closed
														</span>
													)}
												</div>
											</div>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</Dialog>
				</Transition>
			)}
		</div>
	);
};
export default Events;
