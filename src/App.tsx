import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Preloader from "./components/Pre";
import NavBar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";

function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <BrowserRouter>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
