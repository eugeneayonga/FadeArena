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

  const BarberCard = (b, i) => {
    const handleBarberClick = () => {
      if (barberId === b.id) return setBarberId(null);
      setBarberId(b.id);
    };
    return (
      <div
        key={b.id}
        className={`barber ${barberId === b.id ? "selected" : ""}`}
        onClick={handleBarberClick}
      >
        <img src={BARBER_IMAGES[i]} alt="profile" />
        <p className="name">{b.name}</p>
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
      <div className="barbers step-1">{barbers.map(BarberCard)}</div>
    </div>
  );
};

export default BarberStep;
