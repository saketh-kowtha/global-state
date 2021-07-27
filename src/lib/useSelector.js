import { useContext } from "react";
import context from "./context";

export default function useSelector(fn) {
  const { state } = useContext(context);
  return fn(state);
}
