import "./Contact.css";
import { FaInstagram, FaFacebookF, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const event = e.target.event.value;
    const address = e.target.address.value;

    const message = `Hello Manoj Events 👋
Name: ${name}
Event: ${event}
Event Location: ${address}`;

    const whatsappUrl = `https://wa.me/918142133797?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="contact">
      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Contact Manoj Events</h2>
          <p>
            Premium event management services across Andhra Pradesh,
            delivering elegant and unforgettable celebrations.
          </p>

          <div className="contact-details">
            <div>
              <FaMapMarkerAlt />
              <span>Andhra Pradesh, Telangana, India</span>
            </div>
            <div>
              <FaPhoneAlt />
              <span>+91 81421 33797</span>
            </div>
            <div>
              <FaEnvelope />
              <span>manojevents797@gmail.com</span>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="contact-social">
  <a
    href="https://www.instagram.com/manojevents797?utm_source=qr&igsh=MWoyYTRidHJhOG80Zg=="
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a>            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <h3>Plan Your Event</h3>

          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="text" name="event" placeholder="Event Type (Wedding, Birthday…)" required />
            <textarea name="address" placeholder="Event Location" required />

            <button type="submit">
              Contact Us on WhatsApp
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
