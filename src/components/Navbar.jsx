import React, { useState } from "react";
import logo_title from "@/assets/images/logo-title.svg";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";
import styles from "@/styles/navbar.module.css";
import Link from "next/link";

const NavLinksMobile = ({ openState, setOpenState }) => {
  return (
    <div
      className={`absolute ${styles.navLinksMobile} left-0 sm:hidden `.concat(
        openState ? `${styles.opened}` : `${styles.closed}`
      )}
    >
      <div className="flex justify-between w-screen h-16 px-4 fitems-center sm:px-12">
        <Image src={logo} alt="Dotslash" />
        <button
          className="text-base text-white border-none outline-none"
          onClick={() => setOpenState(false)}
        >
          CLOSE
        </button>
      </div>

      <ul
        className={`flex flex-col items-center sm:hidden ${styles.links} px-8 py-8 text-xl`}
      >
        <li>
          <Link href={"#about-us"}> About Us</Link>
        </li>
        <li>
          <Link href={"#pre-events"}>Pre Events</Link>
        </li>
        <li>
          <Link href={"#workshops"}>Workshops</Link>
        </li>
        <li>
          <Link href={"#competitions"}>Competitions</Link>
        </li>
        <li>
          <Link href={"#team"}>Team</Link>
        </li>
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

      <NavLinksMobile openState={openLinks} setOpenState={setOpenLinks} />

      <div
        className={`${styles.navlinks} sm:flex hidden w-3/5 items-center text-white justify-between font-mono text-xl`}
      >
        <Link href={"#"}>HOME</Link>
        <Link href={"#events"}>EVENTS</Link>
        <Link href={"#about-us"}>ABOUT</Link>
        <Link href={"#contact"}>CONTACT</Link>
      </div>
    </div>
  );
};

export default Navbar;
