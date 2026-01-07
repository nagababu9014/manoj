import { useRef, useState } from "react";
import "./Hero.css";
import video1 from "../../assets/vid.mp4";
import video2 from "../../assets/vid2.mp4";
import poster from "../../assets/poster.jpg"; // 👈 add your poster image here

export default function Hero() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [activeVideo, setActiveVideo] = useState(1);

  const handleVideoEnd = (nextVideoId) => {
    const nextRef = nextVideoId === 1 ? videoRef1 : videoRef2;
    if (nextRef.current) {
      nextRef.current.currentTime = 0;
      nextRef.current.play();
    }
    setActiveVideo(nextVideoId);
  };

  return (
    <section className="hero">
      <div className="hero-video-wrapper">
        
        {/* VIDEO 1 */}
        <video
          ref={videoRef1}
          autoPlay
          muted
          playsInline
          preload="metadata"
          poster={poster}              // ✅ poster added
          className={`video-player ${activeVideo === 1 ? "active" : ""}`}
          onEnded={() => handleVideoEnd(2)}
        >
          <source src={video1} type="video/mp4" />
        </video>

        {/* VIDEO 2 */}
        <video
          ref={videoRef2}
          muted
          playsInline
          preload="metadata"
          poster={poster}              // ✅ poster added
          className={`video-player ${activeVideo === 2 ? "active" : ""}`}
          onEnded={() => handleVideoEnd(1)}
        >
          <source src={video2} type="video/mp4" />
        </video>

      </div>

      <div className="hero-overlay">
        <h1>Premium Traditional Event Management</h1>
        <p>Catering • Live Orchestra • Marriage Decoration</p>
        <button>Book Your Event</button>
      </div>
    </section>
  );
}
