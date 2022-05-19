import { useLayoutEffect, useRef } from "react";
import { ReactComponent as PsbLogo } from "../../assets/images/psb-logo.svg";
import { ReactComponent as PsbText } from "../../assets/images/psb-text.svg";

const animateStache = (ref) => {
  const stache = ref.current.querySelector("#stache");
  stache.style.animation = "stache-animation 1s";
};

const animateCircleStache = (ref) => {
  const circleStache = ref.current.querySelector("#circle-stache");
  circleStache.style.animation = "rotate-circle-stache 2s";
};

const animateScissors = (ref) => {
  const scissors = ref.current.querySelector("#scissors");
  scissors.style.animation = "rotate-scissors 2s";
};

const setupAnimations = (ref, interval) => {
  const logoWrapper = ref.current;
  logoWrapper.addEventListener("animationend", ({ target }) => {
    target.style.animation = "";
  });
  logoWrapper.addEventListener("click", (e) => {
    // console.log(`e.target`, e.target);
    // console.log(`e.currentTarget`, e.currentTarget);
    if (e.target.id === "stache") {
      animateStache(ref);
      return;
    } else if (e.target.id === "circle" || e.target.id === "scissors") {
      animateCircleStache(ref);
      animateScissors(ref);
    }
  });
};

const LogoSVG = () => {
  const wrapperRef = useRef();
  useLayoutEffect(() => {
    const wiggle = setInterval(() => {
      animateStache(wrapperRef);
    }, 15000);
    setupAnimations(wrapperRef);
    return () => {
      clearInterval(wiggle);
    };
  }, []);
  return (
    <div className="banner-logo-text">
      <span ref={wrapperRef} className="logo-wrapper">
        <PsbLogo className="logo" />
      </span>
      <PsbText className="text" />
    </div>
  );
};

export default LogoSVG;
