const USER_ROUTES = {
  signup: { route: "/signup", method: "POST" },
  login: { route: "/login", method: "POST" },
  logout: { route: "/logout", method: "DELETE" },
};

const DATA_ROUTES = {
  startup: { route: "/startup", method: "GET" },
};

const defaultConfig = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};

const userFetcher = async (action, config = defaultConfig) => {
  const res = await fetch(USER_ROUTES[action], config);
  if (!res.ok) throw new Error({ message: "Failed to fetch", action, config });
  console.log(`response`, res);
  const data = await res.json();
  if (data.errors) throw new Error(data.errors);
  return data;
};
