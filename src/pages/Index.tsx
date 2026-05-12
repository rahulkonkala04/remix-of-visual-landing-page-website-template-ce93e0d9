import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Categories from "@/components/Categories";
import Bestsellers from "@/components/Bestsellers";
import TrustBadges from "@/components/TrustBadges";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="grain min-h-screen bg-[var(--graphite)] text-[var(--off-white)]">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Categories />
        <Bestsellers />
        <TrustBadges />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
