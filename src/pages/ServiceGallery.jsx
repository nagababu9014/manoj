import { useParams, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import "./ServiceGallery.css";

/* DECORATION IMAGES */
import decor1 from "../assets/services/decoration/img1.jpg";
import decor2 from "../assets/services/decoration/img2.jpg";
import decor3 from "../assets/services/decoration/img3.jpg";
import decor4 from "../assets/services/decoration/img4.jpg";
import decor5 from "../assets/services/decoration/img5.jpg";
import decor6 from "../assets/services/decoration/img6.jpg";
import decor7 from "../assets/services/decoration/img7.jpg";
import decor8 from "../assets/services/decoration/img8.jpg";
import decor9 from "../assets/services/decoration/img9.jpg";
import decor10 from "../assets/services/decoration/img10.jpg";

/* MARRIAGE IMAGES */
import mar1 from "../assets/services/decoration/marriage/img1.jpg";
import mar2 from "../assets/services/decoration/marriage/img2.jpg";
import mar3 from "../assets/services/decoration/marriage/img3.jpg";
import mar4 from "../assets/services/decoration/marriage/img4.jpg";
import mar5 from "../assets/services/decoration/marriage/img5.jpg";
import mar6 from "../assets/services/decoration/marriage/img6.jpg";
import mar7 from "../assets/services/decoration/marriage/img7.jpg";
import mar8 from "../assets/services/decoration/marriage/img8.jpg";
import mar9 from "../assets/services/decoration/marriage/img9.jpg";
import mar10 from "../assets/services/decoration/marriage/img17.jpg";

import cat1 from "../assets/services/catering/img1.jpg";
import cat2 from "../assets/services/catering/img2.jpg";
import entry1 from "../assets/services/specialentry/img1.jpg";
import entry2 from "../assets/services/specialentry/img2.jpg";
import beauty1 from "../assets/services/beauty/img1.jpg";
import drum1 from "../assets/services/drums/img1.jpg";
import music1 from "../assets/services/music/img1.jpg";
import light1 from "../assets/services/lighting/img1.jpg";

const serviceImages = {
  decoration: [
    { id: "DEC-001", src: decor1 },
    { id: "DEC-002", src: decor2 },
    { id: "DEC-003", src: decor3 },
    { id: "DEC-004", src: decor4 },
    { id: "DEC-005", src: decor5 },
    { id: "DEC-006", src: decor6 },
    { id: "DEC-007", src: decor7 },
    { id: "DEC-008", src: decor8 },
    { id: "DEC-009", src: decor9 },
    { id: "DEC-010", src: decor10 },

    { id: "DEC-MAR-001", src: mar1 },
    { id: "DEC-MAR-002", src: mar2 },
    { id: "DEC-MAR-003", src: mar3 },
    { id: "DEC-MAR-004", src: mar4 },
    { id: "DEC-MAR-005", src: mar5 },
    { id: "DEC-MAR-006", src: mar6 },
    { id: "DEC-MAR-007", src: mar7 },
    { id: "DEC-MAR-008", src: mar8 },
    { id: "DEC-MAR-009", src: mar9 },
    { id: "DEC-MAR-010", src: mar10 },
  ],

  catering: [
    { id: "CAT-001", src: cat1 },
    { id: "CAT-002", src: cat2 },
  ],

  "special-entries": [
    { id: "SE-001", src: entry1 },
    { id: "SE-002", src: entry2 },
  ],

  beauticians: [{ id: "BEAUTY-001", src: beauty1 }],
  drums: [{ id: "DRUM-001", src: drum1 }],
  orchestra: [{ id: "MUSIC-001", src: music1 }],

  birthday: [
    { id: "BDAY-001", src: decor1 },
    { id: "BDAY-002", src: decor2 },
    { id: "BDAY-003", src: decor3 },
    { id: "BDAY-004", src: decor4 },
    { id: "BDAY-005", src: decor5 },
    { id: "BDAY-006", src: decor6 },
    { id: "BDAY-007", src: decor7 },
    { id: "BDAY-008", src: decor8 },
    { id: "BDAY-009", src: decor9 },
    { id: "BDAY-010", src: decor10 },
  ],

  lighting: [{ id: "LIGHT-001", src: light1 }],
};



export default function ServiceGallery() {
  const { service } = useParams();
  const navigate = useNavigate();
  const images = serviceImages[service] || [];

  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewerImg, setViewerImg] = useState(null);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    location: "",
  });

  useEffect(() => {
    document.body.style.overflow = showForm || viewerImg ? "hidden" : "auto";
  }, [showForm, viewerImg]);

  const openForm = (item) => {
    setSelectedItem(item);
    setShowForm(true);
  };

  const sendToWhatsApp = () => {
  const phone = "918142133797";

  // full image URL (important)
  const imageLink = `${window.location.origin}${selectedItem.src}`;

  const text = `
Hello Manoj Events 👋
I want to book a service.

Service: ${service}
Image ID: ${selectedItem.id}

Image Link:
${imageLink}

Customer Details:
Name: ${form.name}
Mobile: ${form.mobile}
Location: ${form.location}
  `.trim();

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
    "_blank"
  );

  setShowForm(false);
  setForm({ name: "", mobile: "", location: "" });
};

  return (
    <>
      {/* 🔙 BACK BAR */}
      <div className="service-back-bar">
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
        <h2 className="service-title">{service?.replace("-", " ")}</h2>
      </div>

      {/* 🖼️ GALLERY */}
      <section className="service-gallery">
        <div className="gallery-grid">
          {images.map((item) => (
            <div className="image-card" key={item.id}>
              <img
                src={item.src}
                alt={item.id}
                onClick={() => setViewerImg(item.src)}
              />

              <button
                className="book-btn"
                onClick={() => openForm(item)}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 🔍 IMAGE VIEWER */}
    {viewerImg && (
  <div className="image-viewer">
    <button
      className="close-btn"
      onClick={() => setViewerImg(null)}
    >
      ✕
    </button>

    <img src={viewerImg} alt="full-view" />
  </div>
)}

      {showForm && (
  <div className="booking-modal">
    <div className="booking-box">
      
      <button
        className="close-btn form-close"
        onClick={() => setShowForm(false)}
      >
        ✕
      </button>

      <h3>Book This Service</h3>

      <input
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Mobile Number"
        value={form.mobile}
        onChange={(e) => setForm({ ...form, mobile: e.target.value })}
      />

      <input
        placeholder="Event Location"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      />

      <div className="form-actions">
        <button onClick={sendToWhatsApp}>Send to WhatsApp</button>
        <button className="cancel" onClick={() => setShowForm(false)}>
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

    </>
  );
}