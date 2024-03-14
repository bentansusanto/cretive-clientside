import { rupiah } from "@/config/Currency";
import { Mobile } from "@/config/MediaQuery";
import { dataPackage } from "@/libs/HomeData";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { GoCheckCircle } from "react-icons/go";

const PackagesSection = () => {
  const { isMobile, isTablet, isDesktop } = Mobile();
  const [openPackage, setOpenPackage] = useState(false);
  const router = useRouter();

  const handleRoute = (id: string) => {
    router.push(`/checkout?productId=${id}`);
  };

  const handleOpenPackage = () => {
    setOpenPackage(!openPackage);
  };

  return (
    <div className="mt-32" id="package">
      {isMobile ? (
        <div>
          <div className="space-y-3 text-center mx-auto">
            <h5 className="text-[#00A995] font-medium">
              {dataPackage.subtitle}
            </h5>
            <h2 className="font-bold leading-snug text-3xl font-raleway">
              {dataPackage.title}
            </h2>
          </div>
          <div className="flex items-center mt-5 justify-center space-x-5">
            <p className="text-[15px]">Paket Website</p>
            <div className="flex items-center justify-center">
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    onClick={handleOpenPackage}
                    id="toggleB"
                    className="sr-only"
                  />
                  <div className="block bg-gray-200 w-14 h-8 rounded-full" />
                  <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition" />
                </div>
              </label>
            </div>
            <p className="text-[15px]">Paket Maintenance</p>
          </div>
          {!openPackage ? (
            <div className="grid grid-cols-1 items-center justify-center mt-12 mx-3 gap-5">
              {dataPackage.package.map((list, idx) => (
                <div
                  key={idx}
                  className="border border-[#D3D3D3] p-5 rounded-md space-y-5"
                >
                  <p className="text-[15px] font-semibold">
                    {list.namePackage}
                  </p>
                  <div className="space-y-2">
                      <h4 className="text-red-500 line-through animate-pulse">
                        {rupiah(list.beforeprice)}
                      </h4>
                      <h4 className="text-2xl font-semibold text-gray-700">
                        {" "}
                        {list.namePackage === "Web Application" && (
                          <span className="text-lg">Mulai </span>
                        )}
                        {rupiah(list.price)}
                      </h4>
                    </div>
                  <div className="space-y-3">
                    {list.benefit.map((list, idx) => (
                      <div key={idx} className="flex space-x-3">
                        <GoCheckCircle className="text-xl text-[#00A995]" />
                        <p className="text-[15px]">{list}</p>
                      </div>
                    ))}
                  </div>
                  {list.namePackage === "Web Application" ? (
                    <button
                      onClick={() => handleRoute(list.id)}
                      className="bg-[#0049A5] p-4 font-semibold w-full rounded-md text-white"
                    >
                      Konsultasi Sekarang
                    </button>
                  ) : (
                    <button className="bg-[#0049A5] p-4 font-semibold w-full rounded-md text-white">
                      <Link href={list.link}>Beli Sekarang</Link>
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 items-center justify-center mt-12 mx-3 gap-5">
              {dataPackage.maintenance.map((list, idx) => (
                <div
                  key={idx}
                  className="border border-[#D3D3D3] p-5 rounded-md space-y-5"
                >
                  <p className="text-[15px] font-semibold">
                    {list.namePackage}
                  </p>
                  <h4 className="text-2xl font-semibold text-black">
                    {rupiah(list.price)}
                  </h4>
                  <div className="space-y-3">
                    {list.benefit.map((list, idx) => (
                      <div key={idx} className="flex space-x-3">
                        <GoCheckCircle className="text-xl text-[#00A995]" />
                        <p className="text-[15px]">{list}</p>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => handleRoute(list.id)}
                    className="bg-blue-800 p-4 font-semibold w-full rounded-md text-white"
                  >
                    Beli Sekarang
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : isTablet ? (
        <div>
          <div className="w-[70%] space-y-3 text-center mx-auto">
            <h5 className="text-[#00A995] font-medium">
              {dataPackage.subtitle}
            </h5>
            <h2 className="font-bold leading-snug text-4xl font-raleway">
              {dataPackage.title}
            </h2>
          </div>
          <div className="flex items-center mt-5 justify-center space-x-5">
            <p className="text-[15px]">Paket Website</p>
            <div className="flex items-center justify-center">
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    onClick={handleOpenPackage}
                    id="toggleB"
                    className="sr-only"
                  />
                  <div className="block bg-gray-200 w-14 h-8 rounded-full" />
                  <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition" />
                </div>
              </label>
            </div>
            <p className="text-[15px]">Paket Maintenance</p>
          </div>
          {!openPackage ? (
            <div className="grid grid-cols-2 items-center justify-center mt-12 mx-8 gap-8">
              {dataPackage.package.map((list, idx) => (
                <div
                  key={idx}
                  className="border border-[#D3D3D3] p-5 rounded-md space-y-5"
                >
                  <p className="text-[15px] font-semibold">
                    {list.namePackage}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-red-500 line-through animate-pulse">
                      {rupiah(list.beforeprice)}
                    </h4>
                    <h4 className="text-2xl font-semibold text-gray-700">
                      {" "}
                      {list.namePackage === "Web Application" && (
                        <span className="text-lg">Mulai </span>
                      )}
                      {rupiah(list.price)}
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {list.benefit.map((list, idx) => (
                      <div key={idx} className="flex space-x-3">
                        <GoCheckCircle className="text-xl text-[#00A995]" />
                        <p className="text-[15px]">{list}</p>
                      </div>
                    ))}
                  </div>
                  {list.namePackage === "Web Application" ? (
                    <button
                      onClick={() => handleRoute(list.id)}
                      className="bg-[#0049A5] p-4 font-semibold w-full rounded-md text-white"
                    >
                      Konsultasi Sekarang
                    </button>
                  ) : (
                    <button className="bg-[#0049A5] p-4 font-semibold w-full rounded-md text-white">
                      <Link href={list.link}>Beli Sekarang</Link>
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 items-center justify-center mt-12 mx-8 gap-8">
              {dataPackage.maintenance.map((list, idx) => (
                <div
                  key={idx}
                  className="border border-[#D3D3D3] p-5 rounded-md space-y-5"
                >
                  <p className="text-[15px] font-semibold">
                    {list.namePackage}
                  </p>
                  <h4 className="text-2xl font-semibold text-black">
                    {rupiah(list.price)}
                  </h4>
                  <div className="space-y-3">
                    {list.benefit.map((list, idx) => (
                      <div key={idx} className="flex space-x-3">
                        <GoCheckCircle className="text-xl text-[#00A995]" />
                        <p className="text-[15px]">{list}</p>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => handleRoute(list.id)}
                    className="bg-[#0049A5] p-4 font-semibold w-full rounded-md text-white"
                  >
                    Beli Sekarang
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        isDesktop && (
          <div>
            <div className="w-[30%] space-y-3 text-center mx-auto">
              <h5 className="text-[#00A995] font-medium">
                {dataPackage.subtitle}
              </h5>
              <h2 className="font-bold leading-snug text-4xl font-raleway">
                {dataPackage.title}
              </h2>
            </div>
            <div className="flex items-center mt-5 justify-center space-x-5">
              <p className="text-[15px]">Paket Website</p>
              <div className="flex items-center justify-center">
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      onClick={handleOpenPackage}
                      type="checkbox"
                      id="toggleB"
                      className="sr-only"
                    />
                    <div className="block bg-gray-200 w-14 h-8 rounded-full" />
                    <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition" />
                  </div>
                </label>
              </div>
              <p className="text-[15px]">Paket Maintenance</p>
            </div>
            {!openPackage ? (
              // Paket
              <div className="flex items-center justify-center mt-16 space-x-10">
                {dataPackage.package.map((list, idx) => (
                  <div
                    key={idx}
                    className="border border-[#D3D3D3] w-[25%] p-5 rounded-md space-y-5"
                  >
                    <p className="text-[15px] font-semibold">
                      {list.namePackage}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-red-500 line-through animate-pulse">
                        {rupiah(list.beforeprice)}
                      </h4>
                      <h4 className="text-2xl font-semibold text-gray-700">
                        {" "}
                        {list.namePackage === "Web Application" && (
                          <span className="text-lg">Mulai </span>
                        )}
                        {rupiah(list.price)}
                      </h4>
                    </div>
                    <div className="space-y-3">
                      {list.benefit.map((list, idx) => (
                        <div key={idx} className="flex space-x-3">
                          <GoCheckCircle className="text-2xl text-[#00A995]" />
                          <p className="text-[15px] w-[80%]">{list}</p>
                        </div>
                      ))}
                    </div>
                    {list.namePackage === "Web Application" ? (
                      <button
                        onClick={() => handleRoute(list.id)}
                        className="bg-[#0049A5] p-4 font-semibold w-full rounded-md text-white"
                      >
                        Konsultasi Sekarang
                      </button>
                    ) : (
                      <button className="bg-[#0049A5] p-4 font-semibold w-full rounded-md text-white">
                        <Link href={list.link}>Beli Sekarang</Link>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center mt-16 space-x-10">
                {dataPackage.maintenance.map((list, idx) => (
                  <div
                    key={idx}
                    className="border border-[#D3D3D3] w-[25%] p-5 rounded-md space-y-5"
                  >
                    <p className="text-[15px] font-semibold">
                      {list.namePackage}
                    </p>
                    <h4 className="text-2xl font-semibold text-black">
                      {rupiah(list.price)}
                    </h4>
                    <div className="space-y-3">
                      {list.benefit.map((list, idx) => (
                        <div key={idx} className="flex space-x-3">
                          <GoCheckCircle className="text-xl text-[#00A995]" />
                          <p className="text-[15px] w-[80%]">{list}</p>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => handleRoute(list.id)}
                      className="bg-[#0049A5] p-4 font-semibold w-full rounded-md text-white"
                    >
                      Beli Sekarang
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default PackagesSection;
