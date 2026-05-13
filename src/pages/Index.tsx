import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Story from "@/components/Story";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="grain min-h-screen bg-[var(--graphite)] text-[var(--off-white)]">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Story />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
