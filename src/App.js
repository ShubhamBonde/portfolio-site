import { render } from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Article from "./Article";
import Resume from "./Resume";
import Project from "./Project";
import Contact from "./Contact";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <header>{<Navbar title="Shubham.Dev" />}</header>
        <Routes>
          <Route path="/page/home" element={<Article />} />
          <Route path="/page/resume" element={<Resume />} />
          <Route path="/page/projects" element={<Project />} />
          <Route path="/page/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
