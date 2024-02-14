import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export type NavProps = {
  page: string;
  link: string;
};

export type socialMedia = {
    name: string;
    link: string;
}

export type FootProps = {
    logo: string;
    quicklink: NavProps[];
    contact: string[];
    webTemplate: string[];
    package: string[];
    socialM: socialMedia[];
}

interface HeadlineProps {
  subtitle?: string;
  title: string;
  description?: string;
  image?: string;
}

type IconService = {
  icon: string;
  nameService: string;
  desc: string;
};

type Portofolio = {
  thumbnail: string;
  namePorto: string;
  link: string;
};

type PackagesWeb = {
  namePackage: string;
  price: number;
  benefit: string[];
};

type MaintenanceWeb = {
  namePackage: string;
  price: number;
  benefit: string[];
};

export type Testimoni = {
  name: string;
  package: string;
  message: string;
  image: string;
};

export type FAQ = {
  question: string;
  answer: string[];
};

export type technology = {
  icon: string;
}

export type WebTemplates = {
  name_product: string;
  slug: string;
  category: string;
  industri: string;
  link: string;
  linkUnduh: string;
  tech:technology[];
  description: string[];
  thumbnail: string;
}

export interface HeroProps extends HeadlineProps {}

export interface AboutProps extends HeadlineProps {
  service: IconService[];
}

export interface PortoProps extends HeadlineProps {
  porto: Portofolio[];
}

export interface PackageProps extends HeadlineProps {
  package: PackagesWeb[];
  maintenance: MaintenanceWeb[];
}

export interface TestimoniProps extends HeadlineProps {
  testimoni: Testimoni[];
}

export interface FAQProps extends HeadlineProps {
  faq: FAQ[];
}

export interface CTAProps extends HeadlineProps {
  benefit: string[];
}

export interface TemplatesProps extends HeadlineProps {}

export interface CheckoutProps extends HeadlineProps {}

