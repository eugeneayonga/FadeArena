import "./gallerySection.css";
import galleryImg1 from "../../../../assets/images/gallery-images/ex1.png";
import galleryImg2 from "../../../../assets/images/gallery-images/ex2.png";
import galleryImg3 from "../../../../assets/images/gallery-images/ex3.png";

const GallerySection = () => {
  return (
    <div className="gallery-section">
      <h2>GALLERY</h2>
      <div className="gallery-images">
        <img src={galleryImg1} alt="1" />
        <img src={galleryImg2} alt="2" />
        <img src={galleryImg3} alt="3" />
        <img src={galleryImg1} alt="4" />
        <img src={galleryImg2} alt="5" />
        {/* <img src={galleryImg3} alt="6" /> */}
      </div>
    </div>
  );
};

export default GallerySection;
