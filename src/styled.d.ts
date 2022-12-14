import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      mini: string;
      small: string;
      semibase: string;
      base: string;
      upperbase: string;
      medium: string;
      formsHeading: string;
      semilarge: string;
      large: string;
    },

    color: {
      white: string;
      black: string;
      whiteSmoke: string;
      whisper: string;
      gray: string;
      lightGray: string;
      nero: string;
      nero2: string;
      tangerine: string;
      carrotOrange: string;
      eclipse: string;
      whitePink: string;
    };
  }
}
