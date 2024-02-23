import { getCookie, setCookie } from "@/config/Cookies";
import { rupiah } from "@/config/Currency";
import { greetingMessage } from "@/config/GreetingMessage";
import { Mobile } from "@/config/MediaQuery";
import { dataCheckout, paymentMethod } from "@/libs/CheckoutData";
import { dataPackage } from "@/libs/HomeData";
import { DataCheckout, PaymentMethod } from "@/utils/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { GoCheckCircle } from "react-icons/go";
import { TbReload } from "react-icons/tb";
import { PiTimerBold } from "react-icons/pi";
import CheckoutPopUp from "./CheckoutPopUp";
import FacebookPixel from "@/libs/FacebookPixel";


const CheckoutPackage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const packageData = dataPackage.package.find(
    (p: { id: string }) => p.id === productId
  );
  const facebookPixel = FacebookPixel()
  const [namePackages, setNamePackages] = useState("");
  const { isMobile, isTablet, isDesktop } = Mobile();
  const [openStruckPayment, setOpenStruckPayment] = useState<boolean>(false);
  const [openBenefit, setOpenBenefit] = useState<boolean>(false);
  const [openPayment, setOpenPayment] = useState<boolean>(false);
  const [selectPayment, setSelectPayment] = useState<PaymentMethod | null>(
    null
  );
  const waLink = "https://wa.me";
  const numberWA = "+6288277450792";
  const greetingData = greetingMessage();
  const [data, setData] = useState<DataCheckout>({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    industri: "",
    needs: "",
    prdLink: "",
  });

  const handleOpenBenefit = () => {
    setOpenBenefit(!openBenefit);
  };

  const handleSelectPayment = (id: string) => {
    const foundPayment = paymentMethod.find((payment) => payment.id === id);
    if (foundPayment) {
      setSelectPayment(foundPayment);
    }
    setOpenPayment(false);
  };

  const handleOpenPayment = () => {
    setOpenPayment(true);
  };

  useEffect(() => {
    if (packageData?.namePackage) {
      setNamePackages(packageData.namePackage as string);
    }
  }, [packageData]);

  useEffect(() => {
    const savedFormData = getCookie("checkoutData");
    if (savedFormData) {
      setData(JSON.parse(savedFormData));
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangePackage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNamePackages(value);
  };

  const handleCheckout = (
    e: React.FormEvent<HTMLInputElement | HTMLParagraphElement>
  ) => {
    e.preventDefault();
    if (selectPayment) {
      const { bankName, noRek, nameOwner } = selectPayment;
      const packagesName = packageData?.namePackage;
      const packagesPrice = packageData?.price;
      let message;
      setCookie("checkoutData", JSON.stringify({ data }), 7);
      const {
        name,
        email,
        phoneNumber,
        companyName,
        industri,
        needs,
        prdLink,
      } = data;
      if (packageData?.namePackage === "Web Application") {
        message = `${greetingData} kak, saya mau pesan ${packagesName}. \n\n Nama: ${name}\n Email: ${email}\n No.Hp: ${phoneNumber}\n Nama Perusahaan: ${companyName}\n Industri: ${industri}\n Kebutuhan Website: ${needs}\n PRD Link: ${
          prdLink || "Tidak ada"
        }\n\n Berikut metode pembayaran yang anda gunakan untuk pembayaran paket ${packagesName}\n Nama Bank: ${bankName}\n Nomor Rekening: ${noRek}\n Pemilik: ${nameOwner}\n\n Terimakasih sudah melakukan pemesanan, kami akan tinjau terlebih dahulu project anda untuk menentukan harga yang sesuai dengan kebutuhan anda.`;
      } else {
        message = `${greetingData} kak, saya mau pesan ${packagesName}. \n\n Nama: ${name}\n Email: ${email}\n No.Hp: ${phoneNumber}\n Nama Perusahaan: ${companyName}\n Industri: ${industri}\ Kebutuhan Website: ${needs}\n PRD Link: ${
          prdLink || "Tidak ada"
        }\n\n Berikut metode pembayaran yang anda gunakan untuk pembayaran paket ${packagesName}\n\n Nama Bank: ${bankName}\n Nomor Rekening: ${noRek}\n Pemilik: ${nameOwner}\n Total Pembayaran: ${packagesPrice}\n\n Terimakasih kak sudah melakukan pemesanan, Mohon untuk mengirimkan bukti pembayaran pembelian paket dan kami akan memberikan surat perjanjian kerjasama`;
      }
      facebookPixel(packageData?.price, "IDR")
      const whatsappLink = `${waLink}/${numberWA}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappLink, "_blank");
      setOpenStruckPayment(true);
    }
  };

  const disabledButton =
    (data.name &&
      data.email &&
      data.phoneNumber &&
      data.companyName &&
      data.industri &&
      data.needs) === undefined;

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
          <div>
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
                {/* Package Detail */}
                <div className="block">
                  <div className="sticky space-y-8 top-5 bg-white shadow-md p-5 rounded-md w-96 h-auto">
                    <div className="flex items-center justify-between">
                      <p className="text-[16px] font-medium">
                        {packageData?.namePackage}
                      </p>
                      <p className="text-[16px] font-semibold text-gray-500">
                        {packageData?.namePackage === "Web Application"
                          ? null
                          : `${rupiah(packageData?.price)}`}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[15px] font-normal text-gray-500">
                        {packageData?.desc}
                      </p>
                      <div className="space-y-3">
                        {/* Revision dan Duration */}
                        <div className="flex items-center space-x-10">
                          <div className="flex items-center space-x-2">
                            <TbReload className="text-[156]" />
                            <p className="text-[14px] font-semibold text-gray-500">
                              {packageData?.revision}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <PiTimerBold className="text-[156]" />
                            <p className="text-[14px] font-semibold text-gray-500">
                              {packageData?.duration}
                            </p>
                          </div>
                        </div>
                        {/* Benefit */}
                        <div className="space-y-3">
                          <div
                            onClick={handleOpenBenefit}
                            className="flex items-center justify-between"
                          >
                            <p className="text-[14px] font-medium">
                              Apa yang kamu dapatkan
                            </p>
                            <BiChevronDown
                              className={`${
                                openBenefit && "rotate-180"
                              } duration-300 transition-all text-2xl`}
                            />
                          </div>
                          <ul
                            className={`${!openBenefit && "hidden"} space-y-3`}
                          >
                            {packageData?.benefit.map((list, idx) => (
                              <li
                                key={idx}
                                className="flex items-center space-x-2"
                              >
                                <GoCheckCircle className="text-lg text-green-500" />
                                <p className="text-[14px] text-gray-400">
                                  {list}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-md rounded-md p-5 z-0">
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
                            name="name"
                            value={data.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                            className="bg-gray-50 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="#" className="text-[15px]">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={handleInputChange}
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
                            name="phoneNumber"
                            value={data.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            className="bg-gray-50 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="#" className="text-[15px]">
                            Packages
                          </label>
                          <input
                            value={namePackages}
                            onChange={handleChangePackage}
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
                            name="companyName"
                            value={data.companyName}
                            onChange={handleInputChange}
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
                            name="industri"
                            value={data.industri}
                            onChange={handleInputChange}
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
                          name="needs"
                          value={data.needs}
                          onChange={handleInputChange}
                          placeholder="Enter what you need in your website"
                          className="bg-gray-50 h-24 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                        />
                      </div>
                      <div className="space-y-2 mb-5">
                        <label htmlFor="#" className="text-[15px]">
                          Product Requirement Document (optional)
                        </label>
                        <input
                          type="text"
                          name="prdLink"
                          value={data.prdLink}
                          onChange={handleInputChange}
                          placeholder="Enter url file"
                          className="bg-gray-50 placeholder:text-[15px] p-3 text-[15px] rounded-md w-full"
                        />
                      </div>
                      <div className="space-y-2 mb-10 relative">
                        <label htmlFor="#" className="text-[15px]">
                          Payment Method
                        </label>
                        <div
                          onClick={handleOpenPayment}
                          className="flex items-center space-x-5 bg-gray-50 rounded-md p-3"
                        >
                          <p className="text-[15px] w-full">
                            {selectPayment
                              ? selectPayment.bankName
                              : "Please Select Payment"}
                          </p>
                          <BiChevronDown
                            className={` ${
                              openPayment && "rotate-180"
                            } duration-300 transition-all text-2xl`}
                          />
                        </div>
                        <div
                          className={`${!openPayment && "hidden top-20"} ${
                            isMobile ? "h-0" : "h-24"
                          } bg-white rounded-md shadow-md w-full absolute top-20 transition-all ease-in-out duration-300 space-y-1 overflow-y-scroll scroll-smooth`}
                        >
                          {paymentMethod.map((val, idx) => (
                            <div
                              className="cursor-pointer hover:bg-gray-100 py-3 px-3 w-full"
                              key={idx}
                              onClick={() => handleSelectPayment(val.id)}
                            >
                              <p>{val.bankName}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      {packageData?.namePackage !== "Web Application" && (
                        <div className=" flex items-center justify-between text-[16px] font-semibold mb-5">
                          <p className="text-[15px] font-normal text-gray-500">
                            Total:
                          </p>
                          <p className="text-[15px] font-semibold">
                            {rupiah(packageData?.price)}
                          </p>
                        </div>
                      )}
                      <button
                        type="submit"
                        disabled={!selectPayment || disabledButton}
                        className={` text-center w-full text-white bg-blue-800 rounded-md`}
                      >
                        {packageData?.namePackage === "Web Application" ? (
                          <p
                            onClick={handleCheckout}
                            className="text-[16px] font-semibold p-3"
                          >
                            Konsultasi Sekarang
                          </p>
                        ) : (
                          <p
                            onClick={handleCheckout}
                            className="text-[16px] font-semibold p-3"
                          >
                            Checkout Sekarang
                          </p>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* StruckPaymentPackage */}
            </div>
            <div
              className={` ${
                !openStruckPayment && "hidden"
              } bg-[#00000090] w-screen h-screen fixed backdrop-blur-md overflow-hidden z-40 top-0`}
            >
              <CheckoutPopUp
                setOpenStruckPayment={setOpenStruckPayment}
                handleCheckout={handleCheckout}
                openStruckPayment={openStruckPayment}
                data={data}
                packages={packageData}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CheckoutPackage;
