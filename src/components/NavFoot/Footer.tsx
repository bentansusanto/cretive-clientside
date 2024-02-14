import React from "react";
import { Mobile } from "../../config/MediaQuery";
import Image from "next/image";
import { footData } from "@/libs/NavFootData";
import { link } from "fs";
import Link from "next/link";

const Footer = () => {
  const { isMobile, isTablet, isDesktop } = Mobile();
  const date = new Date().getFullYear();
  return (
    <div className="mt-32 mb-8">
      {isMobile ? (
        <div className="space-y-10 mx-3">
          {/* Logo with Contact */}
          <div className="space-y-3">
            <Image
              src={require("@/assets/images/" + footData.logo)}
              alt="logo-cretive"
            />
            <div className="space-y-3">
              {footData.contact.map((list, idx) => (
                <p key={idx} className="text-gray-500">
                  {list}
                </p>
              ))}
            </div>
            <p className="text-[15px] text-gray-500">© {date}, Cretive</p>
          </div>
          {/* Quicklink, Socail Media, Package, Web Templates */}
          <div className="grid grid-cols-2 gap-5">
            {/* Quicklink */}
            <div className="space-y-3">
              <p className="font-semibold">Quicklink</p>
              <ul className="space-y-3">
                {footData.quicklink.map((list, idx) => (
                  <li key={idx} className="text-gray-500 hover:text-blue-500">
                    <Link href={list.link}>{list.page}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Package */}
            <div className="space-y-3">
              <p className="font-semibold">Package</p>
              <ul className="space-y-3">
                {footData.package.map((list, idx) => (
                  <li key={idx} className="text-gray-500">
                    {list}
                  </li>
                ))}
              </ul>
            </div>
            {/* Web Templates */}
            <div className="space-y-3">
              <p className="font-semibold">Package</p>
              <ul className="space-y-3">
                {footData.webTemplate.map((list, idx) => (
                  <li key={idx} className="text-gray-500">
                    {list}
                  </li>
                ))}
              </ul>
            </div>
            {/* Social Media */}
            <div className="space-y-3">
              <p className="font-semibold">Social Media</p>
              <ul className="space-y-3">
                {footData.socialM.map((list, idx) => (
                  <li
                    key={idx}
                    className="text-gray-500 hover:text-blue-500 capitalize"
                  >
                    <Link href={list.link}>{list.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : isTablet ? (
        <div className="flex justify-between mx-8">
          {/* Logo with Contact */}
          <div className="space-y-3">
            <Image
              src={require("@/assets/images/" + footData.logo)}
              alt="logo-cretive"
            />
            <div className="space-y-3">
              {footData.contact.map((list, idx) => (
                <p key={idx} className="text-gray-500">
                  {list}
                </p>
              ))}
            </div>
            <p className="text-[15px] text-gray-500">© {date}, Cretive</p>
          </div>
          {/* Quicklink, Socail Media, Package, Web Templates */}
          <div className="grid grid-cols-2 gap-14">
            {/* Quicklink */}
            <div className="space-y-3">
              <p className="font-semibold">Quicklink</p>
              <ul className="space-y-3">
                {footData.quicklink.map((list, idx) => (
                  <li key={idx} className="text-gray-500 hover:text-blue-500">
                    <Link href={list.link}>{list.page}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Package */}
            <div className="space-y-3">
              <p className="font-semibold">Package</p>
              <ul className="space-y-3">
                {footData.package.map((list, idx) => (
                  <li key={idx} className="text-gray-500">
                    {list}
                  </li>
                ))}
              </ul>
            </div>
            {/* Web Templates */}
            <div className="space-y-3">
              <p className="font-semibold">Package</p>
              <ul className="space-y-3">
                {footData.webTemplate.map((list, idx) => (
                  <li key={idx} className="text-gray-500">
                    {list}
                  </li>
                ))}
              </ul>
            </div>
            {/* Social Media */}
            <div className="space-y-3">
              <p className="font-semibold">Social Media</p>
              <ul className="space-y-3">
                {footData.socialM.map((list, idx) => (
                  <li
                    key={idx}
                    className="text-gray-500 hover:text-blue-500 capitalize"
                  >
                    <Link href={list.link}>{list.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        isDesktop && (
          <div className="flex justify-between mx-20">
            {/* Logo with Contact */}
            <div className="space-y-3">
              <Image
                src={require("@/assets/images/" + footData.logo)}
                alt="logo-cretive"
              />
              <div className="space-y-3">
                {footData.contact.map((list, idx) => (
                  <p key={idx} className="text-gray-500">
                    {list}
                  </p>
                ))}
              </div>
              <p className="text-[15px] text-gray-500">© {date}, Cretive</p>
            </div>
            {/* Quicklink, Socail Media, Package, Web Templates */}
            <div className="grid grid-cols-4 gap-14">
              {/* Quicklink */}
              <div className="space-y-3">
                <p className="font-semibold">Quicklink</p>
                <ul className="space-y-3">
                  {footData.quicklink.map((list, idx) => (
                    <li key={idx} className="text-gray-500 hover:text-blue-500">
                      <Link href={list.link}>{list.page}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Package */}
              <div className="space-y-3">
                <p className="font-semibold">Package</p>
                <ul className="space-y-3">
                  {footData.package.map((list, idx) => (
                    <li key={idx} className="text-gray-500">
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Web Templates */}
              <div className="space-y-3">
                <p className="font-semibold">Package</p>
                <ul className="space-y-3">
                  {footData.webTemplate.map((list, idx) => (
                    <li key={idx} className="text-gray-500">
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Social Media */}
              <div className="space-y-3">
                <p className="font-semibold">Social Media</p>
                <ul className="space-y-3">
                  {footData.socialM.map((list, idx) => (
                    <li
                      key={idx}
                      className="text-gray-500 hover:text-blue-500 capitalize"
                    >
                      <Link href={list.link}>{list.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Footer;
