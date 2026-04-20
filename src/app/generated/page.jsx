import NavbarSection from "@/components/generated/NavbarSection";
import HeroSection from "@/components/generated/HeroSection";
import TrustSection from "@/components/generated/TrustSection";
import ServicesSection from "@/components/generated/ServicesSection";
import ProcessSection from "@/components/generated/ProcessSection";
import PortfolioSection from "@/components/generated/PortfolioSection";
import TestimonialsSection from "@/components/generated/TestimonialsSection";
import ContactSection from "@/components/generated/ContactSection";
import FooterSection from "@/components/generated/FooterSection";

export const metadata = {
  title: "스페이스온 | 신뢰할 수 있는 인테리어 전문 기업",
  description:
    "15년 경력 인테리어 전문 기업 스페이스온. 3D 사전 확인·투명 견적·2년 A/S 보증으로 1,200건 이상 완공.",
};

export default function GeneratedPage() {
  return (
    <>
      <NavbarSection />
      <main>
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}
