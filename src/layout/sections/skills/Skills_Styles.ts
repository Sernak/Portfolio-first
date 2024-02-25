import styled from "styled-components";
import { theme } from "../../../styles/Theme";

//Skills
const Skills = styled.section`
  position: relative;
`;

//Skill
const Skill = styled.div`
  width: 330px;
  //задаем свойство каждому отдельному скилу занимать все свободное пространство
  flex-grow: 1;
  padding: 42px 20px 52px;
  @media ${theme.media.mobile} {
    padding: 62px 0px 40px;
  }
`;

const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    display: inline-block;

    position: absolute;
    left: 50%;
    top: 50%;

    width: 80px;
    height: 80px;
    transform: rotate(45deg) translate(-50%, -50%);
    transform-origin: top left;

    background: rgba(255, 255, 255, 0.1);
  }
`;

const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`;

const SkillText = styled.p`
  text-align: center;
`;

export const S = {
  Skills,
  Skill,
  IconWrapper,
  SkillTitle,
  SkillText,
};
