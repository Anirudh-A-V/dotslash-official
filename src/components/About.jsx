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
    <div className="w-full flex flex-col justify-center items-center p-6">
      <h2 className={`text-[42px] font-normal text-center text-white ${PPEditotialNewFont.className} mb-2`}>
        Legacy is back
      </h2>
      <p className={`text-[14px] font-medium leading-[130%] text-center ${PPNeueMontrealFont.className} text-white`}>
      Dotslash is the annual technical event held by department of computer science & engineering, college of engineering trivandrum
      </p>
    </div>
  )
}

export default About