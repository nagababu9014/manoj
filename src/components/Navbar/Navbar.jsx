import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goldText =
    "bg-gradient-to-r from-[#996515] via-[#d4af37] to-[#996515] bg-clip-text text-transparent font-bold tracking-wide";

  const goldBtn =
    "bg-gradient-to-r from-[#d4af37] via-[#f5d36b] to-[#d4af37] text-black font-extrabold shadow-[0_0_15px_rgba(212,175,55,0.4)] border border-[#b8860b] hover:shadow-[0_0_25px_rgba(212,175,55,0.7)] hover:scale-105 active:scale-95 transition-all duration-300";

  const navItems = [
    { label: "Home", target: "home" },
    { label: "Workflow", target: "workflow" },
    { label: "Services", target: "services" },
    { label: "Gallery", target: "gallery" },
    { label: "About", target: "about" },
    { label: "Reviews", target: "reviews" },
    { label: "Why Choose Us", target: "whyus" },
  ];

  const scrollTo = (id) => {
    // ✅ If NOT on home page → go home first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#d4af37]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Manoj Events Logo"
            className="w-20 h-20 object-contain rounded-full border border-[#d4af37]/50 p-0.5"
          />
          <span className={`text-2xl font-extrabold uppercase ${goldText}`}>
            Manoj Events
          </span>
        </button>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => scrollTo(item.target)}
                className={`relative ${goldText} after:content-[''] after:absolute after:left-0 after:-bottom-1 
                after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#996515] after:via-[#d4af37] after:to-[#996515]
                after:transition-all after:duration-300 hover:after:w-full`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo("contact")}
              className={`px-7 py-2.5 rounded-full uppercase text-xs ${goldBtn}`}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-3xl text-[#d4af37]"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-[#d4af37]/30 shadow-xl transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 text-lg font-bold">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => scrollTo(item.target)}
                className={goldText}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo("contact")}
              className={`px-10 py-3 rounded-full uppercase text-sm ${goldBtn}`}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
