import localFont from "next/font/local";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

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
    const [introPlayed, setIntroPlayed] = useState(false);
    const loopRef = useRef(null);
    useEffect(() => {
        if (introPlayed) {
            loopRef.current.muted = true;
            loopRef.current.autoPlay = true;
            loopRef.current.play();
        }
    }, [introPlayed]);

    return (
        <div className="flex flex-col justify-center items-center w-full h-screen overflow-hidden">
            <video
                className={`${
                    introPlayed ? "z-[0]" : "z-[2]"
                } hero_intro_vid absolute w-screen h-screen object-cover duration-150 ease-in-out`}
                src="videos/intro.mp4"
                muted
                autoPlay
                onEnded={() => setIntroPlayed((state) => !state)}
            />
            <video
                ref={loopRef}
                className="z-[1] hero_loop_vid scale-[70%] absolute w-screen h-screen object-cover"
                src="videos/loop.mp4"
                muted
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
