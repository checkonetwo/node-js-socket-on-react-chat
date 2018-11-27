import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

export default createGlobalStyle`

${Normalize};

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body,
html {
  font-family: var(--main-font);
  color: var(--text-color);
  font-size: 62.5%;
  line-height: 1.4;
  font-weight: 400;
  min-width: 320px;
  background-color: var(--bg-color);
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
}

body > div {
  height: 100% !important;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
}

section {
  font-size: 1.6rem;
}

a {
  transition: 0.2s;
}

h1,
h2,
h3,
h4 {
  font-family: var(--title-font);
}

p {
  font-family: var(--text-font);
}

button {
  border: 0;
}

a {
  text-decoration: none; 
}

.anim-enter {
  opacity: 0;
  height: 0;
  transition: opacity 0.7s ease-in-out;
}
 
.anim-enter.anim-enter-active {
  opacity: 1;
  height: auto;
}
`;
