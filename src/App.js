import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import useDarkMode from "./hooks/useDarkMode";
import styled from "styled-components";

const AppContainer = styled.div`
  background: ${({ theme }) => (theme === "dark" ? `#000` : `#fff`)};
`;

function App() {
  const [theme] = useDarkMode();
  return (
    <AppContainer>
      {theme}
      <Header />
      <About />
      <Projects />
      <Footer />
    </AppContainer>
  );
}

export default App;
