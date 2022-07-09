import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import HomePage from "./Pages/HomePage";
function App() {
  const [certificates, setCertificates] = useState([]);
  useEffect(() => {
    getAllCertifications();
  }, []);
  async function getAllCertifications() {
    try {
      let response = await axios.get(
        "https://localhost:7050/api/certification/"
      );
      setCertificates(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage certificates={certificates} />} />
      </Routes>
    </div>
  );
}

export default App;
