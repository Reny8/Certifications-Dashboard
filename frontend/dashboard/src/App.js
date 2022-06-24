import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
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
  return <div className="App"></div>;
}

export default App;
