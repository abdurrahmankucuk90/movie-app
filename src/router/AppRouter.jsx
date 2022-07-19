import React from "react";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import MovieDetails from "../pages/MovieDetails";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
};

export default AppRouter;
