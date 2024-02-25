import React from "react";
import photo from "../../../assets/images/myphoto.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";

/* justify={"space-around"}- сделали центрирование котента при уменьшении экрана  */
export const Main: React.FC = () => {
  return (
    <S.Main id={"home"}>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>
              I am <span>Nakonechniy Sergey</span>
            </S.Name>
            <S.MainTitle>
              <p>A Web Developer. </p>
              {/* прописали стиль автоматического печатанья текста с помощью библиотеки которую установили https://www.npmjs.com/package/typewriter-effect */}
              <Typewriter
                options={{
                  strings: ["A Web Developer.", "A frontend Developer", "A web disigner"],
                  autoStart: true,
                  loop: true,
                  delay: 150,
                }}
              />
            </S.MainTitle>
          </div>
          {/* с помощь стиля добавляем анимацию фотографии с границей https://www.npmjs.com/package/react-parallax-tilt */}
          <Tilt
          className="parallax-effect-img"
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          perspective={800}
          transitionSpeed={1500}
          scale={1.1}
          gyroscope={true}
          >
            <S.PhotoWrapper>
              <S.Photo src={photo} alt="" />
            </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
