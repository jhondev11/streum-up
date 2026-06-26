import { useState } from "react";
import { LanguageProvider } from "./i18n/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Plans from "./components/Plans";
import Covered from "./components/Covered";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import FloatingWhatsapp from "./components/FloatingWhatsapp";


export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentPage("home");
    window.scrollTo(0, 0);
  };

  return (
    <LanguageProvider>
      <Header />
      <main>
        {currentPage === "home" && (
          <>
            <Hero />
            <Plans />
            <Covered />
            <WhyUs />
            <Process />
            <Faq />
            <FinalCta />
          </>
        )}
        {currentPage === "privacy" && <PrivacyPolicy onBack={handleBack} />}
        {currentPage === "terms" && <TermsConditions onBack={handleBack} />}
        {currentPage === "cookies" && <CookiesPolicy onBack={handleBack} />}
      </main>
      <Footer onNavigate={handleNavigate} />
      <FloatingWhatsapp />
    </LanguageProvider>
  );
}
