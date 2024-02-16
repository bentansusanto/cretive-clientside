import { Mobile } from "@/config/MediaQuery";
import { dataAbout } from "@/libs/HomeData";
import Image from "next/image";

const AboutSection = () => {
  const { isMobile, isTablet, isDesktop } = Mobile();
  return (
    <div className="mt-32" id="why-choose-us">
      {isMobile ? (
        <div className="mx-3">
          <div className="space-y-5">
            <div className=" space-y-2">
              <h5 className="text-[#00A995] font-medium">
                {dataAbout.subtitle}
              </h5>
              <h2 className="font-bold leading-snug text-[24px] font-raleway">
                {dataAbout.title}
              </h2>
            </div>
            <p className="text-[15px] text-gray-400">{dataAbout.description}</p>
          </div>
          {/* List Services */}
          <div className="grid grid-cols-1 gap-5 mt-10">
            {dataAbout.service.map((list, idx) => (
              <div key={idx} className="bg-[#EEEEEE] space-y-4 p-5">
                <Image
                  src={require("@/assets/icon/" + list.icon)}
                  alt={list.icon}
                />
                <div className="space-y-2">
                  <p className="font-semibold text-[15px]">
                    {list.nameService}
                  </p>
                  <p className="text-[15px] text-gray-500">{list.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : isTablet ? (
        <div className="mx-8">
          <div className="flex items-end justify-between">
            <div className="w-[40%] space-y-2">
              <h5 className="text-[#00A995] text-[15px] font-medium">
                {dataAbout.subtitle}
              </h5>
              <h2 className="font-bold leading-snug text-2xl font-raleway">
                {dataAbout.title}
              </h2>
            </div>
            <p className="text-[15px] w-[50%] text-[#8a8a8a]">
              {dataAbout.description}
            </p>
          </div>
          {/* List Services */}
          <div className="grid grid-cols-2 gap-8 mt-12">
            {dataAbout.service.map((list, idx) => (
              <div key={idx} className="bg-[#EEEEEE] space-y-4 p-5">
                <Image
                  src={require("@/assets/icon/" + list.icon)}
                  alt={list.icon}
                />
                <div className="space-y-2">
                  <p className="font-semibold text-[15px]">
                    {list.nameService}
                  </p>
                  <p className="text-[15px] text-gray-400">{list.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        isDesktop && (
          <div className="mx-20">
            <div className="flex items-end justify-between">
              <div className="w-[40%] space-y-3">
                <h5 className="text-[#00A995] font-medium">
                  {dataAbout.subtitle}
                </h5>
                <h2 className="font-bold leading-snug text-4xl font-raleway">
                  {dataAbout.title}
                </h2>
              </div>
              <p className="text-[15px] w-[40%] text-[#8a8a8a]">
                {dataAbout.description}
              </p>
            </div>
            {/* List Services */}
            <div className="grid grid-cols-4 gap-8 mt-16">
              {dataAbout.service.map((list, idx) => (
                <div key={idx} className="bg-gray-50 space-y-4 p-5">
                  <Image
                    src={require("@/assets/icon/" + list.icon)}
                    alt={list.icon}
                  />
                  <div className="space-y-2">
                    <p className="font-semibold text-[15px]">
                      {list.nameService}
                    </p>
                    <p className="text-[15px] text-gray-400">{list.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default AboutSection;
