import localFont from "next/font/local";
import React from "react";

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

const About = () => {
  return (
    <div className="w-full flex flex-col lg:grid grid-cols-2 grid-rows-2 justify-center items-center p-6 mb-8 md:mb-0 lg:px-32 lg:py-6" id="about-us">
      <h2 className={`text-[42px] md:text-[60px] lg:text-[78px] font-normal text-center lg:text-right lg:mr-4 text-white ${PPEditotialNewFont.className} mb-2 lg:mb-0`}>
        Legacy is back
      </h2>
      <div></div>
      <div></div>
      <p className={`text-[14px] md:text-[16px] md:w-1/2 lg:text-[18px] font-medium lg:ml-4 leading-[130%] text-center ${PPNeueMontrealFont.className} text-white`}>
        Dotslash is the annual technical event held by department of computer science & engineering, college of engineering trivandrum
      </p>
    </div>
  )
}

export default About