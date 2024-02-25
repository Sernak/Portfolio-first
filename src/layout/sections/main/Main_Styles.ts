import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

const Main = styled.section`
  min-height: 100vh;
  display: flex;
`;

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 15px;

  /* создаю медаиа запрос для мобильной версии для уменьшения фото */
  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`;

const MainTitle = styled.h1`
  /* font-size: 27px;
  font-weight: 400; */

  ${font({ weight: "400", Fmax: 27, Fmin: 20 })}
  p {
    display: none;
  }
`;

//прописываем резиновый размер шрифтаfamily: "Josefin Sans, sans-serif", Fmax: 50, Fmin: 36

const Name = styled.h2`
  ${font({ family: "Josefin Sans, sans-serif", weight: "700", Fmax: 50, Fmin: 36 })}
  /* font-family: Josefin Sans, sans-serif;
  font-size: 50px;
  font-weight: 700; */
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    //white-space: nowrap отменяю перенос
    white-space: nowrap;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }

  //Прописываем медиа запрос для отступов про переходо на мобильную версию экрана

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`;

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  /* margin-top: 65px; */

  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;

    //задаем размеры для фото с рамкой при уменьшении экраны для мобилок

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -20px;
      left: 17px;
    }
  }
  @media ${theme.media.mobile} {
    margin-top: 65px;
  }
`;

export const S = {
  Main,
  Photo,
  MainTitle,
  Name,
  SmallText,
  PhotoWrapper,
};
