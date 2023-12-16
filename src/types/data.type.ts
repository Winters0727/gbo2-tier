import type { MS } from "./ms.type";
import type { Tier } from "./tier.type";

export type Role = "raid" | "general" | "support";
export type Recommendation = "red" | "yellow" | "blue";

export type MSData = {
  [role in Role]: {
    [code: string]: MS;
  };
};

export type TierData = {
  [role in Role]: {
    [cost: string]: {
      [recommedation in Recommendation]: Tier[];
    };
  };
};
