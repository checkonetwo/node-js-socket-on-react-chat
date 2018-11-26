import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 
  :root {
    --main-font: 'Ubuntu', sans-serif;;
    --text-font: var(--main-font);
    --text-color: var(--gray);
    --title-font: var(--main-font);
    --bg-color: #edeef0;
    --black: #000;
    --green: #22c993;
    --red: #de4538;
    --blue: #0c66ff;
    --blue-dark: #0c6bff;
    --gray: #8f929e;
    --gray-hover: #6c707d;
    --gray-active: #555762;
    --orange: #ff7701;
    --orange-hover: #ff9a22;
    --orange-active: #ff8b00;
    --border-color: #e7e9ed;
  }

  body {
    letter-spacing: -0.1px;
  }

  h1 {
    letter-spacing: 1.5px;
  }

  a {
    color: var(--gray);

    &:hover {
      color: var(--gray-hover);
    }

    &:active {
      color: var(--gray-active);
    }

  }
`;
