import { createGlobalStyle } from "styled-components";
import Home from "./pages/home";

const GlobalStyle = createGlobalStyle`
  html {
      font-size: 10px;
  }

  body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-size: 1.6rem;
      font-family: "Outfit", sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
