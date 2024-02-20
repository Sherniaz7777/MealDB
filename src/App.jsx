import React from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Footer from "./components/footer/Footer";
import "./App.css"
import HomaeSearch from "./pages/HomaeSearch";



const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:tamakId" element={<Detail />} />
        {/* <Route path="/homes/:valu" element={<HomaeSearch/>}/> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
