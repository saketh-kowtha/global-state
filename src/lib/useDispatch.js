import { useContext } from "react";
import context from "./context";

export default function useDispatch(fn) {
  const { dispatch } = useContext(context);

  return dispatch;
}
