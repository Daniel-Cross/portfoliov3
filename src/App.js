import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./constants/Theme";
import themeToggle from "./hooks/themeToggle";

function App() {
  const [theme, setTheme] = themeToggle();
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header setTheme={setTheme} theme={theme} />
      <About />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
