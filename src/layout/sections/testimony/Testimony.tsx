import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./../skills/Skills_Styles";

export const Testimony: React.FC = () => {
  return (
    <StyledTestimony id={"testimony"}>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction={"column"} align={"center"}>
          <S.IconWrapper>
            <Icon iconId={"quot"} />
          </S.IconWrapper>

          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  min-height: 50vh;
  background-color: #a0aab2;

  ${S.IconWrapper} {
    margin: 40px 0 72px;
  }
  position: relative;
`;