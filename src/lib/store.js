import { useReducer } from "react";
import context from './context'

export default function Store({ children, rootReducer }) {
  const { Provider } = context;
  const defaultState = rootReducer({}, {});
  const [state, dispatch] = useReducer(rootReducer, defaultState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}
