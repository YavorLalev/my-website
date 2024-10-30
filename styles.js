import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

: root {
--neutral-color: #F8F8F8;
--primary-fontcolor: 0e3c53;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--neutral-color)

  }
`;
