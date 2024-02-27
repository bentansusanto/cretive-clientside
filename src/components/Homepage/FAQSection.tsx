import React, { useState } from "react";
import { Mobile } from "@/config/MediaQuery";
import { dataFAQ } from "@/libs/HomeData";
import { GoPlus } from "react-icons/go";

const FAQSection = () => {
  const { isMobile, isTablet, isDesktop } = Mobile();
  const halfIndex = Math.ceil(dataFAQ.faq.length / 2);
  const firstFAQ = dataFAQ.faq.slice(0, halfIndex);
  const secondFAQ = dataFAQ.faq.slice(halfIndex);
  const [selectFirstFAQ, setSelectFirstFAQ] = useState({});
  const [selectSecondFAQ, setSelectSecondFAQ] = useState({});
  const [openSelectFAQ, setOpenSelectFAQ] = useState(false);
  const [openSelectSecondFAQ, setOpenSelectSecondFAQ] = useState(false);

  const handleOpenFirstFAQ = (idx: number) => {
    setSelectFirstFAQ(idx);
    setOpenSelectFAQ(!openSelectFAQ);
  };
  const handleOpenSecondFAQ = (idx: number) => {
    setSelectSecondFAQ(idx);
    setOpenSelectSecondFAQ(!openSelectSecondFAQ);
  };

  return (
    <div className="mt-32" id="faq">
      {isMobile ? (
        <div className="space-y-10">
          <div className="space-y-2 text-center">
            <h5 className="text-[#00A995] font-medium">{dataFAQ.subtitle}</h5>
            <h2 className="font-bold leading-snug text-4xl font-raleway">
              {dataFAQ.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 mx-3">
            <div className="space-y-5">
              {firstFAQ.map((list, idx) => (
                <div
                  key={idx}
                  className={`${
                    openSelectFAQ && "h-auto"
                  } bg-white transition-all ease-linear duration-300 p-5`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold w-[80%] text-[14px]">
                      {list.question}
                    </p>
                    <GoPlus
                      onClick={() => handleOpenFirstFAQ(idx)}
                      className={`${
                        selectFirstFAQ === idx && !openSelectFAQ && "rotate-45"
                      } transition duration-300 text-2xl`}
                    />
                  </div>

                  <div
                    className={`${
                      selectFirstFAQ === idx && !openSelectFAQ ? "" : "hidden"
                    } mt-5`}
                  >
                    {list.answer.map((aws, idx) => (
                      <p key={idx} className="text-[14px] text-gray-400">
                        {aws}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-5">
              {secondFAQ.map((list, idx) => (
                <div
                  key={idx}
                  className={`${
                    openSelectSecondFAQ && "h-auto"
                  } bg-white transition-all ease-linear duration-300 p-5`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold w-[80%] text-[14px]">
                      {list.question}
                    </p>
                    <GoPlus
                      onClick={() => handleOpenSecondFAQ(idx)}
                      className={`${
                        selectSecondFAQ === idx &&
                        !openSelectSecondFAQ &&
                        "rotate-45"
                      } transition duration-300 text-2xl`}
                    />
                  </div>

                  <div
                    className={`${
                      selectSecondFAQ === idx && !openSelectSecondFAQ
                        ? ""
                        : "hidden"
                    } mt-5`}
                  >
                    {list.answer.map((aws, idx) => (
                      <p key={idx} className="text-[14px] text-gray-400">
                        {aws}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : isTablet ? (
        <div className="space-y-10">
          <div className="space-y-2 text-center">
            <h5 className="text-[#00A995] font-medium">{dataFAQ.subtitle}</h5>
            <h2 className="font-bold leading-snug text-4xl font-raleway">
              {dataFAQ.title}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 mx-8">
            <div className="space-y-5">
              {firstFAQ.map((list, idx) => (
                <div
                  key={idx}
                  className={`${
                    openSelectFAQ && "h-auto"
                  } bg-white transition-all ease-linear duration-300 p-5`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold w-[80%] text-[14px]">
                      {list.question}
                    </p>
                    <GoPlus
                      onClick={() => handleOpenFirstFAQ(idx)}
                      className={`${
                        selectFirstFAQ === idx && !openSelectFAQ && "rotate-45"
                      } transition duration-300 text-2xl`}
                    />
                  </div>

                  <div
                    className={`${
                      selectFirstFAQ === idx && !openSelectFAQ ? "" : "hidden"
                    } mt-5`}
                  >
                    {list.answer.map((aws, idx) => (
                      <p key={idx} className="text-[14px] text-gray-400">
                        {aws}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-5">
              {secondFAQ.map((list, idx) => (
                <div
                  key={idx}
                  className={`${
                    openSelectSecondFAQ && "h-auto"
                  } bg-white transition-all ease-linear duration-300 p-5`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold w-[80%] text-[14px]">
                      {list.question}
                    </p>
                    <GoPlus
                      onClick={() => handleOpenSecondFAQ(idx)}
                      className={`${
                        selectSecondFAQ === idx &&
                        !openSelectSecondFAQ &&
                        "rotate-45"
                      } transition duration-300 text-2xl`}
                    />
                  </div>

                  <div
                    className={`${
                      selectSecondFAQ === idx && !openSelectSecondFAQ
                        ? ""
                        : "hidden"
                    } mt-5`}
                  >
                    {list.answer.map((aws, idx) => (
                      <p key={idx} className="text-[14px] text-gray-400">
                        {aws}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        isDesktop && (
          <div className="space-y-20">
            <div className="space-y-2 text-center">
              <h5 className="text-[#00A995] font-medium">{dataFAQ.subtitle}</h5>
              <h2 className="font-bold leading-snug text-4xl font-raleway">
                {dataFAQ.title}
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-8 mx-32">
              <div className="space-y-5">
                {firstFAQ.map((list, idx) => (
                  <div
                    key={idx}
                    className={`${
                      openSelectFAQ && "h-auto"
                    } bg-white transition-all ease-linear duration-300 p-5`}
                  >
                    <div
                      onClick={() => handleOpenFirstFAQ(idx)}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <p className="font-semibold text-[15px]">
                        {list.question}
                      </p>
                      <GoPlus
                        className={`${
                          selectFirstFAQ === idx &&
                          !openSelectFAQ &&
                          "rotate-45"
                        } transition duration-300 text-2xl`}
                      />
                    </div>

                    <div
                      className={`${
                        selectFirstFAQ === idx && !openSelectFAQ ? "" : "hidden"
                      } mt-5`}
                    >
                      {list.answer.map((aws, idx) => (
                        <p key={idx} className="text-[15px] text-gray-400">
                          {aws}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-5">
                {secondFAQ.map((list, idx) => (
                  <div
                    key={idx}
                    className={`${
                      openSelectSecondFAQ && "h-auto"
                    } bg-white transition-all ease-linear duration-300 p-5`}
                  >
                    <div
                      onClick={() => handleOpenSecondFAQ(idx)}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <p className="font-semibold text-[15px]">
                        {list.question}
                      </p>
                      <GoPlus
                        className={`${
                          selectSecondFAQ === idx &&
                          !openSelectSecondFAQ &&
                          "rotate-45"
                        } transition duration-300 text-2xl`}
                      />
                    </div>

                    <div
                      className={`${
                        selectSecondFAQ === idx && !openSelectSecondFAQ
                          ? ""
                          : "hidden"
                      } mt-5`}
                    >
                      {list.answer.map((aws, idx) => (
                        <p key={idx} className="text-[15px] text-gray-400">
                          {aws}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default FAQSection;
