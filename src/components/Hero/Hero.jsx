import { useRef, useState, useEffect } from "react";
import "./Hero.css";
import video1 from "../../assets/vid.mp4";
import video2 from "../../assets/vid1.mp4";

export default function Hero() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [activeVideo, setActiveVideo] = useState(1); // Start with video 1

  // Function to handle switching when a video ends
  const handleVideoEnd = (nextVideoId) => {
    // Determine which ref is next
    const nextRef = nextVideoId === 1 ? videoRef1 : videoRef2;
    
    // Reset and Play the next video immediately
    if (nextRef.current) {
      nextRef.current.currentTime = 0;
      nextRef.current.play();
    }
    
    // Update state to trigger CSS fade transition
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
          className={`video-player ${activeVideo === 1 ? "active" : ""}`}
          onEnded={() => handleVideoEnd(2)} // When V1 ends, switch to V2
        >
          <source src={video1} type="video/mp4" />
        </video>

        {/* VIDEO 2 */}
        <video
          ref={videoRef2}
          muted
          playsInline
          className={`video-player ${activeVideo === 2 ? "active" : ""}`}
          onEnded={() => handleVideoEnd(1)} // When V2 ends, switch to V1
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