import { getCookie, setCookie } from "@/config/Cookies";
import { rupiah } from "@/config/Currency";
import { greetingMessage } from "@/config/GreetingMessage";
import { Mobile } from "@/config/MediaQuery";
import { dataCheckout, paymentMethod } from "@/libs/CheckoutData";
import FacebookPixel from "@/libs/FacebookPixel";
import { dataPackage } from "@/libs/HomeData";
import { DataCheckout, PaymentMethod } from "@/utils/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { GoCheckCircle } from "react-icons/go";
import { PiTimerBold } from "react-icons/pi";
import { TbReload } from "react-icons/tb";
import CheckoutPopUp from "./CheckoutPopUp";

const initialValue: DataCheckout = {
  name: "",
  email: "",
  phoneNumber: "",
  companyName: "",
  industri: "",
  needs: "",
  prdLink: "",
};

const CheckoutPackage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const packageData = dataPackage.package.find(
    (p: { id: string }) => p.id === productId
  );
  const maintenanceData = dataPackage.maintenance.find(
    (p: { id: string }) => p.id === productId
  );
  const facebookPixel = FacebookPixel();
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
  const [data, setData] = useState(initialValue || "");

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
    setOpenPayment(!openPayment);
  };

  useEffect(() => {
    if (packageData?.namePackage) {
      setNamePackages(packageData.namePackage as string);
    } else if (maintenanceData?.namePackage) {
      setNamePackages(maintenanceData.namePackage as string);
    }
  }, [packageData, maintenanceData]);

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
      let message;
      if (packageData?.namePackage) {
        const packagesName = packageData?.namePackage;
        const packagesPrice = packageData?.price;
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
          }\n\n -------------------------------------------- \n\n Berikut metode pembayaran yang anda gunakan untuk pembayaran paket ${packagesName}\n Nama Bank: ${bankName}\n Nomor Rekening: ${noRek}\n Pemilik: ${nameOwner}\n\n Terimakasih sudah melakukan pemesanan, kami akan tinjau terlebih dahulu project anda untuk menentukan harga yang sesuai dengan kebutuhan anda.`;
        } else {
          message = `${greetingData} kak, saya mau pesan ${packagesName}. \n\n Nama: ${name}\n Email: ${email}\n No.Hp: ${phoneNumber}\n Nama Perusahaan: ${companyName}\n Industri: ${industri}\ Kebutuhan Website: ${needs}\n PRD Link: ${
            prdLink || "Tidak ada"
          }\n\n -------------------------------------------- \n\n Berikut metode pembayaran yang anda gunakan untuk pembayaran paket ${packagesName}\n\n Nama Bank: ${bankName}\n Nomor Rekening: ${noRek}\n Pemilik: ${nameOwner}\n Total Pembayaran: ${rupiah(
            packagesPrice
          )}\n\n Terimakasih sudah melakukan pemesanan, Mohon untuk mengirimkan bukti pembayaran pembelian paket dan kami akan memberikan surat perjanjian kerjasama`;
        }
        facebookPixel.trackPurchase(packageData?.price, "IDR");
        const whatsappLink = `${waLink}/${numberWA}?text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappLink, "_blank");
        setOpenStruckPayment(true);
        setData(initialValue || "");
      } else if (maintenanceData?.namePackage) {
        const packagesName = packageData?.namePackage;
        const packagesPrice = packageData?.price;
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
        message = `${greetingData} kak, saya mau pesan ${packagesName}. \n\n Nama: ${name}\n Email: ${email}\n No.Hp: ${phoneNumber}\n Nama Perusahaan: ${companyName}\n Industri: ${industri}\ Kebutuhan Website: ${needs}\n PRD Link: ${
          prdLink || "Tidak ada"
        }\n\n -------------------------------------------- \n\n Berikut metode pembayaran yang anda gunakan untuk pembayaran paket ${packagesName}\n\n Nama Bank: ${bankName}\n Nomor Rekening: ${noRek}\n Pemilik: ${nameOwner}\n Total Pembayaran: ${rupiah(
          packagesPrice
        )}\n\n Terimakasih sudah melakukan pemesanan, Mohon untuk mengirimkan bukti pembayaran pembelian paket dan kami akan memberikan surat perjanjian kerjasama`;
        facebookPixel.trackPurchase(packageData?.price, "IDR");
        const whatsappLink = `${waLink}/${numberWA}?text=${encodeURIComponent(
          message
        )}`;
        window.open(whatsappLink, "_blank");
        setOpenStruckPayment(true);
        setData(initialValue || "");
      }
    }
  };

  const disabledButton =
    (data.name &&
      data.email &&
      data.phoneNumber &&
      data.companyName &&
      data.industri &&
      data.needs) === undefined;

  const packagePrice = () => {
    let packagePrice;
    if (packageData?.id) {
      packagePrice =
        packageData.namePackage === "Web Application"
          ? null
          : rupiah(packageData.price);
    } else if (maintenanceData?.id) {
      packagePrice =
        maintenanceData.namePackage && rupiah(maintenanceData.price);
    }
    return packagePrice;
  };

  const totalPricePackage = () => {
    let totalPrice;
    if (packageData?.id) {
      totalPrice = packageData?.namePackage !== "Web Application" && (
        <div className=" flex items-center justify-between text-[16px] font-semibold mb-5">
          <p className="text-[15px] font-normal text-gray-500">Total:</p>
          <p className="text-[15px] font-semibold">
            {rupiah(packageData?.price)}
          </p>
        </div>
      );
    } else if (maintenanceData?.id) {
      totalPrice = (
        <div className=" flex items-center justify-between text-[16px] font-semibold mb-5">
          <p className="text-[15px] font-normal text-gray-500">Total:</p>
          <p className="text-[15px] font-semibold">
            {rupiah(maintenanceData?.price)}
          </p>
        </div>
      );
    }
    return totalPrice;
  };

  return (
    <div>
      {isMobile ? (
        <>
          <div className="space-y-10 mt-20 mx-5">
            <div className="w-[90%] space-y-3">
              <h2 className="font-bold leading-snug text-3xl font-raleway">
                {dataCheckout.title}
              </h2>
              <p className="text-[15px] text-gray-400 w-[90%]">
                {dataCheckout.description}
              </p>
            </div>
            <div className="space-y-5">
              {/* Package Detail */}
              <div className="bg-white space-y-8 p-5 shadow-md w-[100%] h-auto">
                <div className="flex items-center justify-between">
                  <p className="text-[16px] font-medium">
                    {packageData?.id
                      ? packageData.namePackage
                      : maintenanceData?.namePackage}
                  </p>
                  <p className="text-[16px] font-semibold text-gray-500">
                    {packagePrice()}
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-[14px] font-normal text-gray-500">
                    {packageData?.id ? packageData.desc : maintenanceData?.desc}
                  </p>
                  <div className="space-y-3">
                    {/* Revision dan Duration */}
                    <div className="flex items-center space-x-5">
                      <div className="flex items-center space-x-2">
                        <TbReload className="text-[16px]" />
                        <p className="text-[13px] font-semibold text-gray-500">
                          {packageData?.id
                            ? packageData.revision
                            : maintenanceData?.revision}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <PiTimerBold className="text-[16px]" />
                        <p className="text-[13px] font-semibold text-gray-500">
                          {packageData?.id
                            ? packageData.duration
                            : maintenanceData?.duration}
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
                      <ul className={`${!openBenefit && "hidden"} space-y-3`}>
                        {packageData?.benefit.map((list, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <GoCheckCircle className="text-lg text-green-500" />
                            <p className="text-[14px] w-[80%] text-gray-400">
                              {list}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Form Checkout */}
              <div className="bg-white shadow-md rounded-md p-5">
                <h4 className="text-md font-semibold">Form Checkout</h4>
                <div className="mt-8 w-[100%]">
                  <form action="#">
                    <div className="grid grid-cols-1 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[14px]">
                          Nama
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={data.name || ""}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          className="bg-gray-50 placeholder:text-[14px] p-3 text-[14px] rounded-md w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[14px]">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={data.email || ""}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="bg-gray-50 placeholder:text-[14px] p-3 text-[14px] rounded-md w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[14px]">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="phoneNumber"
                          value={data.phoneNumber || ""}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="bg-gray-50 placeholder:text-[14px] p-3 text-[14px] rounded-md w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[14px]">
                          Packages
                        </label>
                        <input
                          value={namePackages}
                          onChange={handleChangePackage}
                          placeholder="Enter your package"
                          className="bg-gray-50 placeholder:text-[14px] p-3 text-[14px] rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-300 h-[1px] w-full my-6" />
                    <div className="grid grid-cols-1 gap-5 items-center mb-5">
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[14px]">
                          Nama Perusahaan
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={data.companyName || ""}
                          onChange={handleInputChange}
                          placeholder="Enter your company name"
                          className="bg-gray-50 placeholder:text-[14px] p-3 text-[14px] rounded-md w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[14px]">
                          Jenis industri
                        </label>
                        <input
                          type="text"
                          name="industri"
                          value={data.industri || ""}
                          onChange={handleInputChange}
                          placeholder="Enter your industry"
                          className="bg-gray-50 placeholder:text-[14px] p-3 text-[14px] rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 mb-5">
                      <label htmlFor="#" className="text-[14px]">
                        Kebutuhan Website
                      </label>
                      <textarea
                        name="needs"
                        value={data.needs || ""}
                        onChange={handleInputChange}
                        placeholder="Enter what you need in your website"
                        className="bg-gray-50 h-24 placeholder:text-[14px] p-3 text-[14px] rounded-md w-full"
                      />
                    </div>
                    <div className="space-y-2 mb-5">
                      <label htmlFor="#" className="text-[14px]">
                        Product Requirement Document (optional)
                      </label>
                      <input
                        type="text"
                        name="prdLink"
                        value={data.prdLink || ""}
                        onChange={handleInputChange}
                        placeholder="Enter url file"
                        className="bg-gray-50 placeholder:text-[14px] p-3 text-[14px] rounded-md w-full"
                      />
                    </div>
                    <div className="space-y-2 mb-10 relative">
                      <label htmlFor="#" className="text-[14px]">
                        Payment Method
                      </label>
                      <div
                        onClick={handleOpenPayment}
                        className="flex items-center relative space-x-5 bg-gray-50 rounded-md p-3"
                      >
                        <p className="text-[14px] w-full">
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
                          isMobile ? "h-28" : "h-0"
                        } bg-white rounded-md shadow-md w-full absolute top-20 transition-all ease-in-out duration-300 z-40 space-y-1 overflow-y-scroll scroll-smooth`}
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
                    {totalPricePackage()}
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
          </div>
          <div
            className={` ${
              !openStruckPayment && "hidden"
            } bg-[#00000090] px-5 w-screen h-screen fixed backdrop-blur-md overflow-hidden z-40 top-0`}
          >
            <CheckoutPopUp openStruckPayment={openStruckPayment} />
          </div>
        </>
      ) : isTablet ? (
        <div>
          <div className="space-y-10 mt-32 mx-8">
            <div className="w-[60%] space-y-3">
              <h2 className="font-bold leading-snug text-4xl font-raleway">
                {dataCheckout.title}
              </h2>
              <p className="text-[15px] text-gray-400 w-[60%]">
                {dataCheckout.description}
              </p>
            </div>
            <div className="flex space-x-5">
              {/* Package Detail */}
              <div className="block">
                <div className="sticky space-y-8 top-5 bg-white shadow-md p-5 rounded-md w-[40vw] h-auto">
                  <div className="flex items-center justify-between">
                    <p className="text-[16px] font-medium">
                      {packageData?.id
                        ? packageData.namePackage
                        : maintenanceData?.namePackage}
                    </p>
                    <p className="text-[16px] font-semibold text-gray-500">
                      {packagePrice()}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-[15px] font-normal text-gray-500">
                      {packageData?.id
                        ? packageData.desc
                        : maintenanceData?.desc}
                    </p>
                    <div className="space-y-3">
                      {/* Revision dan Duration */}
                      <div className="flex items-center space-x-10">
                        <div className="flex items-center space-x-2">
                          <TbReload className="text-[156]" />
                          <p className="text-[14px] font-semibold text-gray-500">
                            {packageData?.id
                              ? packageData.revision
                              : maintenanceData?.revision}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <PiTimerBold className="text-[156]" />
                          <p className="text-[14px] font-semibold text-gray-500">
                            {packageData?.id
                              ? packageData.duration
                              : maintenanceData?.duration}
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
                        <ul className={`${!openBenefit && "hidden"} space-y-3`}>
                          {packageData?.id
                            ? packageData?.benefit.map((list, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center space-x-2"
                                >
                                  <GoCheckCircle className="text-lg text-green-500" />
                                  <p className="text-[14px] text-gray-400">
                                    {list}
                                  </p>
                                </li>
                              ))
                            : maintenanceData?.benefit.map((list, idx) => (
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
              {/* Form Checkout */}
              <div className="bg-white shadow-md rounded-md p-5">
                <h4 className="text-md font-semibold">Form Checkout</h4>
                <div className="mt-8 w-[46vw]">
                  <form action="#">
                    <div className="grid grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[14px]">
                          Nama
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={data.name || ""}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          className="bg-gray-50 placeholder:text-[14px] p-3 text-[14px] rounded-md w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[14px]">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={data.email || ""}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="bg-gray-50 placeholder:text-[14px] p-3 text-[14px] rounded-md w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[14px]">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="phoneNumber"
                          value={data.phoneNumber || ""}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="bg-gray-50 placeholder:text-[14px] p-3 text-[14px] rounded-md w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[14px]">
                          Packages
                        </label>
                        <input
                          value={namePackages}
                          onChange={handleChangePackage}
                          placeholder="Enter your package"
                          className="bg-gray-50 placeholder:text-[14px] p-3 text-[14px] rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="bg-gray-300 h-[1px] w-full my-6" />
                    <div className="grid grid-cols-2 gap-5 items-center mb-5">
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[14px]">
                          Nama Perusahaan
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={data.companyName || ""}
                          onChange={handleInputChange}
                          placeholder="Enter your company name"
                          className="bg-gray-50 placeholder:text-[14px] p-3 text-[14px] rounded-md w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="#" className="text-[14px]">
                          Jenis industri
                        </label>
                        <input
                          type="text"
                          name="industri"
                          value={data.industri || ""}
                          onChange={handleInputChange}
                          placeholder="Enter your industry"
                          className="bg-gray-50 placeholder:text-[14px] p-3 text-[14px] rounded-md w-full"
                        />
                      </div>
                    </div>
                    <div className="space-y-2 mb-5">
                      <label htmlFor="#" className="text-[14px]">
                        Kebutuhan Website
                      </label>
                      <textarea
                        name="needs"
                        value={data.needs || ""}
                        onChange={handleInputChange}
                        placeholder="Enter what you need in your website"
                        className="bg-gray-50 h-24 placeholder:text-[14px] p-3 text-[14px] rounded-md w-full"
                      />
                    </div>
                    <div className="space-y-2 mb-5">
                      <label htmlFor="#" className="text-[14px]">
                        Product Requirement Document (optional)
                      </label>
                      <input
                        type="text"
                        name="prdLink"
                        value={data.prdLink || ""}
                        onChange={handleInputChange}
                        placeholder="Enter url file"
                        className="bg-gray-50 placeholder:text-[14px] p-3 text-[14px] rounded-md w-full"
                      />
                    </div>
                    <div className="space-y-2 mb-10 relative">
                      <label htmlFor="#" className="text-[14px]">
                        Payment Method
                      </label>
                      <div
                        onClick={handleOpenPayment}
                        className="flex items-center space-x-5 bg-gray-50 rounded-md p-3"
                      >
                        <p className="text-[14px] w-full">
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
                    {totalPricePackage()}
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
          </div>
          <div
            className={` ${
              !openStruckPayment && "hidden"
            } bg-[#00000090] w-screen h-screen fixed backdrop-blur-md overflow-hidden z-40 top-0`}
          >
            <CheckoutPopUp openStruckPayment={openStruckPayment} />
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
                      <p className="text-[16px] w-[60%] font-medium">
                        {packageData?.id
                          ? packageData.namePackage
                          : maintenanceData?.namePackage}
                      </p>
                      <p className="text-[16px] font-semibold text-gray-500">
                        {packagePrice()}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[15px] font-normal text-gray-500">
                        {packageData?.id
                          ? packageData.desc
                          : maintenanceData?.desc}
                      </p>
                      <div className="space-y-3">
                        {/* Revision dan Duration */}
                        <div className="flex items-center space-x-10">
                          <div className="flex items-center space-x-2">
                            <TbReload className="text-[156]" />
                            <p className="text-[14px] font-semibold text-gray-500">
                              {packageData?.id
                                ? packageData.revision
                                : maintenanceData?.revision}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <PiTimerBold className="text-[156]" />
                            <p className="text-[14px] font-semibold text-gray-500">
                              {packageData?.id
                                ? packageData.duration
                                : maintenanceData?.duration}
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
                            {packageData?.id
                              ? packageData?.benefit.map((list, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-center space-x-2"
                                  >
                                    <GoCheckCircle className="text-lg text-green-500" />
                                    <p className="text-[14px] text-gray-400">
                                      {list}
                                    </p>
                                  </li>
                                ))
                              : maintenanceData?.benefit.map((list, idx) => (
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
                            value={data.name || ""}
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
                            value={data.email || ""}
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
                            value={data.phoneNumber || ""}
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
                            value={data.companyName || ""}
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
                            value={data.industri || ""}
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
                          value={data.needs || ""}
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
                          value={data.prdLink || ""}
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
                      {totalPricePackage()}
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
              <CheckoutPopUp openStruckPayment={openStruckPayment} />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CheckoutPackage;
