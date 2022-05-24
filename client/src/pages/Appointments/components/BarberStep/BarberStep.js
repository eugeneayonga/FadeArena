import defaultProfileImage from "../../../../assets/images/barber-images/default_profile_image.png";
import bImg1 from "../../../../assets/images/barber-images/barber1.png";
import bImg2 from "../../../../assets/images/barber-images/barber2.png";
import bImg3 from "../../../../assets/images/barber-images/barber3.png";
import bImg4 from "../../../../assets/images/barber-images/barber4.png";
import bImg5 from "../../../../assets/images/barber-images/barber5.png";
import bImg6 from "../../../../assets/images/barber-images/barber6.png";

import "./barberStep.css";
import { useEffect, useState } from "react";

const BARBER_IMAGES = [bImg1, bImg2, bImg3, bImg4, bImg5, bImg6];

const BarberStep = ({ barbers, formDataRef }) => {
  const [barberId, setBarberId] = useState(formDataRef.current.barber);

  const BarberCard = ({ imgSrc, id, name }) => {
    const handleBarberClick = () => {
      if (barberId === id) return setBarberId(null);
      setBarberId(id);
    };
    return (
      <div
        className={`barber ${barberId === id ? "selected" : ""}`}
        onClick={handleBarberClick}
      >
        <img src={imgSrc} alt="profile" />
        <p className="name">{name}</p>
      </div>
    );
  };

  useEffect(() => {
    formDataRef.current.barber = barberId;
    console.log(`formData`, formDataRef.current);
  }, [barberId, formDataRef]);

  return (
    <div className="barbers-container">
      <h2>Pick your barber:</h2>
      <div className="barbers step-1">
        <BarberCard
          imgSrc={defaultProfileImage}
          id={0}
          name="First available"
        />
        {barbers.map((barber, i) => (
          <BarberCard
            key={barber.id}
            id={barber.id}
            imgSrc={BARBER_IMAGES[i]}
            name={barber.name}
          />
        ))}
      </div>
    </div>
  );
};

export default BarberStep;
