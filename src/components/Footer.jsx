import React from 'react'
import Link from "next/link";
import localFont from "next/font/local";

const PPEditotialNewFont = localFont({
	src: [
		{
			path: "../../public/fonts/PPEditorialNew-Italic.otf",
			weight: "400",
			style: "italic",
		},
	],
});

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

const Footer = () => {
	return (
		<div className='flex flex-col w-full justify-start items-center mt-20 md:mt-10' id='contact'>
			<div className='flex flex-col justify-center items-center md:flex-row md:justify-between w-full md:w-1/2  md:mb-20'>
				<div className='flex flex-col justify-center items-center mb-14 md:mb-0'>
					<p className={`text-[32px] md:text-[49px] font-normal text-white italic ${PPEditotialNewFont.className} mb-6`}>
						much more to come
					</p>
					<p className={`text-[18px] font-normal text-white ${PPNeueMontrealFont.className} mb-2 md:mb-4`}>
						Want to sponsor us ?
					</p>
					<Link
						href="mailto:dotslashcet.cse@gmail.com"
						className={`text-[14px] font-medium text-[#090C53] ${PPNeueMontrealFont.className} bg-[#C7D2FF] flex justify-center items-center px-4 py-2`}
					>
						Get in Touch
					</Link>
				</div>
				<div className='flex flex-col justify-center items-center mb-12 md:mb-0'>
					<p className={`text-[14px] md:text-[17px] font-normal text-white ${PPNeueMontrealFont.className} mb-4 md:mb-6`}>
						Stay updated with our socials
					</p>
					<div className='flex gap-10'>
						<Link
							href={"https://www.instagram.com/dotslash.cet/"}
							target='_blank'
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
								<path d="M10.4001 2.6665H21.6001C25.8667 2.6665 29.3334 6.13317 29.3334 10.3998V21.5998C29.3334 23.6508 28.5187 25.6178 27.0684 27.0681C25.6181 28.5184 23.6511 29.3332 21.6001 29.3332H10.4001C6.13341 29.3332 2.66675 25.8665 2.66675 21.5998V10.3998C2.66675 8.34883 3.48151 6.38183 4.93179 4.93154C6.38207 3.48126 8.34907 2.6665 10.4001 2.6665ZM10.1334 5.33317C8.86037 5.33317 7.63948 5.83888 6.7393 6.73906C5.83913 7.63923 5.33341 8.86013 5.33341 10.1332V21.8665C5.33341 24.5198 7.48008 26.6665 10.1334 26.6665H21.8667C23.1398 26.6665 24.3607 26.1608 25.2609 25.2606C26.161 24.3604 26.6667 23.1395 26.6667 21.8665V10.1332C26.6667 7.47984 24.5201 5.33317 21.8667 5.33317H10.1334ZM23.0001 7.33317C23.4421 7.33317 23.866 7.50877 24.1786 7.82133C24.4912 8.13389 24.6667 8.55781 24.6667 8.99984C24.6667 9.44186 24.4912 9.86579 24.1786 10.1783C23.866 10.4909 23.4421 10.6665 23.0001 10.6665C22.5581 10.6665 22.1341 10.4909 21.8216 10.1783C21.509 9.86579 21.3334 9.44186 21.3334 8.99984C21.3334 8.55781 21.509 8.13389 21.8216 7.82133C22.1341 7.50877 22.5581 7.33317 23.0001 7.33317ZM16.0001 9.33317C17.7682 9.33317 19.4639 10.0355 20.7141 11.2858C21.9644 12.536 22.6667 14.2317 22.6667 15.9998C22.6667 17.7679 21.9644 19.4636 20.7141 20.7139C19.4639 21.9641 17.7682 22.6665 16.0001 22.6665C14.232 22.6665 12.5363 21.9641 11.286 20.7139C10.0358 19.4636 9.33341 17.7679 9.33341 15.9998C9.33341 14.2317 10.0358 12.536 11.286 11.2858C12.5363 10.0355 14.232 9.33317 16.0001 9.33317ZM16.0001 11.9998C14.9392 11.9998 13.9218 12.4213 13.1717 13.1714C12.4215 13.9216 12.0001 14.939 12.0001 15.9998C12.0001 17.0607 12.4215 18.0781 13.1717 18.8283C13.9218 19.5784 14.9392 19.9998 16.0001 19.9998C17.0609 19.9998 18.0784 19.5784 18.8285 18.8283C19.5787 18.0781 20.0001 17.0607 20.0001 15.9998C20.0001 14.939 19.5787 13.9216 18.8285 13.1714C18.0784 12.4213 17.0609 11.9998 16.0001 11.9998Z" fill="white" />
							</svg>
						</Link>
						<Link
							href={"https://x.com/dotslash_cet"}
							target='_blank'
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
								<path d="M5.38841 5.3335L14.1397 17.1L5.33325 26.6668H7.3154L15.0256 18.2908L21.2551 26.6668H27.9999L18.756 14.2385L26.9531 5.3335H24.971L17.8705 13.0474L12.1333 5.3335H5.38841ZM8.30324 6.80154H11.4018L25.0847 25.1988H21.9862L8.30324 6.80154Z" fill="white" />
							</svg>
						</Link>
						<Link
							href={"https://www.linkedin.com/company/dotslash-cse-cet/"}
							target='_blank'
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
								<path d="M25.3333 4C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333ZM24.6667 24.6667V17.6C24.6667 16.4472 24.2087 15.3416 23.3936 14.5264C22.5784 13.7113 21.4728 13.2533 20.32 13.2533C19.1867 13.2533 17.8667 13.9467 17.2267 14.9867V13.5067H13.5067V24.6667H17.2267V18.0933C17.2267 17.0667 18.0533 16.2267 19.08 16.2267C19.5751 16.2267 20.0499 16.4233 20.3999 16.7734C20.75 17.1235 20.9467 17.5983 20.9467 18.0933V24.6667H24.6667ZM9.17333 11.4133C9.76742 11.4133 10.3372 11.1773 10.7573 10.7573C11.1773 10.3372 11.4133 9.76742 11.4133 9.17333C11.4133 7.93333 10.4133 6.92 9.17333 6.92C8.57571 6.92 8.00257 7.1574 7.57999 7.57999C7.1574 8.00257 6.92 8.57571 6.92 9.17333C6.92 10.4133 7.93333 11.4133 9.17333 11.4133ZM11.0267 24.6667V13.5067H7.33333V24.6667H11.0267Z" fill="white" />
							</svg>
						</Link>
					</div>
					{/* <p className={`hidden md:block text-[14px] font-normal text-[#777777] ${PPNeueMontrealFont.className} mt-10`}>
						Dotslash 23
					</p> */}
				</div>
			</div>
			<p className={`text-[14px] md:text-[11px] font-normal text-[#777777] ${PPNeueMontrealFont.className} mb-4`}>
				© 2023 Dotslash. All rights reserved.
			</p>
		</div>
	)
}

export default Footer