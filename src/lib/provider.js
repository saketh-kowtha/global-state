import { useReducer } from "react";

export default function Provider({ children, rootReducer }) {
  const defaultState = rootReducer({}, {});
  const [state, dispatch] = useReducer(rootReducer, defaultState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}
