const Service = ({ service, onClick, selected }) => {
  return (
    <div key={service.id} className="service">
      <span>
        <p>{`${service.name} - $${service.price}.00`}</p>
      </span>
      <span className="button-wrapper">
        <button
          type="button"
          className={selected ? "checked" : ""}
          onClick={() => onClick(service.id, selected)}
        >
          {selected ? "REMOVE" : "ADD"}
        </button>
      </span>
    </div>
  );
};

export default Service;
