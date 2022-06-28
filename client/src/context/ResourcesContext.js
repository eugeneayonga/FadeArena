import { createContext, useContext, useEffect, useReducer } from "react";

const ResourcesContext = createContext();

const actions = {
  startup(payload) {
    return payload;
  },
  default({ state, action }) {
    return console.warn({
      message: `Action, "${action}", is not valid.`,
      action,
      state,
    });
  },
};

const initialResourceState = null;

const reducer = (state, action) =>
  actions[action.type](action.payload) ||
  actions["default"]({ currentState: state, action });
const ResourcesProvider = ({ children }) => {
  const [resources, dispatch] = useReducer(reducer, initialResourceState);

  useEffect(() => {
    const fetchStartupResources = async () => {
      try {
        const res = await fetch("/startup");
        if (!res.ok)
          throw new Error({ code: res.status, message: res.statusText });
        const resources = await res.json();
        dispatch({ type: "startup", payload: resources });
      } catch (err) {
        console.error(err);
      }
    };
    fetchStartupResources();
  }, []);

  return (
    <ResourcesContext.Provider
      value={{ resources, dispatch, actionsList: [...Object.keys(actions)] }}
    >
      {children}
    </ResourcesContext.Provider>
  );
};

const useResources = () => {
  const ctx = useContext(ResourcesContext);
  if (!ctx)
    return new Error(
      "'useResources()' can only be called from inside the ResourcesProvider component"
    );
  return ctx;
};

export { useResources, ResourcesProvider };
