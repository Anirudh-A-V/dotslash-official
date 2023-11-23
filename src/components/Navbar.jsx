import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import logo from "@/assets/images/logo.svg";
import styles from "@/styles/navbar.module.css";
import logo_title from "@/assets/images/logo-title.svg";

const PPEditotialNewFont = localFont({
	src: [
		{
			path: "../../public/fonts/PPEditorialNew-Italic.otf", // Italic font
			weight: "400",
			style: "italic",
		},
		{
			path: "../../public/fonts/PPEditorialNew-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/PPEditorialNew-UltralightItalic.otf",
			weight: "200",
			style: "italic",
		},
		{
			path: "../../public/fonts/PPEditorialNew-Ultralight.otf",
			weight: "200",
			style: "normal",
		}
	],
});

const navRoutes = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "About",
		link: "#about-us",
	},
	{
		name: "Pre Events",
		link: "#pre-events",
	},
	{
		name: "Contact",
		link: "#contact",
	}
]

const NavLinksMobile = ({ openState, setOpenState }) => {
	return (
		<div
			className={`fixed top-0 left-0 w-full sm:hidden p-8 z-[1000] h-screen bg-black `.concat(
				openState ? `${styles.opened}` : `${styles.closed}`
			)}
		>
			<div className="flex justify-between w-full mb-10 px-0 z-20  fitems-center sm:px-12">
				<Image src={logo} alt="Dotslash" />
				<button
					className="text-base text-white border-none outline-none"
					onClick={() => setOpenState(false)}
				>
					CLOSE
				</button>
			</div>

			<ul
				className={`flex z-20 flex-col font-extralight items-center sm:hidden text-center text-white gap-6 text-xl ${PPEditotialNewFont.className}`}
			>
				{navRoutes.map((route, index) => (
					<li key={index}>
						<Link href={route.link} scroll onClick={() => setOpenState(false)}>{route.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

const Navbar = () => {
	const [openLinks, setOpenLinks] = useState(false);

	return (
		<>
			<NavLinksMobile openState={openLinks} setOpenState={setOpenLinks} />
			<div className="absolute flex items-center justify-between w-full h-16 px-4 sm:h-20 z-10 sm:px-12">
				<Link href="/">
					<Image src={logo_title} alt="Dotslash" />
				</Link>
				<button
					className="text-base text-white border-none outline-none sm:hidden"
					onClick={() => setOpenLinks(true)}
				>
					MENU
				</button>

				<div
					className={`${styles.navlinks} sm:flex hidden w-3/5 items-center text-white justify-end gap-16 font-mono text-xl`}
				>
					{navRoutes.map((route, index) => (
						<Link href={route.link} key={index}>{route.name.toUpperCase()}</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default Navbar;
