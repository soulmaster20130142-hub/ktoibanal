import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import HeritageSection from "@/components/HeritageSection";
import StatsRibbon from "@/components/StatsRibbon";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import QuoteDivider from "@/components/QuoteDivider";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HeritageSection />
      <StatsRibbon />
      <AmenitiesSection />
      <GallerySection />
      <QuoteDivider />
      <FAQSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
