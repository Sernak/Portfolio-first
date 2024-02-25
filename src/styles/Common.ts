// создаем миксин для шрифта, чтобы можно было сделать адаптив под расширение мобильных экранов без большого количества медиа запроов

import { theme } from "./Theme";

// типизируем наш пропс

type FontPropsType = {
  family?: string;
  weight?: string;
  color?: string;
  lineHeight?: string;
  //чтобы не хардкодить в формуле задаем еще типы значений
  Fmin?: number;
  Fmax?: number;
};

export const font = ({ family, weight, color, lineHeight, Fmax, Fmin }: FontPropsType) => `
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400};
    font-color: ${color || theme.colors.font};
    line-height: ${lineHeight || 1.2};
    font-size: calc((100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`;

// создаем резиныовый шрифт font-size: calc( (100vw - Vmin)/(Vmax - Vmin) * (Fmax - Fmin) + Fmin);
