import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { Link } from "../../../../src/components/Link";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../../src/components/Button";

//Works

const Works = styled.section`
  //задаем растоение 30px между элементами
  ${FlexWrapper} {
    gap: 30px;
  }
  position: relative;
`;

//Work

const Work = styled.div`
  background-color: ${theme.colors.secondaryBg};
  /* width: 330px;
  //чтобы занимал размер всего родителя
  flex-grow: 1; */
  ${Link} {
    padding: 10px 0;
    & + ${Link} {
      margin-left: 20px;
    }
  }
  //чтобы занимал размер всего родителя
  /* @media ${theme.media.desktop} {
    max-width: 540px;
  } */
`;

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 40%);
    top: 50%;
    opacity: 0;
    transition: ${theme.animmation.transition};

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    backdrop-filter: blur(8px);
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(1px);
    opacity: 0;
    transition: ${theme.animmation.transition};
  }

  &:hover {
    &::before {
      opacity: 1;
    }
    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }
    ${Button} {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const Description = styled.div`
  padding: 25px 20px;
`;

const Title = styled.h3``;

const Text = styled.p`
  margin: 14px 0 10px;
`;

export const S = {
  Works,
  Work,
  ImageWrapper,
  Image,
  Description,
  Title,
  Text,
};
