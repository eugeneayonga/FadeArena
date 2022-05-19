import "./home.css";
import BarbersSection from "./components/BarberSection/BarbersSection";
import Banner from "./components/Banner/Banner";
// import GallerySection from "./components/GallerySection/GallerySection";
import ReviewsSection from "./components/ReviewsSection/ReviewsSection";
import LocationSection from "./components/LocationSection/LocationSection";

const Home = () => {
  return (
    <main className="home">
      <Banner />
      <BarbersSection />
      <ReviewsSection />
      <LocationSection />
      {/* <div className="services-section"></div> */}
    </main>
  );
};

export default Home;
