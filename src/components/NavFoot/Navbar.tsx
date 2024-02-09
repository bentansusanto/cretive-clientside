import React, { useState } from "react";
import { navData } from "@/libs/NavFootData";
import { Mobile } from "@/config/MediaQuery";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo-cretive-agency.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const { isMobile, isTablet, isDesktop } = Mobile();
  const [open, setOpen] = useState(false);

  const handleOpenNav = () => {
    setOpen(!open);
  };
  return (
    <>
      {isMobile ? (
        <div className="relative">
          <div className="flex items-center justify-between px-5 py-4">
            <Link href={"/"}>
              <Image src={Logo} alt="logo-cretive" className="w-[70%]" />
            </Link>
            <div
              className={`${
                open && "rotate-180"
              } rotate-0 transition duration-500`}
            >
              {open ? (
                <IoCloseOutline
                  className="text-2xl"
                  onClick={() => setOpen(false)}
                />
              ) : (
                <HiOutlineMenuAlt3
                  className="text-2xl"
                  onClick={handleOpenNav}
                />
              )}
            </div>
          </div>
          <ul
            className={` ${
              open ? "h-auto top-16  px-3 py-5" : " opacity-10 -top-72"
            } bg-white space-y-10 w-full absolute transition-all ease-linear duration-300`}
          >
            {navData.map((list, idx) => (
              <li key={idx} className="text-[15px] hover:text-blue-500">
                <Link href={list.link}>{list.page}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : isTablet ? (
        <div className="flex items-center justify-between px-8 py-4">
          <Link href={"/"}>
            <Image src={Logo} alt="logo-cretive" className="w-[80%]" />
          </Link>
          <ul className="flex items-center space-x-8">
            {navData.map((list, idx) => (
              <li key={idx} className="text-sm hover:text-blue-500">
                <Link href={list.link}>{list.page}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        isDesktop && (
          <div className="flex items-center justify-between px-20 py-4">
            <Link href={"/"}>
              <Image src={Logo} alt="logo-cretive" className="w-[80%]" />
            </Link>
            <ul className="flex items-center space-x-10">
              {navData.map((list, idx) => (
                <li key={idx} className="text-[15px] hover:text-blue-500">
                  <Link href={list.link}>{list.page}</Link>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </>
  );
};

export default Navbar;
