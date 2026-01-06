import { useState } from "react";
import "./Gallery.css";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
const images = [img1, img6, img7,img8,img2, img3, img4, img5];

export default function Gallery() {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <section className="premium-gallery">
      <div className="gallery-header">
        <h2>Our Events Gallery</h2>
        <p>Moments we crafted with elegance & perfection</p>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-card"
            onClick={() => setActiveImg(img)}
          >
            <img src={img} alt={`Event ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* FULLSCREEN MODAL */}
      {activeImg && (
        <div className="gallery-modal" onClick={() => setActiveImg(null)}>
          <img src={activeImg} alt="Event Preview" />
          <span className="close-btn">✕</span>
        </div>
      )}
    </section>
  );
}
