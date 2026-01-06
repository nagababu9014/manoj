import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServiceGallery from "./pages/ServiceGallery"; // ✅ ADD THIS

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* ✅ NEW SERVICE PAGE */}
        <Route path="/services/:service" element={<ServiceGallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
