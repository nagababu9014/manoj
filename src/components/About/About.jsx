import "./About.css";
import aboutImg from "../../assets/about.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        
        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src={aboutImg} alt="Manoj Events Decoration in Andhra Pradesh" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <h2>About Manoj Events</h2>

          <p className="about-highlight">
            One of the best event management companies in Andhra Pradesh,
            delivering elegant & unforgettable celebrations.
          </p>

          <p>
            <strong>Manoj Events</strong> is a premium event management and
            decoration company based in <strong>Andhra Pradesh</strong>,
            known for delivering high-quality traditional and modern events.
            We are especially renowned for our expertise in
            <strong> Mangala Snanam Decorations</strong>,
            wedding decorations, birthday celebrations, and private events.
          </p>

          <p>
            We proudly serve multiple locations including
            <strong> Rajahmundry, Visakhapatnam (Vizag), Vijayawada,
            Tadepalligudem, Tanuku, Bhimavaram, Ravulapalem,
            Nidadavolu, Eluru</strong> and surrounding areas.
            Our team is also available for events
            <strong> across Andhra Pradesh</strong>.
          </p>

          <p>
            From premium stage decorations and customized themes to
            catering services, live orchestra & DJ, special bridal entries,
            beauticians, Kerala & Punjabi drums, and advanced lighting & ambience —
            Manoj Events offers complete end-to-end event solutions
            with professionalism, creativity, and attention to detail.
          </p>

          <div className="about-services">
            <span>Wedding Decoration</span>
            <span>Mangala Snanam Decoration</span>
            <span>Catering Services</span>
            <span>Special Entries</span>
            <span>Live Orchestra & DJ</span>
            <span>Lighting & Ambience</span>
          </div>
        </div>

      </div>
    </section>
  );
}
