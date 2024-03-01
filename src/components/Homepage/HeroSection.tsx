import { Mobile } from "@/config/MediaQuery";
import checkDomain from "@/libs/CheckDomain";

import { dataHero } from "@/libs/HomeData";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { GoCheckCircle } from "react-icons/go";
import { IoIosCloseCircleOutline } from "react-icons/io";

const HeroSection = () => {
  const { isMobile, isTablet, isDesktop } = Mobile();
  const [domain, setDomain] = useState<string>("");
  const [error, setError] = useState("");
  const [availability, setAvailability] = useState<boolean | null>(null);
  const [domainError, setDomainError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckDomain = async () => {
    try {
      setLoading(true);
      const available = await checkDomain(domain);
      setAvailability(available);
    } catch (error) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  const iconAvailable =
    domain &&
    availability !== null &&
    (availability === true ? (
      <GoCheckCircle className="text-xl text-green-500" />
    ) : (
      <IoIosCloseCircleOutline className="text-xl text-red-500" />
    ));

  const messageDomainAvailable =
    !domainError &&
    domain !== null &&
    (availability === true ? (
      <p className="text-[12px] text-green-500">
        Congratulations, you can use it
      </p>
    ) : availability === false ? (
      <p className="text-[12px] text-red-500">Sorry domain unavailable</p>
    ) : (
      domainError && (
        <p className="text-[12px] text-red-500">Please refresh this website</p>
      )
    ));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setDomain(value);
    const domainPattern = /^[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-]+(\.[a-zA-Z]{2,})?$/;
    if (!domainPattern.test(value)) {
      setDomainError("Domain format is invalid");
    } else {
      setDomainError("");
    }
  };

  return (
    <div>
      {isMobile ? (
        <div className=" mx-3 mt-10 space-y-10">
          <div>
            <Image
              src={require("@/assets/images/" + dataHero.image)}
              alt="bg-hero"
            />
          </div>
          <div className="space-y-10">
            <div className="space-y-3">
              <h1 className="text-[22px] leading-snug font-raleway">
                {dataHero.title}
              </h1>
              <p className="text-[15px] text-gray-500">
                {dataHero.description}
              </p>
            </div>
            <div className="flex space-x-2">
              <div className="space-y-1">
                <div className="p-3 rounded-md border border-[#CFCFCF] w-[100%]">
                  <div className="flex items-center justify-between ">
                    <input
                      type="text"
                      value={domain}
                      onChange={handleChange}
                      placeholder="example.com"
                      className="bg-transparent placeholder:text-[14px] text-[14px] outline-none w-full"
                    />
                    {domain &&
                      (loading ? (
                        <div aria-label="Loading..." role="status">
                          <svg
                            className="animate-spin w-6 h-6 fill-slate-800"
                            viewBox="3 3 18 18"
                          >
                            <path
                              className="opacity-20"
                              d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                            ></path>
                            <path d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                          </svg>
                        </div>
                      ) : (
                        iconAvailable
                      ))}
                  </div>
                </div>
                {domainError && (
                  <p className="text-[12px] text-red-500">{domainError}</p>
                )}
                {messageDomainAvailable}
              </div>
              <div>
                <button
                  onClick={handleCheckDomain}
                  className="bg-[#0049A5] px-4 py-3 border-[#0049A5] border text-white text-[14px] rounded-md"
                >
                  Check Domain
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : isTablet ? (
        <div className="flex items-center mx-8 mt-20 justify-between">
          <div className="w-[80%] space-y-10">
            <div className="space-y-3">
              <h1 className="text-3xl leading-snug font-raleway">
                {dataHero.title}
              </h1>
              <p className="text-[15px] w-[90%] text-gray-500">
                {dataHero.description}
              </p>
            </div>
            <div className="flex space-x-2">
              <div className="space-y-1">
                <div className="p-3 rounded-md border border-[#CFCFCF] w-[100%]">
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value={domain}
                      onChange={handleChange}
                      placeholder="example.com"
                      className="bg-transparent placeholder:text-[14px] text-[14px] outline-none w-full"
                    />
                    {domain &&
                      (loading ? (
                        <div aria-label="Loading..." role="status">
                          <svg
                            className="animate-spin w-6 h-6 fill-slate-800"
                            viewBox="3 3 18 18"
                          >
                            <path
                              className="opacity-20"
                              d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                            ></path>
                            <path d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                          </svg>
                        </div>
                      ) : (
                        iconAvailable
                      ))}
                  </div>
                </div>
                {domainError && (
                  <p className="text-[12px] text-red-500">{domainError}</p>
                )}
                {messageDomainAvailable}
              </div>
              <div>
                <button
                  onClick={handleCheckDomain}
                  className="bg-[#0049A5] px-4 py-3 border-[#0049A5] border font-semibold text-white text-[14px] whitespace-nowrap rounded-md"
                >
                  Check Domain
                </button>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={require("@/assets/images/" + dataHero.image)}
              alt="bg-hero"
              className="w-[90%] ml-auto"
            />
          </div>
        </div>
      ) : (
        isDesktop && (
          <div className="flex items-center mx-20 mt-20">
            <div className="w-[50%] space-y-10">
              <div className="space-y-3">
                <h1 className="text-4xl leading-snug font-raleway">
                  {dataHero.title}
                </h1>
                <p className="text-[15px] w-[90%] text-gray-500">
                  {dataHero.description}
                </p>
              </div>
              <div className="flex space-x-2">
                <div className="space-y-1">
                  <div className="p-3.5 rounded-md border border-[#CFCFCF] w-[100%]">
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        value={domain}
                        onChange={handleChange}
                        placeholder="example.com"
                        className="bg-transparent placeholder:text-[15px] outline-none w-full"
                      />
                      {domain &&
                        (loading ? (
                          <div aria-label="Loading..." role="status">
                            <svg
                              className="animate-spin w-6 h-6 fill-slate-800"
                              viewBox="3 3 18 18"
                            >
                              <path
                                className="opacity-20"
                                d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                              ></path>
                              <path d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                            </svg>
                          </div>
                        ) : (
                          iconAvailable
                        ))}
                    </div>
                  </div>
                  {domainError && (
                    <p className="text-[13px] text-red-500">{domainError}</p>
                  )}
                  {messageDomainAvailable}
                </div>
                <div>
                  <button
                    onClick={handleCheckDomain}
                    className="bg-[#0049A5] px-5 py-4 font-semibold text-white text-[15px] rounded-md"
                  >
                    Check Domain
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Image
                src={require("@/assets/images/" + dataHero.image)}
                alt="bg-hero"
                className="w-[80%] ml-auto"
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default HeroSection;
