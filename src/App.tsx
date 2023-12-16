import React, { useState } from "react";

import { MSProvider } from "./context/MSContext";
import { TierProvider } from "./context/TierContext";

import Button from "./components/ButtonComponent";
import Board from "./components/BoardComponent";

import {
  Header,
  Background,
  ButtonWrapper,
  TableWrapper,
  Datetime,
  Footer,
} from "./styles/app.style";

import type { Role } from "./types/data.type";

import MS from "./data/ms.json";
import Tier from "./data/tier.json";

const App = () => {
  const I18n = {
    raid: "강습",
    general: "범용",
    support: "지원",
  };

  const updatedDate = new Date("2023-12-16");

  const roles: Role[] = ["raid", "general", "support"];

  const [role, setRole] = useState<Role>("raid");
  const [ms, setMs] = useState(MS);
  const [tier, setTier] = useState(Tier);

  const handleClick = (role: Role) => setRole(role);

  return (
    <div className="App" style={{ padding: "32px 0" }}>
      <Background>
        <MSProvider value={ms}>
          <TierProvider value={tier}>
            <TableWrapper>
              <Header>건담 배틀 오퍼레이션2 - 티어 리스트</Header>
              <Datetime>
                업데이트 :{" "}
                {`${updatedDate.getFullYear()}-${
                  updatedDate.getMonth() + 1
                }-${updatedDate.getDate()}`}
              </Datetime>
              <ButtonWrapper>
                {roles.map((role) => (
                  <Button
                    role={role}
                    onClick={(e: React.MouseEvent) => handleClick(role)}
                  >
                    {I18n[role]}
                  </Button>
                ))}
              </ButtonWrapper>
              <Board role={role} data={tier[role]} />
            </TableWrapper>
          </TierProvider>
        </MSProvider>
        <Footer>
          <div>
            이 홈페이지는 반다이 남코 엔터테인먼트에서 운영하는 홈페이지가
            아니며,
          </div>
          <div>
            상기에 사용된 이미지의 저작권은 모두 반다이 남코 엔터테인먼트에
            있습니다.
          </div>
          <div>
            Copyright © Bandai Namco Entertainment Inc. All rights reserved
          </div>
        </Footer>
      </Background>
    </div>
  );
};

export default App;
