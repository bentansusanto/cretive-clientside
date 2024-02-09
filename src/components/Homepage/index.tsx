import AboutSection from "./AboutSection";
import CTASection from "./CTASection";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import PackagesSection from "./PackagesSection";
import Portofolio from "./Portofolio";
import TestimoniSection from "./TestimoniSection";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Portofolio />
      <PackagesSection />
      <TestimoniSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Homepage;
