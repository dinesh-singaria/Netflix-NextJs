import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
import { signOut } from "next-auth/react";

import { BiSearch } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";

const Navbar = () => {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("black") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <nav
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "all 0.75s",
      }}
    >
      <div className="bg-color-black flex justify-between">
        <div className="flex items-center space-x-2 md:space-x-10">
          <Link className="" href="/">
            <Logo style="h-auto w-[100px]" />
          </Link>
          <ul className="hidden space-x-4 md:flex">
            <li className="headerLink cursor-pointer font-semibold text-white hover:text-white">
              Home
            </li>

            <li className="headerLink">TV Shows</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
          </ul>
        </div>
        <div className="flex items-center space-x-4 text-sm font-light">
          <BiSearch className="sm hidden h-7 w-7 sm:inline" />
          <p className="hidden lg:inline ">Kids</p>
          <BsBellFill className="h-6 w-6" />

          <Image
            src="/dp.png"
            alt="dp"
            width={60}
            height={60}
            className="cursor-pointer rounded w-auto h-auto w-9 "
            onClick={() => signOut()}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
