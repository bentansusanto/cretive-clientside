import {
  AboutProps,
  CTAProps,
  FAQProps,
  HeroProps,
  PackageProps,
  PortoProps,
  TestimoniProps,
} from "@/utils/types";

export const dataHero: HeroProps = {
  title: "Tingkatkan Pelanggan Dengan Cepat, Tanpa Ribet!",
  description:
    "Yuk, cek domainmu sekarang dan pilih paket website yang anda perlukan. Website yang kami buat menyesuaikan kebutuhan anda. 100% garansi uang kembali jika tidak cocok.",
  image: "bg-hero-section.webp",
};

export const dataAbout: AboutProps = {
  subtitle: "Why choose us?",
  title: "Yang Membedakan Kami Dengan Yang Lain.",
  description:
    "Kami bukan hanya sekadar pembuat website, kami juga  harus memahami bahwa setiap bisnis unik dan memiliki kebutuhan khusus. Dengan pendekatan yang terfokus pada inovasi, kami menawarkan sejumlah layanan eksklusif untuk memberdayakan bisnis Anda.",
  service: [
    {
      icon: "icon-guarantee.svg",
      nameService: "Garansi Uang Kembali",
      desc: "Kami yakin dengan kualitas layanan kami. Jika Anda tidak puas  kami akan  anda uang anda sepenuhnya.",
    },
    {
      icon: "icon-maintenance.svg",
      nameService: "Maintenance Secara Berkala",
      desc: "Memelihara setelah peluncuran untuk menjaga kinerja website menjadi optimal.",
    },
    {
      icon: "icon-design.svg",
      nameService: "Desain Khusus",
      desc: "Setiap elemen website dirancang sesuai dengan kebutuhan bisnis Anda, membuat supaya user-friendly.",
    },
    {
      icon: "icon-seo.svg",
      nameService: "Strategi Konten Berkualitas",
      desc: "Konten yang menarik, relevan, dan SEO untuk menarik perhatian target audiens dan meningkatkan traffic",
    },
  ],
};

export const dataPortofolio: PortoProps = {
  subtitle: "Portofolio",
  title: "Project Terbaru Kami Kerjakan.",
  porto: [
    {
      thumbnail: "Medcraft-Clinic.webp",
      namePorto: "Medcraft Clinic",
      link: "https://softorgin.com/medcraft-clinic",
    },
    {
      thumbnail: "Revact.webp",
      namePorto: "Revact",
      link: "https://softorgin.com/revact",
    },
    {
      thumbnail: "Landingpage-go-rekber.webp",
      namePorto: "Go Rekber",
      link: "https://softorgin.com/go-rekber",
    },
    {
      thumbnail: "Website-Disorder.webp",
      namePorto: "Website Disorder",
      link: "https://softorgin.com/medcraft-clinic",
    },
    {
      thumbnail: "Website-Nexsvibe.webp",
      namePorto: "Website Nexsvibe",
      link: "https://softorgin.com/medcraft-clinic",
    },
  ],
};

export const dataPackage: PackageProps = {
  subtitle: "Our Package",
  title: "Pilih Paket yang Cocok Buatmu!",
  package: [
    {
      namePackage: "Landingpage",
      price: 599900,
      benefit: [
        "Pengerjaan 1 minggu",
        "Unlimited Revisi",
        "Free SSL Certficate",
        "Free Domain dan Hosting 1 tahun (.com, my.id)",
        "Desain Premium",
        "Elementor Pro",
        "Wordpress",
        "Lite Speed",
        "SEO",
        "Free Pasang Facebook Pixel, Google Pixel",
        "Include Tutorial Edit Content",
      ],
    },
    {
      namePackage: "Web Company Profile",
      price: 1999900,
      benefit: [
        "Pengerjaan 15 hari",
        "Desain  Premium",
        "Unlimited Revisi",
        "Free SSL Certficate",
        "Free Domain dan Hosting 1 tahun (.com, my.id)",
        "Elementor Pro",
        "Lite Speed",
        "Wordpress / React Js",
        "SEO",
        "Free Pasang Facebook Pixel, Google Pixel",
        "Include Tutorial Edit Content",
      ],
    },
    {
      namePackage: "Web Application",
      price: 9900000,
      benefit: [
        "Pengerjaan 1 - 3 bulan",
        "Revisi maksimal 3 kali",
        "Desain Premium",
        "VPS (2 Cores vCPU, RAM 8Gb, 100Gb NVMe SSD)",
        "Free Domain 1 tahun (.com, my.id)",
        "MySQL/PostgreSQL/MongoDB",
        "NodeJs/Laravel",
        "ReactJs, NextJs, VueJs",
        "SEO",
        "Free Pasang Facebook Pixel, Google Pixel",
        "Include Documentasi dan Testing",
      ],
    },
  ],
  maintenance: [
    {
      namePackage: "Maintenance Landingpage",
      price: 150000,
      benefit: [
        "Pengerjaan 1 - 3 hari",
        "Maintenance Content",
        "OUpdate Facebook Pixel",
        "Optimasi Landingpage",
      ],
    },
    {
      namePackage: "Maintenance Web Company Profile",
      price: 600000,
      benefit: [
        "Pengerjaan 5 hari",
        "Maintenance Content",
        "Update Facebook Pixel",
        "Optimasi Web Company Profile",
      ],
    },
    {
      namePackage: "Maintenance Web Appliication",
      price: 5000000,
      benefit: [
        "Penambahan fitur maksimal 2 fitur",
        "Optimasi Website",
        "Optimasi Database",
        "Pengerjaan 2 - 3 minggu",
      ],
    },
  ],
};

