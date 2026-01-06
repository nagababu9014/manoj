import { useEffect } from "react";
import { Link } from "react-router-dom"; 
import "./Services.css";
import {
  FaUtensils, FaMusic, FaBirthdayCake, FaLightbulb,
  FaStar, FaDrum, FaUserTie, FaMagic, FaArrowRight
} from "react-icons/fa";

export default function Services() {
  useEffect(() => {
    // Only run animation logic on desktop to prevent mobile glitches
    if (window.innerWidth > 768) {
      const cards = document.querySelectorAll(".service-card");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              entry.target.style.transitionDelay = `${index * 0.1}s`;
              entry.target.classList.add("reveal");
            }
          });
        },
        { threshold: 0.15 }
      );
      cards.forEach((card) => observer.observe(card));
      return () => observer.disconnect();
    }
  }, []);

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="services-title">Our Premium Services</h2>
        <p className="services-subtitle">Complete event planning & management with elegance</p>

        <div className="services-grid">
          <ServiceCard icon={<FaMagic />} title="Decoration" slug="decoration" />
          <ServiceCard icon={<FaUtensils />} title="Catering" slug="catering" />
          <ServiceCard icon={<FaStar />} title="Special Entries" slug="special-entries" />
          <ServiceCard icon={<FaUserTie />} title="Beauticians" slug="beauticians" />
          <ServiceCard icon={<FaDrum />} title="Kerala & Punjabi Drums" slug="drums" />
          <ServiceCard icon={<FaMusic />} title="Live Orchestra & DJ" slug="orchestra" />
          <ServiceCard icon={<FaBirthdayCake />} title="Birthday & Surprise Parties" slug="birthday" />
          <ServiceCard icon={<FaLightbulb />} title="Lighting & Ambience" slug="lighting" />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, slug }) {
  return (
    <div className="service-card">
      {/* 1. VISUAL CONTENT (Not Clickable directly) */}
      <div className="service-content">
        <div className="service-icon">{icon}</div>
        <h3>{title}</h3>
        
        {/* Visual Button (Just for looks now) */}
        <span className="service-fake-btn">
          View Details <FaArrowRight style={{ marginLeft: "8px" }} />
        </span>
      </div>

      {/* 2. THE MAGIC OVERLAY LINK 
          This covers the entire card. Anywhere you tap hits this link. 
      */}
      <Link 
        to={`/services/${slug}`} 
        className="card-overlay-link" 
        aria-label={`View details for ${title}`}
      />
    </div>
  );
}