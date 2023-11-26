import React from "react";
import localFont from "next/font/local";

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
    <div className="w-full flex flex-col lg:flex-row lg:h-[300px] justify-center items-center p-6 mb-8 md:mb-0 lg:px-48 lg:py-6 lg:mb-20" id="about-us">
      <div className="flex justify-center items-center lg:justify-start flex-nowrap lg:items-start w-full lg:h-full lg:w-fit">
        <h2 className={`text-[42px] md:text-[60px] lg:text-[78px] font-normal flex-nowrap text-center lg:text-left lg:mr-4 text-white ${PPEditotialNewFont.className} mb-2 lg:mb-0`}
          style={{ whiteSpace: "nowrap" }}
        >
          Legacy is back
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center lg:items-baseline w-full lg:h-full ">
        <p className={`text-[14px] md:text-[16px] md:w-full lg:text-[18px] font-medium leading-[130%] text-center md:text-left ${PPNeueMontrealFont.className} text-white mt-14`}>
          Dotslash, the annual extravaganza by the College of Engineering, Trivandrum's Computer Science & Engineering Department, showcases student innovation. It includes workshops, competitions, and project exhibitions, providing hands-on experience, exposure to technologies, and networking opportunities. Evolving over the years, Dotslash builds a legacy of innovation, fostering a culture of continuous learning and skill development in the computer science community.
        </p>
      </div>
    </div>
  )
}

export default About