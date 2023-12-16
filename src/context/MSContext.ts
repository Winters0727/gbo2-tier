import { createContext } from "react";

import { MSData } from "../types/data.type";

export const MSContext = createContext<MSData>({
  raid: {},
  general: {},
  support: {},
});
export const MSProvider = MSContext.Provider;
