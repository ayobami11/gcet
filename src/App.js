import { Outlet } from "react-router-dom";

import { createGlobalStyle } from "styled-components";

import { AppContextWrapper } from "./contexts/app";
import { ThemeContextWrapper } from "./contexts/theme";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleXmark, faEnvelope, faAddressBook, faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faArrowLeft, faArrowRight, faPhone, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


library.add(faChevronDown, faArrowLeft, faArrowRight, faCircleXmark, faPhone, faEnvelope, faAddressBook, faCopyright, faBars, faXmark);

const BaseStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 7em;
  }

  body {
    color: ${({ theme }) => theme.colors.darkGray};
  }

  h1,
  h2,
  h3 {
    font-family: 'Quicksand', sans-serif;
  }

  menu,
  ul {
    list-style: none;
  }

  a,
  abbr {
    text-decoration: none;
  }

  address {
    font-style: normal;
  }

  img {
    height: auto;
    max-width: 100%;
    object-fit: cover;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }


  @media (max-width: 600px) {
    html {
      font-size: 14px;
    }
  }
`;

const App = () => {
  return (
    <div>
      <AppContextWrapper>
        <ThemeContextWrapper>
          <BaseStyles />
          <Outlet />
        </ThemeContextWrapper>
      </AppContextWrapper>
    </div>
  );
}

export default App;
