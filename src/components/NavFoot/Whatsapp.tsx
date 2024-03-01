import WhatsappImg from "@/assets/icon/icon-whatsapp.svg";
import { greetingMessage } from "@/config/GreetingMessage";
import { Mobile } from "@/config/MediaQuery";
import FacebookPixel from "@/libs/FacebookPixel";
import { dataPackage } from "@/libs/HomeData";
import { DataConsultation, MaintenanceWeb, PackagesWeb } from "@/utils/types";
import Image from "next/image";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const initialValue: DataConsultation = {
  name: "",
  email: "",
  message: "",
};

const Whatsapp = () => {
  const { isMobile, isTablet, isDesktop } = Mobile();
  const [openMessage, setOpenMessage] = useState(false);
  const [openPackages, setOpenPackages] = useState(false);
  const [selectPackages, setSelectPackages] = useState<
    PackagesWeb | MaintenanceWeb | null
  >(null);
  const facebookPixel = FacebookPixel();
  const waLink = "https://wa.me";
  const numberWA = "+6288277450792";
  const greetingData = greetingMessage();
  const [data, setData] = useState(initialValue || "");

  const handleOpenPackages = () => {
    setOpenPackages(!openPackages);
  };

  const handleSelectPackages = (id: string) => {
    const packageData = dataPackage.package.find(
      (packages) => packages.id === id
    );
    const maintenanceData = dataPackage.maintenance.find(
      (maintenance) => maintenance.id === id
    );
    const foundPackages = packageData?.id ? packageData : maintenanceData;

    if (foundPackages) {
      setSelectPackages(foundPackages);
    }
    setOpenPackages(false);
  };

  const handleOpenMessage = () => {
    setOpenMessage(!openMessage);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSendMessage = (
    e: React.FormEvent<HTMLInputElement | HTMLParagraphElement>
  ) => {
    e.preventDefault();
    const namePackages = selectPackages?.namePackage;
    const { name, email, message } = data;
    const sendMessage = `${greetingData} kak, saya ingin konsultasi mengenai paket ${namePackages}.\n\n Name: ${name}\nEmail: ${email}\nPaket Website: ${namePackages}\nMessage: ${message}`;
    facebookPixel.trackLeads(data.name, data.email);
    const whatsappLink = `${waLink}/${numberWA}?text=${encodeURIComponent(
      sendMessage
    )}`;
    window.open(whatsappLink, "_blank");
    setOpenMessage(false);
    setData(initialValue || "");
  };

  const disabledButton =
    (data.name && data.email && data.message) === undefined;

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
                name="name"
                value={data.name || ""}
                onChange={handleInputChange}
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
                name="email"
                value={data.email || ""}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="bg-[#f5f5f5] p-3 placeholder:text-[15px] text-[15px] w-full rounded-md"
              />
            </div>
            <div className="my-3 space-y-2 relative">
              <label htmlFor="#" className="text-[15px]">
                Paket Website
              </label>
              <div
                onClick={handleOpenPackages}
                className="flex cursor-pointer items-center space-x-5 bg-gray-50 rounded-md p-3"
              >
                <p className="text-[15px] w-full">
                  {selectPackages
                    ? selectPackages.namePackage
                    : "Please Select Package"}
                </p>
                <BiChevronDown
                  className={` ${
                    openPackages && "rotate-180"
                  } duration-300 transition-all text-2xl`}
                />
              </div>
              <div
                className={`${
                  !openPackages && "hidden top-20"
                } bg-white rounded-md shadow-md w-full h-24 absolute top-20 transition-all ease-in-out duration-300 space-y-1 overflow-y-scroll scroll-smooth`}
              >
                {dataPackage.package.map((list, idx) => (
                  <div
                    className="cursor-pointer hover:bg-gray-100 py-3 px-3 w-full"
                    key={idx}
                    onClick={() => handleSelectPackages(list.id)}
                  >
                    <p>{list.namePackage}</p>
                  </div>
                ))}
                {dataPackage.maintenance.map((list, idx) => (
                  <div
                    className="cursor-pointer hover:bg-gray-100 py-3 px-3 w-full"
                    key={idx}
                    onClick={() => handleSelectPackages(list.id)}
                  >
                    <p>{list.namePackage}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="my-3 space-y-2">
              <label htmlFor="#" className="text-[15px]">
                Message
              </label>
              <textarea
                name="message"
                value={data.message || ""}
                onChange={handleInputChange}
                placeholder="Enter your message"
                className="bg-[#f5f5f5] p-3 placeholder:text-[15px] text-[15px] h-20 w-full rounded-md"
              />
            </div>
            <button
              type="submit"
              disabled={disabledButton}
              className="w-full text-white bg-blue-800 p-4 rounded-md"
            >
              <p
                onClick={handleSendMessage}
                className="text-[16px] font-semibold"
              >
                Send Message
              </p>
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
                name="name"
                value={data.name || ""}
                onChange={handleInputChange}
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
                name="email"
                value={data.email || ""}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="bg-[#f5f5f5] p-3 placeholder:text-[15px] text-[15px] w-full rounded-md"
              />
            </div>
            <div className="my-3 space-y-2 relative">
              <label htmlFor="#" className="text-[15px]">
                Paket Website
              </label>
              <div
                onClick={handleOpenPackages}
                className="flex cursor-pointer items-center space-x-5 bg-gray-50 rounded-md p-3"
              >
                <p className="text-[15px] w-full">
                  {selectPackages
                    ? selectPackages.namePackage
                    : "Please Select Package"}
                </p>
                <BiChevronDown
                  className={` ${
                    openPackages && "rotate-180"
                  } duration-300 transition-all text-2xl`}
                />
              </div>
              <div
                className={`${
                  !openPackages && "hidden top-20"
                } bg-white rounded-md shadow-md w-full h-24 absolute top-20 transition-all ease-in-out duration-300 space-y-1 overflow-y-scroll scroll-smooth`}
              >
                {dataPackage.package.map((list, idx) => (
                  <div
                    className="cursor-pointer hover:bg-gray-100 py-3 px-3 w-full"
                    key={idx}
                    onClick={() => handleSelectPackages(list.id)}
                  >
                    <p>{list.namePackage}</p>
                  </div>
                ))}
                {dataPackage.maintenance.map((list, idx) => (
                  <div
                    className="cursor-pointer hover:bg-gray-100 py-3 px-3 w-full"
                    key={idx}
                    onClick={() => handleSelectPackages(list.id)}
                  >
                    <p>{list.namePackage}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="my-3 space-y-2">
              <label htmlFor="#" className="text-[15px]">
                Message
              </label>
              <textarea
                name="message"
                value={data.message || ""}
                onChange={handleInputChange}
                placeholder="Enter your message"
                className="bg-[#f5f5f5] p-3 placeholder:text-[15px] text-[15px] h-20 w-full rounded-md"
              />
            </div>
            <button
              type="submit"
              disabled={disabledButton}
              className="w-full text-white bg-blue-800 p-4 rounded-md"
            >
              <p
                onClick={handleSendMessage}
                className="text-[16px] font-semibold"
              >
                Send Message
              </p>
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
                  name="name"
                  value={data.name || ""}
                  onChange={handleInputChange}
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
                  name="email"
                  value={data.email || ""}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="bg-[#f5f5f5] p-3 placeholder:text-[15px] text-[15px] w-full rounded-md"
                />
              </div>
              <div className="my-3 space-y-2 relative">
                <label htmlFor="#" className="text-[15px]">
                  Paket Website
                </label>
                <div
                  onClick={handleOpenPackages}
                  className="flex cursor-pointer items-center space-x-5 bg-gray-50 rounded-md p-3"
                >
                  <p className="text-[15px] w-full">
                    {selectPackages
                      ? selectPackages.namePackage
                      : "Please Select Package"}
                  </p>
                  <BiChevronDown
                    className={` ${
                      openPackages && "rotate-180"
                    } duration-300 transition-all text-2xl`}
                  />
                </div>
                <div
                  className={`${
                    !openPackages && "hidden top-20"
                  } bg-white rounded-md shadow-md w-full h-24 absolute top-20 transition-all ease-in-out duration-300 space-y-1 overflow-y-scroll scroll-smooth`}
                >
                  {dataPackage.package.map((list, idx) => (
                    <div
                      className="cursor-pointer hover:bg-gray-100 py-3 px-3 w-full"
                      key={idx}
                      onClick={() => handleSelectPackages(list.id)}
                    >
                      <p>{list.namePackage}</p>
                    </div>
                  ))}
                  {dataPackage.maintenance.map((list, idx) => (
                    <div
                      className="cursor-pointer hover:bg-gray-100 py-3 px-3 w-full"
                      key={idx}
                      onClick={() => handleSelectPackages(list.id)}
                    >
                      <p>{list.namePackage}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="my-3 space-y-2">
                <label htmlFor="#" className="text-[15px]">
                  Message
                </label>
                <textarea
                  name="message"
                  value={data.message || ""}
                  onChange={handleInputChange}
                  placeholder="Enter your message"
                  className="bg-[#f5f5f5] p-3 placeholder:text-[15px] text-[15px] h-20 w-full rounded-md"
                />
              </div>
              <button
                type="submit"
                disabled={disabledButton}
                className="w-full text-white bg-blue-800 p-4 rounded-md"
              >
                <p
                  onClick={handleSendMessage}
                  className="text-[16px] font-semibold"
                >
                  Send Message
                </p>
              </button>
            </form>
          </div>
        )
      )}
    </div>
  );
};

export default Whatsapp;
