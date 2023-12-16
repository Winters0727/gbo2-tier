import { createContext } from "react";

import type { TierData } from "../types/data.type";

export const TierContext = createContext<TierData>({
  raid: {},
  general: {},
  support: {},
});
export const TierProvider = TierContext.Provider;
