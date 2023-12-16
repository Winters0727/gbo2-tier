import type { ReactNode } from "react";

import { Button } from "../styles/button.style";
import colors from "../styles/colors";

import type { Role } from "../types/data.type";

const ButtonComponent = ({
  children,
  role,
  onClick,
}: {
  children: ReactNode;
  role: Role;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Button style={{ backgroundColor: colors[role] }} onClick={onClick}>
      <span>{children}</span>
    </Button>
  );
};

export default ButtonComponent;
