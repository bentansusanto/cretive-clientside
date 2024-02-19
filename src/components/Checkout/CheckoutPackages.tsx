import { rupiah } from "@/config/Currency";
import { Mobile } from "@/config/MediaQuery";
import { dataCheckout } from "@/libs/CheckoutData";
import { dataPackage } from "@/libs/HomeData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const CheckoutPackage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const packageData = dataPackage.package.find(
    (p: { id: string }) => p.id === productId
  );
  const [name, setName] = useState("");
  const { isMobile, isTablet, isDesktop } = Mobile();

  useEffect(() => {
    if (packageData?.namePackage) {
      setName(packageData.namePackage as string);
    }
  }, [packageData]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      {isMobile ? (
        <div className="space-y-10 mt-20 mx-5">
          <div className="w-[90%] space-y-3">
            <h2 className="font-bold leading-snug text-4xl font-raleway">
              {dataCheckout.title}
            </h2>
            <p className="text-[15px] text-gray-400 w-[80%]">
              {dataCheckout.description}
            </p>
          </div>
          <div className="space-y-5">
            <div className="block">
              <div className="sticky space-y-5 top-5 bg-gray-100 w-[100%] h-52">
                <p className="text-[15px] font-semibold text-white">
                  {packageData?.namePackage}
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-md p-5">
              <h4 className="text-md font-semibold">Form Checkout</h4>
              <div className="mt-8 w-[100%]">
                <form action="#">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="#" className="text-[15px]">
                        Nama
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="#" className="text-[15px]">
                        Email
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your email"
                        className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="#" className="text-[15px]">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your phone number"
                        className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="#" className="text-[15px]">
                        Packages
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your package"
                        className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-300 h-[1px] w-full my-6" />
                  <div className="grid grid-cols-2 gap-5 items-center mb-5">
                    <div className="space-y-2">
                      <label htmlFor="#" className="text-[15px]">
                        Nama Perusahaan
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your company name"
                        className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="#" className="text-[15px]">
                        Jenis industri
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your industry"
                        className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mb-5">
                    <label htmlFor="#" className="text-[15px]">
                      Kebutuhan Website
                    </label>
                    <textarea
                      placeholder="Enter what you need in your website"
                      className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                    ></textarea>
                  </div>
                  <div className="space-y-2 mb-5">
                    <label htmlFor="#" className="text-[15px]">
                      Product Requirement Document (optional)
                    </label>
                    <input
                      type="file"
                      className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                    />
                  </div>
                  <div className="space-y-2 mb-10">
                    <label htmlFor="#" className="text-[15px]">
                      Payment Method
                    </label>
                    <div className="flex items-center space-x-5 bg-gray-100 rounded-md p-3">
                      <input
                        type="text"
                        placeholder="Select payment method"
                        className=" placeholder:text-[15px] bg-transparent text-[15px] w-full"
                      />
                      <BiChevronDown className="text-2xl" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-between w-full text-white bg-blue-800 p-3 rounded-md"
                  >
                    <p className="text-[16px] font-semibold">Rp 599.900</p>
                    <p className="text-[16px] font-semibold">Checkout</p>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : isTablet ? (
        <div className="space-y-10 mt-32 mx-8">
          <div className="w-[30%] space-y-3">
            <h2 className="font-bold leading-snug text-4xl font-raleway">
              {dataCheckout.title}
            </h2>
            <p className="text-[15px] text-gray-400 w-[80%]">
              {dataCheckout.description}
            </p>
          </div>
          <div className="flex space-x-5">
            <div className="block">
              <div className="sticky top-5 bg-gray-400 w-[40vw] h-52"></div>
            </div>
            <div className="bg-gray-200 rounded-md p-5">
              <h4 className="text-md font-semibold">Form Checkout</h4>
              <div className="mt-8 w-[44vw]">
                <form action="#">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="#" className="text-[15px]">
                        Nama
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="#" className="text-[15px]">
                        Email
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your email"
                        className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="#" className="text-[15px]">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your phone number"
                        className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="#" className="text-[15px]">
                        Packages
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your package"
                        className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-300 h-[1px] w-full my-6" />
                  <div className="grid grid-cols-2 gap-5 items-center mb-5">
                    <div className="space-y-2">
                      <label htmlFor="#" className="text-[15px]">
                        Nama Perusahaan
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your company name"
                        className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="#" className="text-[15px]">
                        Jenis industri
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your industry"
                        className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mb-5">
                    <label htmlFor="#" className="text-[15px]">
                      Kebutuhan Website
                    </label>
                    <textarea
                      placeholder="Enter what you need in your website"
                      className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                    ></textarea>
                  </div>
                  <div className="space-y-2 mb-5">
                    <label htmlFor="#" className="text-[15px]">
                      Product Requirement Document (optional)
                    </label>
                    <input
                      type="file"
                      className="bg-gray-100 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                    />
                  </div>
                  <div className="space-y-2 mb-10">
                    <label htmlFor="#" className="text-[15px]">
                      Payment Method
                    </label>
                    <div className="flex items-center space-x-5 bg-gray-100 rounded-md p-3">
                      <input
                        type="text"
                        placeholder="Select payment method"
                        className=" placeholder:text-[15px] bg-transparent text-[15px] w-full"
                      />
                      <BiChevronDown className="text-2xl" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-between w-full text-white bg-blue-600 p-3 rounded-md"
                  >
                    <p className="text-[16px] font-semibold">Rp 599.900</p>
                    <p className="text-[16px] font-semibold">Checkout</p>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        isDesktop && (
          <div className="space-y-10 mt-20 mx-20">
            <div className="w-[30%] space-y-3">
              <h2 className="font-bold leading-snug text-4xl font-raleway">
                {dataCheckout.title}
              </h2>
              <p className="text-[15px] text-gray-400 w-[80%]">
                {dataCheckout.description}
              </p>
            </div>
            <div className="flex space-x-20">
              <div className="block">
                <div className="sticky top-5 bg-gray-400 w-96 h-52">
                  <p className="text-[15px] font-semibold text-white">
                    {packageData?.namePackage}
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-md rounded-md p-5">
                <h4 className="text-md font-semibold">Form Checkout</h4>
                <div className="mt-8 w-[40vw]">
                  <form action="#">
                    <div className="grid grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[15px]">
                          Nama
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="bg-gray-50 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[15px]">
                          Email
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your email"
                          className="bg-gray-50 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[15px]">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your phone number"
                          className="bg-gray-50 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[15px]">
                          Packages
                        </label>
                        <input
                          value={name}
                          onChange={handleNameChange}
                          placeholder="Enter your package"
                          className="bg-gray-50 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-300 h-[1px] w-full my-6" />
                    <div className="grid grid-cols-2 gap-5 items-center mb-5">
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[15px]">
                          Nama Perusahaan
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your company name"
                          className="bg-gray-50 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[15px]">
                          Jenis industri
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your industry"
                          className="bg-gray-50 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 mb-5">
                      <label htmlFor="#" className="text-[15px]">
                        Kebutuhan Website
                      </label>
                      <textarea
                        placeholder="Enter what you need in your website"
                        className="bg-gray-50 h-24 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                      ></textarea>
                    </div>
                    <div className="space-y-2 mb-5">
                      <label htmlFor="#" className="text-[15px]">
                        Product Requirement Document (optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Enter url file"
                        className="bg-gray-50 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                      />
                    </div>
                    <div className="space-y-2 mb-10">
                      <label htmlFor="#" className="text-[15px]">
                        Payment Method
                      </label>
                      <div className="flex items-center space-x-5 bg-gray-50 rounded-md p-3">
                        <p className="text-gray-400 bg-transparent text-[15px] w-full">
                          Select payment method
                        </p>
                        <BiChevronDown className="text-2xl" />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className={`${packageData?.namePackage !== 'Web Application'&& "flex items-center justify-between"} w-full text-white bg-blue-800 p-3 rounded-md`}
                    >
                      <p className="text-[16px] font-semibold">
                        {packageData?.namePackage === 'Web Application' ? null : rupiah(packageData?.price)}
                      </p>
                      <p className="text-[16px] font-semibold">{packageData?.namePackage === 'Web Application' ? "Konsultasi Sekarang" : "Checkout"}</p>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CheckoutPackage;
