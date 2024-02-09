import { Mobile } from "@/config/MediaQuery";
import { dataPortofolio } from "@/libs/HomeData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portofolio = () => {
  const { isMobile, isTablet, isDesktop } = Mobile();
  return (
    <div className="mt-32" id="portofolio">
      {isMobile ? (
        <div className="mx-3">
          <div className="w-[80%] space-y-3">
            <h5 className="text-[#00A995] font-medium">
              {dataPortofolio.subtitle}
            </h5>
            <h2 className="font-bold leading-snug text-3xl font-raleway">
              {dataPortofolio.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 mt-10">
            {dataPortofolio.porto.map((list, idx) => (
              <div key={idx} className="space-y-3">
                <Link href={list.link}>
                  <Image
                    src={require("@/assets/images/" + list.thumbnail)}
                    alt={list.thumbnail}
                    className="rounded-md"
                  />
                </Link>
                <p className="font-semibold text-[15px]">{list.namePorto}</p>
              </div>
            ))}
          </div>
        </div>
      ) : isTablet ? (
        <div className="mx-8">
          <div className="w-[60%] space-y-3">
            <h5 className="text-[#00A995] font-medium">
              {dataPortofolio.subtitle}
            </h5>
            <h2 className="font-bold leading-snug text-3xl font-raleway">
              {dataPortofolio.title}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12">
            {dataPortofolio.porto.map((list, idx) => (
              <div key={idx} className="space-y-3">
                <Link href={list.link}>
                  <Image
                    src={require("@/assets/images/" + list.thumbnail)}
                    alt={list.thumbnail}
                    className="rounded-md"
                  />
                </Link>
                <p className="font-semibold text-[15px]">{list.namePorto}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        isDesktop && (
          <div className="mx-20">
            <div className="w-[40%] space-y-3">
              <h5 className="text-[#00A995] font-medium">
                {dataPortofolio.subtitle}
              </h5>
              <h2 className="font-bold leading-snug text-4xl font-raleway">
                {dataPortofolio.title}
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-16">
              {dataPortofolio.porto.map((list, idx) => (
                <div key={idx} className="space-y-3">
                  <Link href={list.link}>
                    <Image
                      src={require("@/assets/images/" + list.thumbnail)}
                      alt={list.thumbnail}
                      className="rounded-md"
                    />
                  </Link>
                  <p className="font-semibold text-[15px]">{list.namePorto}</p>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Portofolio;
