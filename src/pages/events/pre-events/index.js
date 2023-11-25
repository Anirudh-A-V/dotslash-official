import React, { useState, Fragment, useEffect } from 'react'
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import localFont from "next/font/local";
import { Dialog, Transition } from '@headlessui/react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
import { getPreEvents, urlFor } from '@/utils/sanity';


const PPNeueMontrealFont = localFont({
    src: [
        {
            path: "../../../../public/fonts/PPNeueMontreal-Book.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../../../public/fonts/PPNeueMontreal-Medium.otf",
            weight: "500",
            style: "normal",
        },
    ],
});

const PPTelegraffont = localFont({
    src: [
        {
            path: "../../../../public/fonts/PPTelegraf-Ultrabold.otf",
            weight: "800",
            style: "normal",
        },
    ]
})

const PreEventsPage = () => {
    const [eventModal, setEventModal] = useState(null);
    const [isOpen, setIsOpen] = useState(false)
    const [preEventData, setPreEventData] = useState([])
    const [loading, setLoading] = useState(true)

    function closeModal() {
        setIsOpen(false)
        setEventModal(null)
    }

    function openModal(data) {
        setEventModal(data)
        setIsOpen(true)
    }

    useEffect(() => {
        const getPreEventsData = async () => {
            const preEvents = await getPreEvents()
            setPreEventData(preEvents)
            setLoading(false)
        }
        getPreEventsData()

        return () => {
            setPreEventData([])
        }
    }, [])

    return (
        <>
            <Head>
                <title>Pre-events</title>
                <meta name="description" content="List of pre-events of DotSlash '23." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-96CQYSH4G1" />
            <Script id="google-analytics">
                {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
 
                        gtag('config', 'G-96CQYSH4G1');
                    `}
            </Script>
            <main
                className={`flex min-h-screen flex-col items-center justify-start w-full bg-black`}
            >
                <Navbar />
                <h1 className={`text-white text-4xl font-medium mt-20 mb-8 ${PPNeueMontrealFont.className}`}>PRE-EVENTS</h1>
                {
                    loading ? (
                        <div className='bg-black flex-1 justify-center items-center flex'>
                            <div className="spinner">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-col md:flex-row flex-wrap gap-8 md:gap-4 justify-center items-center md:mx-12'>
                            {preEventData.length > 0 && preEventData?.map((event, index) => (
                                <div className="w-[350px] h-full p-0 md:pr-2">
                                    <div className="w-full h-full">
                                        {/* <img
                                            className="w-full h-full object-cover"
                                            src={urlFor(event.eventPoster).url()}
                                            alt="Event Poster"
                                        /> */}
                                        <Image
                                            // className="w-4/5 h-4/5 md:w-full md:h-full"
                                            className="w-full h-full"
                                            src={urlFor(event.eventPoster).url()}
                                            alt="Event Poster"
                                            layout="responsive"
                                            width={250}
                                            height={420}
                                            objectFit="contain"
                                        />
                                    </div>
                                    <div className="mb-2 w-full p-[24px] pt-[12px] pb-[12px] justify-between flex  bg-[#090C53]">
                                        <div className="my-auto">
                                            <button className="text-[14px] lg:text-[16px] font-[500] text-[#D4DDFF]"
                                                onClick={(e) => openModal(event)}
                                            >
                                                View Details{" "}
                                            </button>
                                        </div>
                                        <div>
                                            {event.isOpen ? (
                                                <Link
                                                    className={`text-[14px] lg:text-[16px] font-medium text-[#091A61] bg-[#C7D2FF] px-[12px] py-[6px] ${PPNeueMontrealFont.className}`}
                                                    href={event.eventRegistration}
                                                    target='_blank'
                                                >
                                                    Register
                                                </Link>
                                            ) : (
                                                <span className="text-[14px] lg:text-[16px] font-medium text-[#091A61] bg-[#C7D2FF] px-[12px] py-[6px] cursor-not-allowed opacity-50">
                                                    Closed
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                }
                {eventModal && (
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-30" onClose={closeModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black/25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-4xl flex flex-col transform overflow-hidden bg-[#121212] p-4 md:p-8 text-left align-middle transition-all">
                                            <div className="flex justify-end items-center mb-4">
                                                <button
                                                    className={`text-[14px] lg:text-[16px] font-extrabold text-white ${PPTelegraffont.className}`}
                                                    onClick={closeModal}
                                                >
                                                    CLOSE{" "}
                                                </button>
                                            </div>
                                            <div className="flex flex-col lg:flex-row justify-center items-center md:items-start gap-6">
                                                <div className="w-full flex-1 flex justify-center items-center">
                                                    {/* <img
                                                        // className="w-4/5 h-4/5 md:w-full md:h-full"
                                                        className="w-full h-full"
                                                        src={urlFor(eventModal.eventPoster).url()}
                                                        alt="Event Poster"
                                                    /> */}
                                                    <Image
                                                        // className="w-4/5 h-4/5 md:w-full md:h-full"
                                                        className="w-full h-full"
                                                        src={urlFor(eventModal.eventPoster).url()}
                                                        alt="Event Poster"
                                                        layout="responsive"
                                                        width={250}
                                                        height={420}
                                                        objectFit="contain"
                                                    />
                                                </div>
                                                <div className="overflow-hidden flex flex-1 flex-col h-full justify-between items-start">
                                                    <div className="flex flex-col">
                                                        <p className={`text-[16px] lg:text-[18px] ${PPNeueMontrealFont.className} font-medium w-full text-white mb-4`}>
                                                            {eventModal.eventName}
                                                        </p>
                                                        <p className={`scroll text-sm md:text-lg overflow-auto h-[250px] md:h-[400px] font-normal text-white mb-4 whitespace-pre-line ${PPNeueMontrealFont.className}`}>
                                                            {eventModal.eventDesc ? eventModal.eventDesc : "No description available"}
                                                        </p>
                                                    </div>


                                                    <div className="flex w-full justify-end items-center mt-2">
                                                        {eventModal.isOpen ? (
                                                            <Link
                                                                className={`text-[14px] lg:text-[16px] font-medium text-[#091A61] bg-[#C7D2FF] px-[12px] py-[6px] ${PPNeueMontrealFont.className}`}
                                                                href={eventModal.eventRegistration}
                                                                target='_blank'
                                                            >
                                                                Register
                                                            </Link>
                                                        ) : (
                                                            <span className="text-[14px] lg:text-[16px] font-medium text-[#091A61] bg-[#C7D2FF] px-[12px] py-[6px] cursor-not-allowed opacity-80">
                                                                Closed
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                )}
                <div className='w-full mt-8'>
                    <Footer />
                </div>
            </main>
        </>
    )
}

export default PreEventsPage