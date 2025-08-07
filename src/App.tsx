import React from "react";
// import DataLoader from "./components/DataLoader";
import PartA from "./components/PartA.jsx";
import Navbar from "./components/Navbar";
import { useData } from "./hooks/data-hook.js";

function App() {
  const salesData = useData();

  console.log("data from app.tsx", salesData);
  return (
    <>
      <Navbar />
      <PartA />
    </>
  );
}

export default App;
