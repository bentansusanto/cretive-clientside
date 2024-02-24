import { Mobile } from "@/config/MediaQuery";
import Link from "next/link";
import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

interface Props {
  openStruckPayment: any;
}

const CheckoutPopUp: React.FC<Props> = ({ openStruckPayment }) => {
  const { isMobile, isTablet, isDesktop } = Mobile();
  return (
    <div className="relative">
      {isMobile ? (
        <div
          className={`${
            openStruckPayment ? "mt-52" : "opacity-0 top-0"
          } bg-white w-[100%] absolute h-auto p-5 rounded-md`}
        >
          <div className="text-center space-y-10">
            <IoCheckmarkCircle className="text-6xl text-green-600 mx-auto" />
            <div className="space-y-2">
              <p className="text-[16px] font-bold">Success Checkout</p>
              <p className="text-[15px] text-gray-400">
                Terima kasih sudah memesan jasa kami, kami akan melakukan
                memproses pesanan anda segera.
              </p>
            </div>
            <button className="bg-blue-800 px-5 py-3 text-white rounded-md">
              <Link href={"/"}>Homepage</Link>
            </button>
          </div>
        </div>
      ) : isTablet ? (
        <div
          className={`${
            openStruckPayment ? "left-1/4 mt-64" : "opacity-0 top-0"
          } bg-white w-[50vw] absolute h-auto p-5 rounded-md`}
        >
          <div className="text-center space-y-10">
            <IoCheckmarkCircle className="text-6xl text-green-600 mx-auto" />
            <div className="space-y-2">
              <p className="text-[16px] font-bold">Success Checkout</p>
              <p className="text-[15px] text-gray-400">
                Terima kasih sudah memesan jasa kami, kami akan melakukan
                memproses pesanan anda segera.
              </p>
            </div>
            <button className="bg-blue-800 px-5 py-3 text-white rounded-md">
              <Link href={"/"}>Homepage</Link>
            </button>
          </div>
        </div>
      ) : (
        isDesktop && (
          <div
            className={`${
              openStruckPayment ? "left-1/3 mt-64" : "opacity-0 top-0"
            } bg-white w-[30vw] absolute h-auto p-5 rounded-md`}
          >
            <div className="text-center space-y-10">
              <IoCheckmarkCircle className="text-6xl text-green-600 mx-auto" />
              <div className="space-y-2">
                <p className="text-[16px] font-bold">Success Checkout</p>
                <p className="text-[15px] text-gray-400">
                  Terima kasih sudah memesan jasa kami, kami akan melakukan
                  memproses pesanan anda segera.
                </p>
              </div>
              <button className="bg-blue-800 px-5 py-3 text-white rounded-md">
                <Link href={"/"}>Homepage</Link>
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CheckoutPopUp;
