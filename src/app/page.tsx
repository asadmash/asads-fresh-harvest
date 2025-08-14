
import Hero from "../components/Hero";
import OurProducts from "../components/OurProducts";
import About from "../components/About";
import SeasonalOffer from "../components/SeasonalOffer";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";


export default function Home() {
  return (
    <div>
      <main className="">
        <Hero />
        <OurProducts />
        <About />
        <SeasonalOffer />
        <Testimonial />
        <Blog />
      </main>
    </div>
  );
}
