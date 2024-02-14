import { Mobile } from "@/config/MediaQuery";
import {
  categoryWebTemplate,
  dataTemplates,
  industriWebTemplate,
  webTemplates,
} from "@/libs/WebTemplatesData";
import Image from "next/image";
import React from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Templates = () => {
  const { isMobile, isTablet, isDesktop } = Mobile();
  return (
    <div className="mt-20">
      {isMobile ? (
        <></>
      ) : isTablet ? (
        <></>
      ) : (
        isDesktop && (
          <div className="mx-20">
            <div className="w-[40%] space-y-2">
              <h5 className="text-[#00A995] font-medium">
                {dataTemplates.subtitle}
              </h5>
              <h2 className="font-bold leading-snug text-4xl font-raleway">
                {dataTemplates.title}
              </h2>
              <p className="text-[15px] text-gray-400 w-[60%]">
                {dataTemplates.description}
              </p>
            </div>
            <div className="flex space-x-10 mt-10">
              {/* Filter*/}
              <div className="w-[65%]">
                <div className="h-auto p-5 space-y-10 bg-[#fafafa] rounded-md">
                  {/* Category */}
                  <div className="space-y-3">
                    <p className="text-[16px] font-semibold">Category</p>
                    <ul className="space-y-2">
                      {categoryWebTemplate.map((list, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <MdCheckBoxOutlineBlank className="text-xl" />
                          <p className="text-[15px] text-gray-500">{list}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Industri */}
                  <div className="space-y-3">
                    <p className="text-[16px] font-semibold">Industri</p>
                    <ul className="space-y-2">
                      {industriWebTemplate.map((list, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <MdCheckBoxOutlineBlank className="text-xl" />
                          <p className="text-[15px] text-gray-500">{list}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* List Web Templates */}
              <div className="grid grid-cols-3 gap-8">
                {webTemplates.map((list, idx) => (
                  <div key={idx} className=" space-y-2">
                    <Image
                      src={require("@/assets/images/" + list.thumbnail)}
                      alt="image-web-template"
                      className="rounded-md"
                    />
                    <p className="text-[15px]">{list.name_product}</p>
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

export default Templates;
