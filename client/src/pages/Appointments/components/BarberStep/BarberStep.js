import defaultProfileImage from "../../../../assets/images/barber-images/default_profile_image.png";
import bImg1 from "../../../../assets/images/barber-images/barber1.png";
import bImg2 from "../../../../assets/images/barber-images/barber2.png";
import bImg3 from "../../../../assets/images/barber-images/barber3.png";
import bImg4 from "../../../../assets/images/barber-images/barber4.png";
import bImg5 from "../../../../assets/images/barber-images/barber5.png";
import bImg6 from "../../../../assets/images/barber-images/barber6.png";

import "./barberStep.css";
import { useEffect, useState } from "react";
import FormStep from "../../../../components/FormStep/FormStep";

const BARBER_IMAGES = [bImg1, bImg2, bImg3, bImg4, bImg5, bImg6];

const BarberStep = ({ barbers, formData, ...otherProps }) => {
  const [barberId, setBarberId] = useState(formData.current.barber_id || 0);

  const BarberCard = ({ imgSrc, id, name }) => {
    const handleBarberClick = () => {
      if (barberId === id) {
        setBarberId(null);
        formData.current.barber_id = null;
        return;
      }
      setBarberId(id);
      formData.current.barber_id = id;
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

  return (
    <FormStep className="barbers-container" {...otherProps}>
      <h2 className="step-title">Barbers</h2>
      <h3>Pick your barber:</h3>
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
    </FormStep>
  );
};

export default BarberStep;
