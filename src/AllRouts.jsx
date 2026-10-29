import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Kids from "./pages/Kids";
import Login from "./pages/Login";
import Men from "./pages/Men";
import Reg from "./pages/Reg";
import Women from "./pages/Women";
import CreateProdict from "./pages/CreateProdict";

const AllRouts = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/login" element={<Login />} />
        <Route path="/men" element={<Men />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/women" element={<Women />} />


        {/* product */}
        <Route path="/product/create" element={<CreateProdict />} />
      </Routes>
    </div>
  );
};

export default AllRouts;
