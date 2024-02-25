import { theme } from "../../styles/Theme";
import styled from "styled-components";

const Slider = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
  width: 100%;
  cursor: grab;
`;

const Slide = styled.div`
  text-align: center;
`;

const Text = styled.p`
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  /* border: 1px solid blue; */
`;

const Name = styled.span`
  font-family: Josefin Sans, sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;

  display: inline-block;
  margin: 15px 0 42px;
`;

const Pagination = styled.div`
  span {
    display: inline-block;

    width: 7px;
    height: 7px;

    border-radius: 20px;

    background-color: rgba(255, 255, 255, 0.5);

    & + span {
      margin-left: 5px;
    }

    &.active {
      background-color: ${theme.colors.accent};
      width: 20px;
    }
  }
`;

export const S = {
  Slider,
  Slide,
  Text,
  Name,
  Pagination,
};
