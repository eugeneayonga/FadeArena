import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

const CustomerStep = ({ formDataRef }) => {
  const [firstName, setFirstName] = useState(
    formDataRef.current.customer.firstName
  );
  const [lastName, setLastName] = useState(
    formDataRef.current.customer.lastName
  );
  const [email, setEmail] = useState(formDataRef.current.customer.email);
  const [phoneNumber, setPhoneNumber] = useState(
    formDataRef.current.customer.phoneNumber
  );

  useEffect(() => {
    formDataRef.current.customer = { firstName, lastName, email, phoneNumber };
  });

  return (
    <div className="customer step-3">
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="first-name"
          placeholder={faker.name.firstName()}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="last-name"
          placeholder="Doe"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          className="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          className="phone-number"
          placeholder="(320) 555-5555"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CustomerStep;
