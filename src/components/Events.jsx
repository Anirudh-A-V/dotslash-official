import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Events = ({ eventData, sectionTitle }) => {
	const [slidesToShow, setSlidesToShow] = useState(3);
	const [isOpen, setIsOpen] = useState(true)

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

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
		<div className="w-full flex flex-col">
			<div className="text-white  w-[90%] lg:w-3/4 mx-auto mb-2 p-2 justify-between items-center flex ">
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
						<div className="mb-2 w-full p-[24px] pt-[12px] pb-[12px] justify-between flex  bg-[#090C53]">
							<div className="my-auto">
								<button className="text-[14px] lg:text-[16px] font-[500] text-[#D4DDFF]"
									onClick={openModal}
								>
									View Details{" "}
								</button>
							</div>
							<div>
								<a
									href={event.eventRegistration}
									className="text-[14px] lg:text-[16px] font-[500] px-[12px] py-[6px] bg-[#C7D2FF] text-[#091A61]"
								>
									{event.eventStatus === 1 ? "Register" : "Closed"}
								</a>
							</div>
						</div>
					</div>
				))}
			</Slider>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
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
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900"
									>
										Payment successful
									</Dialog.Title>
									<div className="mt-2">
										<p className="text-sm text-gray-500">
											Your payment has been successfully submitted. We’ve sent
											you an email with all of the details of your order.
										</p>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={closeModal}
										>
											Got it, thanks!
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</div>
	);
};
export default Events;
