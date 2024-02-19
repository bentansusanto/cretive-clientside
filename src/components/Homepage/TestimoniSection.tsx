import { dataTestimoni } from "@/libs/HomeData";
import { Testimoni } from "@/utils/types";
import { useEffect, useRef, useState } from "react";
import { Mobile } from "../../config/MediaQuery";
import { AnimateScrolling } from "@/config/ScrollingTestimoni";

const TestimoniSection = () => {
  const { isMobile, isTablet, isDesktop } = Mobile();
  const {
    currentIndex,
    testimonials1,
    testimonials2,
    containerRef1,
    containerRef2,
  } = AnimateScrolling();

  return (
    <div className="mt-32 bg-[#000D28] w-full" id="testimoni">
      {isMobile ? (
        <div className="space-y-5 px-3">
          <div className="py-20 mx-auto text-center">
            <div className="space-y-2 ">
              <h5 className="text-[#00A995] font-medium">
                {dataTestimoni.subtitle}
              </h5>
              <h2 className="font-bold leading-snug text-4xl font-raleway text-white">
                {dataTestimoni.title}
              </h2>
            </div>
            <p className="text-gray-300 mt-3 text-[15px]">
              {dataTestimoni.description}
            </p>
            <button className="bg-[#0049A5] mt-10 px-5 py-3 text-white text-[15px] rounded-md">
              Order Sekarang
            </button>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <div ref={containerRef1} className="h-[55vh] overflow-hidden">
              <div className="space-y-4" style={{ scrollBehavior: "smooth" }}>
                {testimonials1.map((list, idx) => (
                  <div
                    key={idx}
                    className={`w-64 p-4 border rounded-md ${
                      idx === currentIndex ? " border-blue-500" : ""
                    } bg-white`}
                  >
                    <p className="text-[15px]">{list.message}</p>
                    <div className="flex items-center space-x-2">
                      <div className="space-y-1">
                        <p className="text-[15px]">{list.name}</p>
                        <p className="text-[15px] text-gray-300">
                          {list.package}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div ref={containerRef2} className="h-[55vh] overflow-hidden">
              <div className="space-y-4" style={{ scrollBehavior: "smooth" }}>
                {testimonials2.map((list, idx) => (
                  <div
                    key={idx}
                    className={`w-64 p-4 border rounded-md ${
                      idx === currentIndex ? " border-blue-500" : ""
                    } bg-white`}
                  >
                    <p className="text-[15px]">{list.message}</p>
                    <div className="flex items-center space-x-2">
                      <div className="space-y-1">
                        <p className="text-[15px]">{list.name}</p>
                        <p className="text-[15px] text-gray-300">
                          {list.package}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : isTablet ? (
        <div className="space-y-10 px-20">
          <div className="py-20 mx-auto text-center">
            <div className="space-y-2 ">
              <h5 className="text-[#00A995] font-medium">
                {dataTestimoni.subtitle}
              </h5>
              <h2 className="font-bold leading-snug text-4xl font-raleway text-white">
                {dataTestimoni.title}
              </h2>
            </div>
            <p className="text-gray-300 mt-3 text-[15px]">
              {dataTestimoni.description}
            </p>
            <button className="bg-[#0049A5] mt-10 px-5 py-3 text-white text-[15px] rounded-md">
              Order Sekarang
            </button>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <div ref={containerRef1} className="h-[55vh] overflow-y-hidden">
              <div className="space-y-4" style={{ scrollBehavior: "smooth" }}>
                {testimonials1.map((list, idx) => (
                  <div
                    key={idx}
                    className={`w-72 p-4 border rounded-md ${
                      idx === currentIndex ? " border-blue-500" : ""
                    } bg-white`}
                  >
                    <p className="text-[15px]">{list.message}</p>
                    <div className="flex items-center space-x-2">
                      <div className="space-y-1">
                        <p className="text-[15px]">{list.name}</p>
                        <p className="text-[15px] text-gray-300">
                          {list.package}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div ref={containerRef2} className="h-[55vh] overflow-y-hidden">
              <div className="space-y-4" style={{ scrollBehavior: "smooth" }}>
                {testimonials2.map((list, idx) => (
                  <div
                    key={idx}
                    className={`w-72 p-4 border rounded-md ${
                      idx === currentIndex ? " border-blue-500" : ""
                    } bg-white`}
                  >
                    <p className="text-[15px]">{list.message}</p>
                    <div className="flex items-center space-x-2">
                      <div className="space-y-1">
                        <p className="text-[15px]">{list.name}</p>
                        <p className="text-[15px] text-gray-300">
                          {list.package}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        isDesktop && (
          <div className="flex space-x-10 px-20">
            <div className="py-20">
              <div className="w-[70%] space-y-2">
                <h5 className="text-[#00A995] font-medium">
                  {dataTestimoni.subtitle}
                </h5>
                <h2 className="font-bold leading-snug text-4xl font-raleway text-white">
                  {dataTestimoni.title}
                </h2>
              </div>
              <p className="text-gray-300 mt-3 w-[70%] text-[15px]">
                {dataTestimoni.description}
              </p>
              <button className="bg-[#0049A5] mt-10 px-5 py-3 text-white text-[15px] rounded-md">
                Order Sekarang
              </button>
            </div>
            <div className="flex items-center space-x-5">
              <div ref={containerRef1} className="h-[55vh] overflow-y-hidden">
                <div className="space-y-4" style={{ scrollBehavior: "smooth" }}>
                  {testimonials1.map((list, idx) => (
                    <div
                      key={idx}
                      className={`w-64 p-4 border rounded-md ${
                        idx === currentIndex ? " border-blue-500" : ""
                      } bg-white`}
                    >
                      <p className="text-[15px]">{list.message}</p>
                      <div className="flex items-center space-x-2">
                        <div className="space-y-1">
                          <p className="text-[15px]">{list.name}</p>
                          <p className="text-[15px] text-gray-300">
                            {list.package}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div ref={containerRef2} className="h-[55vh] overflow-y-hidden">
                <div className="space-y-4" style={{ scrollBehavior: "smooth" }}>
                  {testimonials2.map((list, idx) => (
                    <div
                      key={idx}
                      className={`w-64 p-4 border rounded-md ${
                        idx === currentIndex ? " border-blue-500" : ""
                      } bg-white`}
                    >
                      <p className="text-[15px]">{list.message}</p>
                      <div className="flex items-center space-x-2">
                        <div className="space-y-1">
                          <p className="text-[15px]">{list.name}</p>
                          <p className="text-[15px] text-gray-300">
                            {list.package}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default TestimoniSection;
