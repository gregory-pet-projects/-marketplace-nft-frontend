import { useState } from "react";

export const useToggle = (defaultState) => {
  const [state, setState] = useState();
  const toggle = () => setState(!state);
  return [state, toggle];
};
