import "./App.css";
import { Route, Routes } from "react-router-dom";
import FullPage from "./Pages/FullPage";
import FolderDetails from "./Pages/FolderDetails";
import FileView from "./Pages/FileView";
import RequestFile from "./Pages/RequestFile";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Cart from "./Pages/Cart";
import { useState } from "react";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FullPage />} />
      <Route path="/file/:id" element={<FileView />} />
      <Route path="/requestFile" element={<RequestFile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route path="/:ids/*" element={<FolderDetails />} />
    </Routes>
  );
}

export default App;
