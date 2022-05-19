import "./reviewsSection.css";
import r1 from "../../../../assets/images/review-images/booksy-reviews-1.jpg";
import r2 from "../../../../assets/images/review-images/booksy-reviews-2.jpg";
import r3 from "../../../../assets/images/review-images/booksy-reviews-3.jpg";
import r4 from "../../../../assets/images/review-images/booksy-reviews-4.jpg";
import ImageCarousel from "../../../../components/ImageCarousel/ImageCarousel";

const REVIEW_IMAGES = [r1, r2, r3, r4];

const ReviewsSection = () => {
  return (
    <section className="reviews">
      <ImageCarousel images={REVIEW_IMAGES} />
    </section>
  );
};

export default ReviewsSection;
