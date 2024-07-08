import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./component/Nav/Nav";
import HomePage from "./pages/HomePage/HomePage";
import ClosetPage from "./pages/ClosetPage/ClosetPage";
import PlannerPage from "./pages/PlannerPage/PlannerPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/closet" element={<ClosetPage />} />
          <Route path="/planner" element={<PlannerPage />} />
          <Route path="/add-item" element={<AddItemPage />} />
        </Routes>
        <Nav />
      </BrowserRouter>
    </>
  );
}

export default App;