export const dataTestimoni: TestimoniProps = {
  subtitle: "What They Say",
  title: "Kata Mereka Dengan Hasil dari Evocq.",
  description:
    "Kami bukan hanya sekadar pembuat website, kami juga  harus memahami bahwa setiap bisnis unik dan memiliki kebutuhan khusus. ",
  testimoni: [
    {
      name: "Benny",
      package: "Landingpage",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatem!",
      image: "",
    },
    {
      name: "Benny",
      package: "Landingpage",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatem!",
      image: "",
    },
    {
      name: "Benny",
      package: "Landingpage",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatem!",
      image: "",
    },
    {
      name: "Benny",
      package: "Landingpage",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatem!",
      image: "",
    },
    {
      name: "Benny",
      package: "Landingpage",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatem!",
      image: "",
    },
    {
      name: "Benny",
      package: "Landingpage",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatem!",
      image: "",
    },
    {
      name: "Benny",
      package: "Landingpage",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatem!",
      image: "",
    },
    {
      name: "Benny",
      package: "Landingpage",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, voluptatem!",
      image: "",
    },
  ],
};

export const dataFAQ: FAQProps = {
  subtitle: "Tanya Cretive",
  title: "Frequently Asked Questions",
  faq: [
    {
      question: "Bagaimana sistem pembayaran paket website ?",
      answer: [
        "Kami menggunakan 2 - 3 kali pembayaran",
        "Paket landingpage dan website company profile pembayaran dilakukan 2 kali",
        "Paket Web Application pembayaran dilakukan 3 kali",
        "Sebelum melakukan pembayaran kami akan mengirimkan surat perjanjian kerjasama(dikirimkan dipembayaran pertama) dan juga invoice pembayaran.",
      ],
    },
    {
      question:
        "Revisi bisa dilakukan berapa kali dan jenis revisi yang diterima?",
      answer: [
        "Untuk paket landingpage dan website company profile revisi dilakukan unlimited dan jenis revisi yang diterima adalah revisi minor seperti: gambar, video, dan content",
        "Untuk paket webapp revisi dilakukan 3 kali dan jenis revisi yang diterima adalah revisi bug minor seperti: Button yang tidak berfungsi, Perhitungan angka yang salah, Revisi Content, Revisi gambar, video di website",
      ],
    },
    {
      question: "Jenis website yang tidak kami layani ?",
      answer: [
        "Kami tidak melayani jenis website seperti pinjol, judi online, trading, dan caleg",
      ],
    },
    {
      question: "Jenis website yang tidak kami layani ?",
      answer: [
        "Kami tidak melayani jenis website seperti pinjol, judi online, trading, dan caleg",
      ],
    },
    {
      question: "Bagaimana saya mengetahui progress website saya ?",
      answer: [
        "Progress website akan di infokan setiap 2 hari sekali kecuali sabtu dan minggu",
        "Progress website juga bisa dilihat di trello(akses ke trello akan di kirimkan setelah melakukan pembayaran pertama)",
      ],
    },
  ],
};

export const dataCTA: CTAProps = {
  title: "Ayo Integrasikan Bisnismu ke Website Jualan.",
  benefit: [
    "Meningkatkan penjualan",
    "Memudahkan kelola bisnis",
    "Terhindar dari serangan hacker",
    "Meningkatkan konversi penjualan",
  ],
  image: "bg-cta-section.svg",
};
