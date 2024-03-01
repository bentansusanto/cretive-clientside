import Logo from "@/assets/images/logo-cretive-agency.svg";
import { Mobile } from "@/config/MediaQuery";
import { navData } from "@/libs/NavFootData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
        <div className="relative z-30">
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
              open
                ? "h-auto px-3 left-0 py-5 w-full"
                : " opacity-10 -left-[100vw] w-0"
            } bg-white space-y-8  absolute transition-all ease-linear duration-500`}
          >
            {navData.map((list, idx) => (
              <li
                key={idx}
                className="text-[15px] hover:text-blue-500 hover:bg-gray-100 p-3"
              >
                <Link href={list.link}>{list.page}</Link>
              </li>
            ))}
            <button className="bg-[#0049A5] w-full px-5 py-4 font-semibold text-white text-[15px] rounded-lg">
              Order Sekarang
            </button>
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
          <button className="bg-[#0049A5] px-5 py-3 text-white text-[14px] rounded-lg">
            Order Sekarang
          </button>
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
            <button className="bg-[#0049A5] px-5 py-4 text-white text-[15px] rounded-lg">
              Order Sekarang
            </button>
          </div>
        )
      )}
    </>
  );
};

export default Navbar;
