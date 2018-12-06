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

@keyframes bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

  .anim-enter {
    animation-name: bounceInUp;
    animation-duration: 0.7s;
    animation-timing-function: ease-in-out;
    /* transition: height 0.2s ease-out; */
    /* min-height: 0; */
  }
  
  .anim-enter.anim-enter-active {
    /* min-height: 100%; */
  }
`;
