import { Mobile } from "@/config/MediaQuery";
import { dataHero } from "@/libs/HomeData";
import Image from "next/image";

const HeroSection = () => {
  const { isMobile, isTablet, isDesktop } = Mobile();
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
              <div className="p-3 rounded-md border border-[#CFCFCF]">
                <input
                  type="text"
                  placeholder="example.com"
                  className="bg-transparent placeholder:text-[15px] outline-none"
                />
              </div>
              <button className="bg-[#0049A5] px-5 py-3 text-white text-[15px] rounded-md">
                Lihat paket
              </button>
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
              <div className="p-3 rounded-md border border-[#CFCFCF] w-[50%]">
                <input
                  type="text"
                  placeholder="example.com"
                  className="bg-transparent placeholder:text-[15px] outline-none"
                />
              </div>
              <button className="bg-[#0049A5] px-5 py-3 text-white text-[15px] rounded-md">
                Lihat paket
              </button>
            </div>
          </div>
          <div>
            <Image
              src={require("@/assets/images/" + dataHero.image)}
              alt="bg-hero"
            />
          </div>
        </div>
      ) : (
        isDesktop && (
          <div className="flex items-center mx-20 mt-20 justify-between">
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
                <div className="p-3 rounded-md border border-[#CFCFCF] w-[50%]">
                  <input
                    type="text"
                    placeholder="example.com"
                    className="bg-transparent placeholder:text-[15px] outline-none w-full"
                  />
                </div>
                <button className="bg-[#0049A5] px-5 py-3 text-white text-[15px] rounded-md">
                  Lihat paket
                </button>
              </div>
            </div>
            <div>
              <Image
                src={require("@/assets/images/" + dataHero.image)}
                alt="bg-hero"
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default HeroSection;
