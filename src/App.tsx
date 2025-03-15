import { useEffect, useState } from "react";
import { BrowserRouter, Routes } from "react-router";
import Preloader from "./components/Pre";
import NavBar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <Routes>
          {/* <Route path="/" element={<D />} /> */}
          {/* 
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<RecentActivity />} />
          <Route path="project/:id" element={<Project />} />
        </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
