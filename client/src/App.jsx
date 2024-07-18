import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./component/Nav/Nav";
import HomePage from "./pages/HomePage/HomePage";
import ClosetPage from "./pages/ClosetPage/ClosetPage";
import PlannerPage from "./pages/PlannerPage/PlannerPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import ItemDetailsPage from "./pages/ItemDetailsPage/ItemDetailsPage";
import OutfitDetailsPage from "./pages/OutfitDetailsPage/OutfitDetailsPage";
import EditOutfitPage from "./pages/EditOutfitPage/EditOutfitPage"
import EditItemPage from "./pages/EditItemPage/EditItemPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/closet/:category" element={<ClosetPage />} />
          <Route path="/closet" element={<ClosetPage />} />
          <Route path="/item/:id" element={<ItemDetailsPage />} />
          <Route path="/edit-item/:id" element={<EditItemPage />} />
          <Route path="/edit-outfit/:id" element={<EditOutfitPage />} />
          <Route path="/planner" element={<PlannerPage />} />
          <Route path="/add-item" element={<AddItemPage />} />
          <Route path="/outfit/:id" element={<OutfitDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
