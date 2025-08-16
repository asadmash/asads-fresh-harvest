import Hero from "../components/ui/Hero";
import OurProducts from "@/components/ui/OurProducts";
import About from "../components/ui/About";
import SeasonalOffer from "../components/ui/SeasonalOffer";
import Testimonial from "../components/ui/Testimonial";
import Blog from "../components/ui/Blog";
import AuthModalHandler from "@/components/partials/AuthModalHandler";
import SProvider from "@/components/partials/SeasonProvider";

export default function Home() {
  return (
    <div>
      <main className="">
        <Hero />
        <SProvider>
          <OurProducts />
        </SProvider>
        <About />
        <SeasonalOffer />
        <Testimonial />
        <Blog />
        <AuthModalHandler />
      </main>
    </div>
  );
}
