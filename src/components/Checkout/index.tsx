import { Mobile } from "@/config/MediaQuery";
import React from "react";
import { dataCheckout } from "@/libs/CheckoutData";
import { BiChevronDown } from "react-icons/bi";

const CheckoutPackage = () => {
  const { isMobile, isTablet, isDesktop } = Mobile();
  return (
    <div>
      {isMobile ? (
        <></>
      ) : isTablet ? (
        <></>
      ) : (
        isDesktop && (
          <div className="space-y-10 mt-32 mx-20">
            <div className="w-[30%] space-y-3">
              <h2 className="font-bold leading-snug text-4xl font-raleway">
                {dataCheckout.title}
              </h2>
              <p className="text-[15px] text-gray-400 w-[80%]">
                {dataCheckout.description}
              </p>
            </div>
            <div className="flex space-x-20">
              <div className="block">
                <div className="sticky top-5 bg-gray-400 w-96 h-52"></div>
              </div>
              <div className="bg-gray-200 rounded-md p-5">
                <h4 className="text-md font-semibold">Form Checkout</h4>
                <div className="mt-8 w-[40vw]">
                  <form action="#">
                    <div className="grid grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[15px]">
                          Nama
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[15px]">
                          Email
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your email"
                          className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[15px]">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your phone number"
                          className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[15px]">
                          Packages
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your package"
                          className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-300 h-[1px] w-full my-6" />
                    <div className="grid grid-cols-2 gap-5 items-center mb-5">
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[15px]">
                          Nama Perusahaan
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your company name"
                          className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[15px]">
                          Jenis industri
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your industry"
                          className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 mb-5">
                      <label htmlFor="#" className="text-[15px]">
                        Kebutuhan Website
                      </label>
                      <textarea
                        placeholder="Enter what you need in your website"
                        className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                      ></textarea>
                    </div>
                    <div className="space-y-2 mb-5">
                      <label htmlFor="#" className="text-[15px]">
                        Product Requirement Document (optional)
                      </label>
                      <input
                        type="file"
                        className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                      />
                    </div>
                    <div className="space-y-2 mb-10">
                      <label htmlFor="#" className="text-[15px]">
                        Payment Method
                      </label>
                      <div className="flex items-center space-x-5 bg-gray-100 rounded-md p-3">
                        <input
                          type="text"
                          placeholder="Select payment method"
                          className=" placeholder:text-[15px] bg-transparent text-[15px] w-full"
                        />
                        <BiChevronDown className="text-2xl" />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="flex items-center justify-between w-full text-white bg-blue-600 p-3 rounded-md"
                    >
                      <p className="text-[16px] font-semibold">Rp 599.900</p>
                      <p className="text-[16px] font-semibold">Checkout</p>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CheckoutPackage;
