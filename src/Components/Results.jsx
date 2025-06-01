import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/results.css";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const macros = location.state;

  if (!macros) {
    return <h2>No results found. Please calculate again.</h2>;
  }

  const handleCreateMealPlan = () => {
    navigate("/meal-generator", { state: macros }); // Passing macros to the next page
  };

  return (
    <div className="results-container">
      <h1>Your Macro Breakdown</h1>
      <div className="result-card">
        <h2>Daily Caloric Needs: {macros.tdee} kcal</h2>
        <ul>
          <li><strong>Protein:</strong> {macros.protein} g</li>
          <li><strong>Carbohydrates:</strong> {macros.carbs} g</li>
          <li><strong>Fats:</strong> {macros.fats} g</li>
        </ul>
        <button onClick={() => navigate("/macro")} className="back-btn">Go Back</button>
        <button onClick={handleCreateMealPlan} className="create-meal-btn">Create Meal Plan</button>
      </div>
    </div>
  );
};

export default Results;
