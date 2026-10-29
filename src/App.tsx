import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Tours from "./components/Tours";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import type { Category, Tour } from "./data/content";

export default function App() {
  const [category, setCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  const scrollToTours = () => {
    document.getElementById("tours")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSearch = (q: string) => {
    setCategory("All");
    setSearch(q);
    scrollToTours();
  };

  const openBooking = (tour: Tour | null = null) => {
    setSelectedTour(tour);
    setModalOpen(true);
  };

  const closeBooking = useCallback(() => setModalOpen(false), []);

  return (
    <div className="font-sans">
      <Navbar onBook={() => openBooking(null)} />
      <main>
        <Hero onSearch={handleSearch} />
        <Destinations onSelect={handleSearch} />
        <Tours
          category={category}
          onCategoryChange={(c) => {
            setCategory(c);
            setSearch("");
          }}
          search={search}
          onClearSearch={() => setSearch("")}
          onBook={(t) => openBooking(t)}
        />
        <WhyUs />
        <Testimonials />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <BookingModal open={modalOpen} tour={selectedTour} onClose={closeBooking} />
    </div>
  );
}
