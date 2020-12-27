import React from "react";
import Header from "./components/Header";
import Experience from "./components/Experience";
import { GlobalStyles } from "./constants/theme";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Test from "./Test";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Route exact path="/" component={Header} />
      <Route exact path="/experience" component={Experience} />
      <Route exact path="/test" component={Test} />
    </Router>
  );
}

export default App;
