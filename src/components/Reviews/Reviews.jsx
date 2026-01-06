import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Reviews.css";

const reviews = [
  {
    name: "Suresh Reddy",
    location: "Rajahmundry",
    review:
      "Manoj Events made our wedding absolutely stunning. Especially the Mangala Snanam decoration was beyond expectations.",
    rating: 5,
  },
  {
    name: "Anusha & Karthik",
    location: "Vijayawada",
    review:
      "From decoration to lighting and orchestra, everything was handled professionally. Highly recommended!",
    rating: 5,
  },
  {
    name: "Praveen Kumar",
    location: "Visakhapatnam",
    review:
      "Best event management team in Andhra Pradesh. Elegant setup and on-time execution.",
    rating: 5,
  },
  {
    name: "Lakshmi Narayana",
    location: "Eluru",
    review:
      "Their special entries and stage decoration were classy and premium. Worth every rupee.",
    rating: 5,
  },
    /* NEW REVIEWS */

  {
    name: "Ramesh Varma",
    location: "Tadepalligudem",
    review:
      "Excellent Mangala Snanam decoration and traditional setup. Manoj Events handled everything perfectly from start to end.",
    rating: 5,
  },
  {
    name: "Srinivas Rao",
    location: "Bhimavaram",
    review:
      "Professional team with creative ideas. The lighting and stage decoration gave a premium feel to our function.",
    rating: 5,
  },
  {
    name: "Priya & Naveen",
    location: "Tanuku",
    review:
      "Beautiful decorations and well-coordinated special entries. Guests were impressed with the arrangements.",
    rating: 5,
  },
  {
    name: "Kiran Kumar",
    location: "Eluru",
    review:
      "Manoj Events delivered exactly what they promised. Clean execution, quality work, and on-time completion.",
    rating: 5,
  },
  {
    name: "Satish Chowdary",
    location: "Rajahmundry",
    review:
      "One of the best event management teams in the region. Premium decorations and very cooperative staff.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews-header">
        <h2>What Our Clients Say</h2>
        <p>Trusted by families across Andhra Pradesh</p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="reviews-slider"
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="review-card">
              
              {/* STARS */}
              <div className="review-stars">
                {"★".repeat(item.rating)}
              </div>

              <p className="review-text">“{item.review}”</p>

              <div className="review-footer">
                <h4>{item.name}</h4>
                <span>{item.location}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
