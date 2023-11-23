import localFont from "next/font/local";
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
    const [windowWidth, setWindowWidth] = useState();
    const loopRef = useRef(null);

    useEffect(() => {
        if (introPlayed) {
            if (loopRef.current) {
                loopRef.current.muted = true;
                loopRef.current.autoPlay = true;
                loopRef.current.play();
            }
        }
    }, [introPlayed]);

    useEffect(() => {
        if (windowWidth) {
            window.addEventListener("resize", () => {
                setWindowWidth(() => window.innerWidth);
            });
        } else {
            setWindowWidth(() => window.innerWidth);
        }
    }, []);

    return (
        <div className="flex flex-col justify-center items-center w-full h-screen overflow-clip">
            <video
                className={`${
                    introPlayed ? "opacity-0" : ""
                } z-[1] hero_intro_vid absolute object-cover w-full duration-150 ease-in-out`}
                src={
                    windowWidth >= 768
                        ? "videos/intro.mp4"
                        : "videos/intro-portrait.mp4"
                }
                muted
                autoPlay
                playsInline
                onEnded={() => setIntroPlayed((state) => true)}
            />
            <video
                ref={loopRef}
                className="md:scale-[70%] scale-[90%] absolute object-cover w-full"
                src={
                    windowWidth >= 768
                        ? "videos/loop.mp4"
                        : "videos/loop-portrait.mp4"
                }
                muted
                playsInline
                loop
            />
            <div className="hero_intro_text absolute z-10 flex flex-col gap-4 justify-center items-center">
                <img className=" w-full" src="/hero-logo.svg" alt="hero logo" />
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
