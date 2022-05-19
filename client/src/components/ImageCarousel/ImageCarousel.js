import "./imageCarousel.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useRef, useState } from "react";

const ImageCarousel = ({ images }) => {
  const toNextImage = (visibleImg, setVisibleImg, carouselRef) => {
    if (visibleImg === lastImageIdx) {
      setVisibleImg(0);
    } else {
      const next = visibleImg + 1;
      setVisibleImg(next);
    }
    clearInterval(carouselRef);
  };

  const toPrevImage = (visibleImg, setVisibleImg, carouselRef) => {
    if (visibleImg === 0) {
      setVisibleImg(lastImageIdx);
    } else {
      const previous = visibleImg - 1;
      setVisibleImg(previous);
    }
    clearInterval(carouselRef);
  };

  const [visibleImg, setVisibleImg] = useState(0);
  const counterRef = useRef();
  const lastImageIdx = images.length - 1;
  useEffect(() => {
    const carouselCounter = setInterval(
      () => toNextImage(visibleImg, setVisibleImg),
      3000
    );
    counterRef.current = carouselCounter;
    return () => {
      clearInterval(carouselCounter);
    };
  });

  const handleArrowClick = (e) => {
    if (e.target.id === "back-arrow") {
      toPrevImage(visibleImg, setVisibleImg);
    } else if (e.target.id === "forward-arrow") {
      toNextImage(visibleImg, setVisibleImg);
    } else {
      throw new Error("WTF?");
    }
  };

  return (
    <div className="carousel">
      <ArrowBackIosIcon
        id="back-arrow"
        className="arrow"
        fontSize="large"
        onClick={handleArrowClick}
      />
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="review"
          className={visibleImg === i ? "visible" : ""}
        />
      ))}
      <ArrowForwardIosIcon
        id="forward-arrow"
        className="arrow"
        fontSize="large"
        onClick={handleArrowClick}
      />
    </div>
  );
};

export default ImageCarousel;
