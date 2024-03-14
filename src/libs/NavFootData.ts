import { FootProps, NavProps } from "@/utils/types";

export const navData: NavProps[] = [
  { page: "Home", link: "/" },
  { page: "Why Choose Us", link: "#why-choose-us" },
  { page: "Portofolio", link: "#portofolio" },
  { page: "Testimoni", link: "#testimoni" },
  // {page: "Web Templates", link: "/web-templates"},
  { page: "FAQ", link: "#faq" },
];

export const footData: FootProps = {
  logo: "logo-cretive-agency.svg",
  quicklink: navData,
  contact: ["cretivesoft@gmail.com", "Batam, Kepulauan Riau"],
  webTemplate: [
    "UI Design",
    "Landingpage",
    "Web Company Profile",  
    "Web Application",
  ],
  package: ["Landingpage", "Web Company Profile", "Web Application"],
  socialM: [
    {
      name: "Instagram",
      link: "https://instagram.com",
    },
    {
      name: "tiktok",
      link: "https://tiktok.com",
    },
  ],
};
