import { Mobile } from "@/config/MediaQuery";
import { dataCTA } from "@/libs/HomeData";
import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";

const CTASection = () => {
  const { isMobile, isTablet, isDesktop } = Mobile();
  return (
    <div className="mt-32">
      {isMobile ? (
        <div className=" mx-3 space-y-8">
          <Image
            src={require("@/assets/images/" + dataCTA.image)}
            alt="bg-cta-section.svg"
            className="mx-auto"
          />
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="font-bold leading-snug text-3xl font-raleway">
                {dataCTA.title}
              </h2>
              <div className="space-y-4">
                {dataCTA.benefit.map((list, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <GoCheckCircle className="text-xl text-[#00A995]" />
                    <p className="text-[15px] font-semibold">{list}</p>
                  </div>
                ))}
              </div>
            </div>
            <button className="bg-[#0049A5] mt-10 px-5 py-3 text-white text-[15px] rounded-md">
              Konsultasi Sekarang
            </button>
          </div>
        </div>
      ) : isTablet ? (
        <div className="flex items-center mx-8 space-x-3">
          <Image
            src={require("@/assets/images/" + dataCTA.image)}
            alt="bg-cta-section.svg"
            className="w-[55%]"
          />
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="font-bold leading-snug text-3xl font-raleway">
                {dataCTA.title}
              </h2>
              <div className="space-y-4">
                {dataCTA.benefit.map((list, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <GoCheckCircle className="text-xl text-[#00A995]" />
                    <p className="text-[15px] font-semibold">{list}</p>
                  </div>
                ))}
              </div>
            </div>
            <button className="bg-[#0049A5] mt-10 px-5 py-3 text-white text-[15px] rounded-md">
              Konsultasi Sekarang
            </button>
          </div>
        </div>
      ) : (
        isDesktop && (
          <div className="flex items-center mx-20 space-x-5">
            <Image
              src={require("@/assets/images/" + dataCTA.image)}
              alt="bg-cta-section.svg"
            />
            <div className="space-y-8">
              <div className="space-y-3 w-[70%]">
                <h2 className="font-bold leading-snug text-4xl font-raleway">
                  {dataCTA.title}
                </h2>
                <div className="space-y-4">
                  {dataCTA.benefit.map((list, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <GoCheckCircle className="text-xl text-[#00A995]" />
                      <p className="text-[15px] font-semibold">{list}</p>
                    </div>
                  ))}
                </div>
              </div>
              <button className="bg-[#0049A5] mt-10 px-5 py-3 text-white text-[15px] rounded-md">
                Konsultasi Sekarang
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CTASection;
