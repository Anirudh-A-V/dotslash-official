import localFont from "next/font/local";
import Image from "next/image";
import React, { useState } from "react";

const PPNeueMachinaFont = localFont({
    src: [
        {
            path: "../../public/fonts/PPNeueMachina-Light.otf",
            weight: "400",
            style: "normal",
        },
    ],
});

const Hero = () => {
    const [firstTime, setFirstTime] = useState(true);
    const [loopVid, setLoopVid] = useState(false);
    return (
        <div className="flex justify-center items-center flex-col w-full h-screen overflow-hidden">
            <video
                className={
                    firstTime
                        ? "hero_intro_vid absolute z-[2] w-screen h-screen object-cover"
                        : "absolute hidden"
                }
                src="videos/intro.mp4"
                muted
                autoPlay
                onEnded={() => {
                    setFirstTime((firstTime) => !firstTime);
                    setLoopVid((loopVid) => !loopVid);
                }}
            />
            <video
                className={
                    loopVid
                        ? "hero_loop_vid scale-[70%] absolute h-full object-cover"
                        : "absolute hidden"
                }
                src="videos/loop.mp4"
                muted
                autoPlay
                loop
            />
            <div className="hero_intro_text absolute z-10 bottom-[10%] flex flex-col gap-4 justify-center items-center">
                <img
                    className="flex-shrink-0 w-full"
                    src="/hero-logo.svg"
                    alt="hero logo"
                />
                <h2
                    className={`text-center text-white font-normal text-[12px] lg:text-[16px] leading-normal tracking-[0.6em] lg:tracking-[1em]${PPNeueMachinaFont.className}`}
                >
                    ANNUAL TECHNO-CULTURAL FEST
                </h2>
            </div>
        </div>
    );
};

export default Hero;
