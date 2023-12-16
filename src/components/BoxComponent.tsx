import { BoxWrapper } from "../styles/box.style";

import type { MS } from "../types/ms.type";

const BoxComponent = (props: {
  data: MS & { color: string; enableSpaceType: boolean; level: number };
}) => {
  const { name, code, enableSpaceType, color, level } = props.data;
  return (
    <BoxWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: color,
          border: enableSpaceType ? "solid 5px blue" : "solid 5px transparent",
          borderRadius: "5px",
        }}
      >
        <img
          src={`images/raid/${code}.png`}
          alt={name}
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "18px",
          wordBreak: "keep-all",
        }}
      >{`${level === 1 ? name : `${name} (${level}렙)`}`}</div>
    </BoxWrapper>
  );
};

export default BoxComponent;
