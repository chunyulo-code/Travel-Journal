import React from "react";
import Header from "./components/Header";
import Seperate from "./components/Seperate";
import data from "./data";
import "./style.css";

export default function App() {
  console.log(data);
  const seperateElements = data.map((item) => {
    return <Seperate item={item} />;
  });
  return (
    <div className="journal-card">
      <Header />
      <section className="mainContent">{seperateElements}</section>
    </div>
  );
}
