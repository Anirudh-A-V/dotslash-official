import React, { useState } from "react";
import logo_title from "@/assets/images/logo-title.svg";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";
import styles from "@/styles/navbar.module.css";
import Link from "next/link";
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

const NavLinksMobile = ({ openState, setOpenState }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full sm:hidden p-8 z-[1000] h-screen bg-black `.concat(
        openState ? `${styles.opened}` : `${styles.closed}`
      )}
    >
      <div className="flex justify-between w-full mb-10 px-0 z-20  fitems-center sm:px-12">
        <Image src={logo} alt="Dotslash" />
        <button
          className="text-base text-white border-none outline-none"
          onClick={() => setOpenState(false)}
        >
          CLOSE
        </button>
      </div>

      <ul
        className={`flex z-20 flex-col items-center sm:hidden text-center text-white gap-6 text-xl ${PPEditotialNewFont.className}`}
      >
        <li>
          <Link href={"#about-us"}>Home</Link>
        </li>
        <li>
          <Link href={"#about-us"}> About Us</Link>
        </li>
        <li>
          <Link href={"#pre-events"}>Pre Events</Link>
        </li>
        {/* <li>
          <Link href={"#workshops"}>Workshops</Link>
        </li>
        <li>
          <Link href={"#competitions"}>Competitions</Link>
        </li>
        <li>
          <Link href={"#team"}>Team</Link>
        </li> */}
        <li>
          <Link href={"#contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  return (
    <>
      <NavLinksMobile openState={openLinks} setOpenState={setOpenLinks} />
      <div className="absolute flex items-center justify-between w-full h-16 px-4 sm:h-20 z-10 sm:px-12">
        <Link href="/">
          <Image src={logo_title} alt="Dotslash" />
        </Link>
        <button
          className="text-base text-white border-none outline-none sm:hidden"
          onClick={() => setOpenLinks(true)}
        >
          MENU
        </button>


        <div
          className={`${styles.navlinks} sm:flex hidden w-3/5 items-center text-white justify-end gap-16 font-mono text-xl`}
        >
          <Link href={"#"}>HOME</Link>
          <Link href={"#events"}>PREEVENTS</Link>
          {/* <Link href={"#events"}>WORKSHOPS</Link>
        <Link href={"#events"}>COMPETIONS</Link> */}
          <Link href={"#about-us"}>ABOUT</Link>
          <Link href={"#contact"}>CONTACT</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
