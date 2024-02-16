import { Mobile } from "@/config/MediaQuery";
import Image from "next/image";
import React, { useState } from "react";
import WhatsappImg from "@/assets/icon/icon-whatsapp.svg";

const Whatsapp = () => {
  const { isMobile, isTablet, isDesktop } = Mobile();
  const [openMessage, setOpenMessage] = useState(false);

  const handleOpenMessage = () => {
    setOpenMessage(!openMessage);
  };
  return (
    <div>
      <Image
        onClick={handleOpenMessage}
        src={WhatsappImg}
        alt="whatsapp.svg"
        className="w-12 cursor-pointer"
      />
      {isMobile ? (
        <div
          className={`${
            openMessage ? "scale-100" : "scale-0"
          } bg-white transition-all bottom-16 ease-in-out delay-200 right-0 shadow-lg duration-300 w-72 absolute rounded-lg`}
        >
          <div className={` bg-blue-800 rounded-t-md p-5`}>
            <h2 className="text-white text-lg font-semibold">
              Halo, <br />
              ada yang bisa kami bantu dengan website anda ?
            </h2>
          </div>
          <form action="#" className="p-5">
            <div className="my-3 space-y-2">
              <label htmlFor="#" className="text-[15px]">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-[#f5f5f5] p-3 placeholder:text-[15px] text-[15px] w-full rounded-md"
              />
            </div>
            <div className="my-3 space-y-2">
              <label htmlFor="#" className="text-[15px]">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#f5f5f5] p-3 placeholder:text-[15px] text-[15px] w-full rounded-md"
              />
            </div>
            <div className="my-3 space-y-2">
              <label htmlFor="#" className="text-[15px]">
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                className="bg-[#f5f5f5] p-3 placeholder:text-[15px] text-[15px] w-full rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-800 p-3 rounded-md"
            >
              <p className="text-[16px] font-semibold">Send Message</p>
            </button>
          </form>
        </div>
      ) : isTablet ? (
        <div
          className={`${
            openMessage ? "scale-100" : "scale-0"
          } bg-white transition-all bottom-16 ease-in-out delay-200 right-0 shadow-lg duration-300 w-96 absolute rounded-lg`}
        >
          <div className={`bg-blue-800 rounded-t-md p-5`}>
            <h2 className="text-white text-lg font-semibold">
              Halo, ada yang bisa kami bantu dengan website anda ?
            </h2>
          </div>
          <form action="#" className="p-5">
            <div className="my-3 space-y-2">
              <label htmlFor="#" className="text-[15px]">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-[#f5f5f5] p-3 placeholder:text-[15px] text-[15px] w-full rounded-md"
              />
            </div>
            <div className="my-3 space-y-2">
              <label htmlFor="#" className="text-[15px]">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#f5f5f5] p-3 placeholder:text-[15px] text-[15px] w-full rounded-md"
              />
            </div>
            <div className="my-3 space-y-2">
              <label htmlFor="#" className="text-[15px]">
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                className="bg-[#f5f5f5] p-3 placeholder:text-[15px] text-[15px] w-full rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-800 p-3 rounded-md"
            >
              <p className="text-[16px] font-semibold">Send Message</p>
            </button>
          </form>
        </div>
      ) : (
        isDesktop && (
          <div
            className={`${
              openMessage ? "scale-100" : "scale-0"
            } bg-white transition-all bottom-16 ease-in-out delay-200 right-0 shadow-lg duration-300 w-96 absolute rounded-lg`}
          >
            <div className={`bg-blue-800 rounded-t-md p-5`}>
              <h2 className="text-white font-semibold text-lg">
                Halo, ada yang bisa kami bantu dengan website anda ?
              </h2>
            </div>
            <form action="#" className="p-5">
              <div className="my-3 space-y-2">
                <label htmlFor="#" className="text-[15px]">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-[#f5f5f5] p-3 placeholder:text-[15px] text-[15px] w-full rounded-md"
                />
              </div>
              <div className="my-3 space-y-2">
                <label htmlFor="#" className="text-[15px]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#f5f5f5] p-3 placeholder:text-[15px] text-[15px] w-full rounded-md"
                />
              </div>
              <div className="my-3 space-y-2">
                <label htmlFor="#" className="text-[15px]">
                  Message
                </label>
                <textarea
                  placeholder="Enter your message"
                  className="bg-[#f5f5f5] p-3 placeholder:text-[15px] text-[15px] h-20 w-full rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-800 p-3 rounded-md"
              >
                <p className="text-[16px] font-semibold">Send Message</p>
              </button>
            </form>
          </div>
        )
      )}
    </div>
  );
};

export default Whatsapp;
