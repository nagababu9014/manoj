import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Workflow from "../components/Workflow/Workflow";
import Services from "../components/Services/Services";
import Gallery from "../components/Gallery/Gallery";
import About from "../components/About/About";
import Reviews from "../components/Reviews/Reviews";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="workflow">
        <Workflow />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="reviews">
        <Reviews />
      </section>

      <section id="whyus">
        <WhyChooseUs />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}
