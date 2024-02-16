import { Mobile } from "@/config/MediaQuery";
import {
  categoryWebTemplate,
  dataTemplates,
  productWebTemplate,
  webTemplates,
} from "@/libs/WebTemplatesData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Templates = () => {
  const { isMobile, isTablet, isDesktop } = Mobile();
  const [openCategory, setOpenCategory] = useState(false);

  const handleOpenCategory = () => {
    setOpenCategory(!openCategory);
  };

  return (
    <div className="mt-20">
      {isMobile ? (
        <div className="mx-5">
          <div className="w-[100%] space-y-2">
            <h5 className="text-[#00A995] font-medium">
              {dataTemplates.subtitle}
            </h5>
            <h2 className="font-bold leading-snug text-4xl font-raleway">
              {dataTemplates.title}
            </h2>
            <p className="text-[15px] text-gray-400 w-[100%]">
              {dataTemplates.description}
            </p>
          </div>
          <div className="space-y-10 mt-10">
            {/* Category dan Product */}
            <div className="flex items-center space-x-5 whitespace-nowrap">
              <div
                onClick={handleOpenCategory}
                className="border border-gray-300 p-2.5 text-[15px] rounded-full relative cursor-pointer"
              >
                <p>All Category</p>

                <div
                  className={`${
                    openCategory ? "top-12" : " w-0 opacity-10 top-0"
                  } transition-all bg-white w-[50vw] duration-300 absolute rounded-md`}
                >
                  <ul className={`${!openCategory && "hidden"} space-y-2`}>
                    {categoryWebTemplate.map((list, idx) => (
                      <li
                        key={idx}
                        className="hover:bg-gray-200 duration-300 cursor-pointer p-3"
                      >
                        {list}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <ul className="flex space-x-5  items-center overflow-x-scroll scrollbar-hide scroll-smooth">
                {productWebTemplate.map((list, idx) => (
                  <li
                    key={idx}
                    className="border border-gray-300 rounded-full p-2.5"
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div>
            {/* List Web Templates */}
            <div className="grid grid-cols-1 gap-5">
              {webTemplates.map((list, idx) => (
                <div key={idx} className=" space-y-2">
                  <Image
                    src={require("@/assets/images/" + list.thumbnail)}
                    alt="image-web-template"
                    className="rounded-md"
                  />
                  <Link href={"/"} className="flex space-x-1 items-center">
                    <p className="text-[15px]">{list.name_product}</p>
                    <FiArrowUpRight className="text-lg" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : isTablet ? (
        <div className="mx-8">
          <div className="w-[80%] space-y-2">
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
          <div className="space-y-10 mt-10">
            {/* Category dan Product */}
            <div className="flex items-center space-x-5 whitespace-nowrap">
              <div
                onClick={handleOpenCategory}
                className="border border-gray-300 p-2.5 text-[15px] rounded-full relative cursor-pointer"
              >
                <p>All Category</p>
                <div
                  className={`${
                    openCategory ? "top-12" : " opacity-0 top-0"
                  } transition-all bg-white w-[25vw] duration-300 absolute rounded-md`}
                >
                  <ul className={`{!openCategory&&"hidden"} space-y-2`}>
                    {categoryWebTemplate.map((list, idx) => (
                      <li
                        key={idx}
                        className="hover:bg-gray-200 duration-300 cursor-pointer p-3"
                      >
                        {list}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <ul className="flex space-x-5  items-center overflow-x-scroll scrollbar-hide scroll-smooth">
                {productWebTemplate.map((list, idx) => (
                  <li
                    key={idx}
                    className="border border-gray-300 rounded-full p-2.5"
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div>
            {/* List Web Templates */}
            <div className="grid grid-cols-3 gap-5">
              {webTemplates.map((list, idx) => (
                <div key={idx} className=" space-y-2">
                  <Image
                    src={require("@/assets/images/" + list.thumbnail)}
                    alt="image-web-template"
                    className="rounded-md"
                  />
                  <Link href={"/"} className="flex space-x-1 items-center">
                    <p className="text-[15px]">{list.name_product}</p>
                    <FiArrowUpRight className="text-lg" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
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
              <div className="w-[70%]">
                <div className="h-auto p-5 space-y-10 bg-[#fafafa] rounded-md">
                  {/* Category */}
                  <div className="space-y-3">
                    <p className="text-[16px] font-semibold">Category</p>
                    <ul className="space-y-3">
                      {categoryWebTemplate.map((list, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <MdCheckBoxOutlineBlank className="text-2xl" />
                          <p className="text-[15px] text-gray-500">{list}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Industri */}
                  <div className="space-y-3">
                    <p className="text-[16px] font-semibold">Produk</p>
                    <ul className="space-y-3">
                      {productWebTemplate.map((list, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <MdCheckBoxOutlineBlank className="text-2xl" />
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
                    <Link href={"/"} className="flex space-x-1 items-center">
                      <p className="text-[15px]">{list.name_product}</p>
                      <FiArrowUpRight className="text-lg" />
                    </Link>
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
