import React from "react";
import { Route, Routes } from "react-router-dom";
import login from "./screens/login";
import register from "./screens/register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<login />} />
      <Route path="/register" element={<register />} />
    </Routes>
  );
}

export default App;
