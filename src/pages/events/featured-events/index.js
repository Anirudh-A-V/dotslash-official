import Navbar from '@/components/Navbar'
import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import localFont from "next/font/local";

import { featuredEventsData } from '../../../assets/data/data';

const PPNeueMontrealFont = localFont({
    src: [
        {
            path: "../../../public/fonts/PPNeueMontreal-Book.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../../public/fonts/PPNeueMontreal-Medium.otf",
            weight: "500",
            style: "normal",
        },
    ],
});


const FeaturedEventsPage = () => {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-start w-full bg-black`}
        >
            <Navbar />
            <div className="w-full mt-16">
            <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className={`flex w-full justify-between items-center rounded-lg bg-black px-4 py-2 text-left text-[29px] font-medium text-white focus:outline-none ${PPNeueMontrealFont.className}`}>
                                <span>Open Source Odyssey</span>
                                <div className={`flex items-center justify-center ${open ? 'rotate-180 transform ease-out duration-300' : 'rotate-0 transform ease-in duration-200'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M28 20L16 8L4 20" stroke="white" strokeWidth="1.5" />
                                    </svg>
                                </div>
                            </Disclosure.Button>
                            <Transition
                                show={open}
                                enter="transition-opacity ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white whitespace-pre-line">
                                    {/* Image */}
                                    {/* Description */}
                                    {/* About the Speaker */}
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            </div>
        </main>
    )
}

export default FeaturedEventsPage