import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { camelCaseToSnakeCase } from "../helpers/stringHelpers";

const UserContext = createContext();

// const formatUserForBackend = (user) => {
//   const formattedEntries = Object.entries(user).map(([key, val]) => {
//     const formattedKey = camelCaseToSnakeCase(key);
//     return [formattedKey, val];
//   });
//   const formattedUser = Object.fromEntries(formattedEntries);

//   console.log("formattedUser", formattedUser);
//   return formattedUser;
// };

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userError, setUserError] = useState(null);

  function login(data) {
    setUserError(null);
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(setCurrentUser)
      .catch(setUserError);
  }

  function logout() {
    fetch("/logout", { method: "DELETE" })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        setCurrentUser(null);
      })
      .catch(console.error);
  }

  function signup(user) {
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (!res.ok) return new Error(res.statusText);
        return res.json();
      })
      .then(setCurrentUser)
      .catch(console.error);
  }

  const actions = {
    login,
    logout,
    signup,
  };

  const state = {
    userError,
    currentUser,
  };

  useEffect(() => {
    async function checkSessionForUser() {
      try {
        const res = await fetch("/me");
        if (res.status === 401) return setCurrentUser(null);
        const user = await res.json();
        setCurrentUser(user);
      } catch (err) {
        console.warn(err);
      }
    }
    if (!currentUser) checkSessionForUser();
  }, [currentUser]);

  return (
    <UserContext.Provider value={{ state, actions }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) {
    return new Error(
      "'useUser()' can only be called from inside the UserProvider component"
    );
  }
  return ctx;
};

export { UserProvider, useUser };
