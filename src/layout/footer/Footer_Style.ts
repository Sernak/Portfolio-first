import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

const Footer = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
  position: relative;
`;

const Name = styled.span`
  letter-spacing: 3px;
  ${font({ family: "Josefin Sans, sans-serif", weight: "700", Fmax: 22, Fmin: 16 })}
`;

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`;

const SocialItem = styled.li`
`;

const SocialLink = styled.a`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;
transition: ${theme.animmation.transition};
  color: ${theme.colors.accent};

  &:hover {
    color: ${theme.colors.primaryBg};
    background-color: #7572d5;
    transform: translateY(-4px);
    cursor: pointer;
  }
`;

const Copyright = styled.small`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0%;
  text-align: center;
  opacity: 0.5;
`;

export const S = {
  Footer,
  Name,
  SocialList,
  SocialItem,
  SocialLink,
  Copyright,
};
