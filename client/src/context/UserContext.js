import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

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
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((user) => {
        console.log("user", user);
        setCurrentUser(user);
      })
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

  const userActions = {
    userError,
    currentUser,
    login,
    logout,
  };

  useEffect(() => {
    async function checkSessionForUser() {
      try {
        const res = await fetch("/me");
        if (res.status === 401) return setCurrentUser(null);
        const user = await res.json();
        setCurrentUser(user);
      } catch (err) {
        console.error(err);
      }
    }
    checkSessionForUser();
  }, []);

  return (
    <UserContext.Provider value={userActions}>{children}</UserContext.Provider>
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
