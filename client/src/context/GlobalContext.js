import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const initialState = { barbers: [], services: [], products: [] };

const backendFetch = (path, config = {}) => {
  return fetch(`http://localhost:3000${path}`, config);
};

const GlobalProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [resources, setResources] = useState(initialState);

  useEffect(() => {
    const fetchResources = async () => {
      const barbers = (await (await backendFetch("/barbers")).json()) || [];
      const services = (await (await backendFetch("/services")).json()) || [];
      const products = (await (await backendFetch("/products")).json()) || [];
      setResources({ barbers, services, products });
    };
    fetchResources();
  }, []);

  currentUser && console.log(currentUser);

  return (
    resources && (
      <GlobalContext.Provider
        value={{ resources, currentUser, setCurrentUser }}
      >
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
