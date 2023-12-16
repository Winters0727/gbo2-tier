import { useContext } from "react";

import { MSContext } from "../context/MSContext";

import BoxComponent from "./BoxComponent";

import { Board, Row, Cost, Tag, TagWrapper } from "../styles/board.style";
import colors from "../styles/colors";

import type { Role, Recommendation, TierData } from "../types/data.type";

const BoardComponent = ({
  role,
  data,
}: {
  role: Role;
  data: TierData[keyof TierData];
}) => {
  const DESCRIPTION = {
    red: "환경 최적화 기체",
    yellow: "충분히 강한 기체",
    blue: "우주전 사용가능 기체",
  };

  const MS = useContext(MSContext);

  const recommendations: Recommendation[] = ["red", "yellow", "blue"];

  return (
    <Board style={{ backgroundColor: colors[role] }}>
      <Row style={{ height: "50px", padding: "0px 16px" }}>
        <TagWrapper>
          {recommendations.map((recommend) => (
            <Tag>
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: recommend,
                }}
              ></span>
              <span>: {DESCRIPTION[recommend]}</span>
            </Tag>
          ))}
        </TagWrapper>
      </Row>
      {Object.keys(data).map((cost) => (
        <Row>
          <Cost>
            <span>{cost}</span>
          </Cost>
          {recommendations.map(
            (recommend) =>
              data[cost][recommend].length > 0 &&
              data[cost][recommend].map(
                (ms) =>
                  MS[role][ms.code] && (
                    <BoxComponent
                      data={{
                        ...MS[role][ms.code],
                        color: recommend,
                        enableSpaceType: !!ms.enableSpaceType,
                        level: ms.level,
                      }}
                    />
                  )
              )
          )}
        </Row>
      ))}
    </Board>
  );
};

export default BoardComponent;
