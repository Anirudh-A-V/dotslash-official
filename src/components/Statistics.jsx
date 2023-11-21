import localFont from "next/font/local";
import React from "react";
import gem from '../../public/images/gem1.png'
import Image from "next/image";
import torus from '../../public/images/torus1.png'

const PPNeueMachinaFont = localFont({
    src: [
        {
            path: "../../public/fonts/PPNeueMachina-Light.otf",
            weight: "400",
            style: "normal",
        },
    ],
});

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
        }
    ],
});

const PPNeueMontrealFont = localFont({
    src: [
        {
            path: "../../public/fonts/PPNeueMontreal-Medium.otf",
            weight: "500",
            style: "normal",
        },
    ],
});

const Statistics = () => {
    return (
        <div className='flex justify-center items-center flex-col relative w-full p-6 overflow-clip mt-7'>
            <Image src={gem} alt="gem" width={66} height={66} className=" absolute top-0 left-16 " />
            <h2 className={`text-[16px] font-normal text-center text-white mb-8 ${PPNeueMontrealFont.className}`}>
                this year we bring
            </h2>
            <div className="flex flex-col justify-center items-center px-6 gap-4">
                <p className={`text-[39px] font-extralight italic text-center text-white ${PPEditotialNewFont.className}`}>
                    <span className="font-normal italic">10+</span> informals
                </p>
                <p className={`text-[39px] font-extralight italic text-center text-white ${PPEditotialNewFont.className}`}>
                    <span className="font-normal italic">8+</span> workshops
                </p>
                <p className={`text-[39px] font-extralight italic text-center text-white ${PPEditotialNewFont.className}`}>
                    <span className="font-normal italic">5+</span> pre events
                </p>
                <p className={`text-[39px] font-extralight italic text-center text-white ${PPEditotialNewFont.className}`}>
                    <span className="font-normal italic">4+</span> talk sessions
                </p>
            </div>
            <Image src={torus} alt="gem" width={150} height={150} className="absolute -right-10 bottom-44" />
        </div>
    )
}

export default Statistics