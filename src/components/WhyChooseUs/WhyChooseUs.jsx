import { useEffect, useRef, useState } from "react";
import "./WhyChooseUs.css";

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1200;
          const step = Math.ceil(end / (duration / 16));

          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);

          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <h3 ref={ref}>
      {count}
      {suffix}
    </h3>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="why">
      <div className="why-container">
        
        {/* LEFT */}
        <div className="why-left">
          <h2>Why Choose Manoj Events</h2>
          <p className="why-sub">
            Trusted event planners delivering premium celebrations
            across Andhra Pradesh.
          </p>

          <p>
            With over <strong>6+ years of experience</strong>, Manoj Events has
            successfully organized <strong>100+ premium events</strong>,
            specializing in Mangala Snanam decorations, weddings,
            birthdays, and private celebrations.
          </p>

          <p>
            From concept to execution, we focus on elegance, tradition,
            creativity, and flawless delivery — making every event
            truly memorable.
          </p>
        </div>

        {/* RIGHT COUNTERS */}
        <div className="why-stats">
          <div className="stat-card">
            <Counter end={6} suffix="+" />
            <span>Years of Experience</span>
          </div>

          <div className="stat-card">
            <Counter end={100} suffix="+" />
            <span>Events Organized</span>
          </div>

          <div className="stat-card">
            <Counter end={15} suffix="+" />
            <span>Cities Served</span>
          </div>

          <div className="stat-card">
            <Counter end={100} suffix="%" />
            <span>Client Satisfaction</span>
          </div>
        </div>

      </div>
    </section>
  );
}
