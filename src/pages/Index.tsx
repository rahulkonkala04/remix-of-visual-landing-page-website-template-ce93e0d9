import AnnouncementRibbon from "@/components/AnnouncementRibbon";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import DailyStory from "@/components/DailyStory";
import Bestsellers from "@/components/Bestsellers";
import BrandStatement from "@/components/BrandStatement";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1A1A]">
      <AnnouncementRibbon />
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <DailyStory />
        <Bestsellers />
        <BrandStatement />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
