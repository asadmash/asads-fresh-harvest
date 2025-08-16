import Hero from "../components/ui/Hero";
import OurProducts from "@/components/ui/OurProducts";
import About from "../components/ui/About";
import SeasonalOffer from "../components/ui/SeasonalOffer";
import Testimonial from "../components/ui/Testimonial";
import Blog from "../components/ui/Blog";
import AuthModalHandler from "@/components/partials/AuthModalHandler";
import SProvider from "@/components/partials/SeasonProvider";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div>
      <main className="">
        <div id="home">
          <Hero />
        </div>
        <div id="shop">
          <SProvider>
            <OurProducts />
          </SProvider>
        </div>
        <div id="about-us">
          <About />
        </div>
        <SeasonalOffer />
        <Testimonial />
        <div id="blog">
          <Blog />
        </div>
        <AuthModalHandler />
      </main>
    </div>
  );
}
