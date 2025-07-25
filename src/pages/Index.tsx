import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Articles from "@/components/Articles";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Work />
      <Articles />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
