import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import TimeTable from "../../components/TimeTable/TimeTable";
import {
  StyledBackground,
  StyledNavBarContainer,
  StyledTimeTableBackground,
  StyledTimeTableBox,
  StyledTimeTableText,
} from "./style";

function TimeTablePage() {
  return (
    <StyledBackground>
      <StyledNavBarContainer>
        <NavBar />
      </StyledNavBarContainer>
      <StyledTimeTableBox>
        <StyledTimeTableText>시간표</StyledTimeTableText>
        <StyledTimeTableBackground>
          <TimeTable editable={false} />
        </StyledTimeTableBackground>
      </StyledTimeTableBox>
    </StyledBackground>
  );
}
export default TimeTablePage;
