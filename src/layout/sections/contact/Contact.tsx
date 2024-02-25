import React, { ElementRef, useRef } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { S } from "./Contacts_Style";
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {

  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if(!form.current) return

    emailjs
      .sendForm('service_2wnq5am', 'template_ja5k44j', form.current, {
        publicKey: 'EA6G9mMsTPGQESKK0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      // зачистка форм после отправки
      e.target.reset()
  };

  return (
    <S.Contacts id={"contacts"}>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field required placeholder={"name"} name={"user_name"}/>
          <S.Field required placeholder={"email"} name={"email"}/>
          <S.Field required placeholder={"subject"} name={"subject"}/>
          <S.Field required placeholder={"message"} as={"textarea"} name={"message"}/>
          <Button type={"submit"}>Send message</Button>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};

// required-обязательное заполнение форм, иначе дальше не пропустит