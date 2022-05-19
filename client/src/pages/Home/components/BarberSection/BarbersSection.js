import "./barbersSection.css";
import b1 from "../../../../assets/images/stock-barber-1.jpg";
import b2 from "../../../../assets/images/stock-barber-2.jpg";
import b3 from "../../../../assets/images/stock-barber-3.jpg";
import b4 from "../../../../assets/images/stock-barber-4.jpg";

const BARBERS = [
  { name: "Barber 1", img: b1 },
  { name: "Barber 2", img: b2 },
  { name: "Barber 3", img: b3 },
  { name: "Barber 4", img: b4 },
];
const BarbersSection = () => {
  return (
    <section className="barbers-section">
      <h2>MEET THE CREW!</h2>
      <div className="barbers">
        {BARBERS.map((b, i) => (
          <div key={i} className="barber">
            <div className="image-wrapper">
              <img src={b.img} alt={b.name} />
            </div>
            <h3>{b.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BarbersSection;
