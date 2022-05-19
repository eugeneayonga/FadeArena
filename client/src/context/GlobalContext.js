import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const BACKEND_URL = "http://localhost:3000";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [resources, setResources] = useState(null);
  // const [barbers, setBarbers] = useState([]);
  // const [products, setProducts] = useState([]);
  // const [services, setServices] = useState([]);

  useEffect(() => {
    const backend = axios.create({ baseURL: BACKEND_URL });
    const fetchResources = async () => {
      const barbersData = backend.get("barbers").then(({ data }) => data);
      const productsData = backend.get("products").then(({ data }) => data);
      const servicesData = backend.get("services").then(({ data }) => data);
      const [barbers, products, services] = await Promise.all([
        barbersData,
        productsData,
        servicesData,
      ]);
      setResources({ barbers, products, services });
    };
    fetchResources();
  }, []);

  return (
    resources && (
      <GlobalContext.Provider value={resources}>
        {children}
      </GlobalContext.Provider>
    )
  );
};

const useGlobalContext = () => {
  const ctx = useContext(GlobalContext);
  if (!ctx) return new Error("Not inside Global Context");
  return ctx;
};

export { GlobalProvider, useGlobalContext };
