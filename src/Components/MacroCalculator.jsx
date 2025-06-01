
// export default CalorieCalculator;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/macro.css";
import cal from "../images/cal.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";

const CalorieCalculator = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState(1.2);
  const [goal, setGoal] = useState("maintain");
  const navigate = useNavigate();

  // ✅ Redirect to login if no token is found
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const calculateBMR = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    if (!w || !h || !a) return 0;

    return gender === "male"
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161;
  };

  const calculateTDEE = () => {
    const bmr = calculateBMR();
    return bmr * parseFloat(activity);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tdee = calculateTDEE();
    if (!tdee) return;

    let adjustedTDEE = tdee;
    if (goal === "increase") adjustedTDEE += 250;
    else if (goal === "decrease") adjustedTDEE -= 250;

    const macroRatios = {
      increase: { protein: 0.25, carbs: 0.5, fats: 0.25 },
      maintain: { protein: 0.3, carbs: 0.4, fats: 0.3 },
      decrease: { protein: 0.4, carbs: 0.3, fats: 0.3 },
    };

    const { protein, carbs, fats } = macroRatios[goal];

    const macros = {
      tdee: Math.round(adjustedTDEE),
      protein: Math.round((adjustedTDEE * protein) / 4),
      carbs: Math.round((adjustedTDEE * carbs) / 4),
      fats: Math.round((adjustedTDEE * fats) / 9),
    };

    navigate("/results", { state: macros });
  };

  return (
    <>
      <Navbar />
      <div
        className="calculator-container"
        style={{ background: `url(${cal}) no-repeat center center/cover` }}
      >
        <h1>Calorie & Macro Calculator</h1>
        <form onSubmit={handleSubmit} className="calculator-form">
          {/* Form Fields */}
          <div className="input-group">
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              placeholder="Enter your age"
            />
          </div>
          <div className="input-group">
            <label>Gender:</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="input-group">
            <label>Weight (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
              placeholder="e.g., 70"
            />
          </div>
          <div className="input-group">
            <label>Height (cm):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
              placeholder="e.g., 175"
            />
          </div>
          <div className="input-group">
            <label>Activity Level:</label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            >
              <option value="1.2">Sedentary (little or no exercise)</option>
              <option value="1.375">
                Lightly active (light exercise 1-3 days/week)
              </option>
              <option value="1.55">
                Moderately active (moderate exercise 3-5 days/week)
              </option>
              <option value="1.725">
                Very active (hard exercise 6-7 days/week)
              </option>
              <option value="1.9">
                Extra active (very hard exercise/physical job)
              </option>
            </select>
          </div>
          <div className="goal-selection">
            <p>Select Your Goal:</p>
            <button
              type="button"
              onClick={() => setGoal("increase")}
              className={goal === "increase" ? "active" : ""}
            >
              Increase Weight
            </button>
            <button
              type="button"
              onClick={() => setGoal("maintain")}
              className={goal === "maintain" ? "active" : ""}
            >
              Maintain Weight
            </button>
            <button
              type="button"
              onClick={() => setGoal("decrease")}
              className={goal === "decrease" ? "active" : ""}
            >
              Decrease Weight
            </button>
          </div>
          <button type="submit" className="calculate-btn">
            Calculate Macros
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CalorieCalculator;

