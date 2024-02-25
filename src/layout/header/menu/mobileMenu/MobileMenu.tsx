import React, { useState } from "react";
import { Menu } from "../Menu";
import { S } from "../HeaderMenu_Styles";

export const MobileMenu: React.FC = () => {
  //сjздаем с помощью хука useState возможность открытия и закрытия
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  //функция которая вызывается на событие клик
  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup
        isOpen={menuIsOpen}
        onClick={() => {
          setMenuIsOpen(false);
        }}
      >
        <Menu />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
