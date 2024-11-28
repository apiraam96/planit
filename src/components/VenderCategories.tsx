import React from "react";
import { vendorCategories } from "../lib";
import { CategoryCard } from "./CategoryCard";

const VenderCategories = () => {
  const Login = async () => {
    const result = await fetch("/api/logging");
    const data = await result.json();
    console.log(data.message);
  };
  return (
    <div className="grid md:grid-cols-3 gap-4 p-5">
      {vendorCategories.map((vendor) => (
        <CategoryCard title={vendor.title} />
      ))}
      <button onClick={Login}>login route</button>
    </div>
  );
};

export default VenderCategories;
