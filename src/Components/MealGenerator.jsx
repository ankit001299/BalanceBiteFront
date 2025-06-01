import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import "../css/mealgenerator.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MealGenerator = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const macros = location.state; // Get the macros passed from the Results page
  const [mealType, setMealType] = useState("veg");
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [warning, setWarning] = useState(false);

  // Expanded meal plans with prices in rupees
  const meals = {
    veg: [
      { name: "Oats with Almonds & Banana", protein: 10, carbs: 45, fats: 10, price: 100 },
      { name: "Lentil Soup with Brown Rice", protein: 15, carbs: 55, fats: 5, price: 120 },
      { name: " Salad with Chickpeas", protein: 12, carbs: 50, fats: 8, price: 150 },
      { name: "Paneer Tikka with Roti", protein: 20, carbs: 40, fats: 12, price: 180 },
      { name: "Greek Yogurt with Nuts & Honey", protein: 18, carbs: 30, fats: 10, price: 160 },
      { name: "Salad with Avocado", protein: 15, carbs: 45, fats: 14, price: 140 },
      { name: "Vegetable Stir Fry with Tofu", protein: 18, carbs: 40, fats: 11, price: 130 },
      { name: "Lentil Curry with Quinoa", protein: 20, carbs: 50, fats: 8, price: 150 },
      { name: "Paneer and Cheese Wrap", protein: 14, carbs: 35, fats: 15, price: 110 },
      { name: "Mushroom Risotto", protein: 10, carbs: 50, fats: 12, price: 140 },
      { name: "Sweet Potato & Kale Stew", protein: 10, carbs: 55, fats: 5, price: 120 },
      { name: "Chia Pudding with Mixed Berries", protein: 12, carbs: 40, fats: 9, price: 160 },
      { name: "Tomato & Basil Pasta", protein: 8, carbs: 45, fats: 9, price: 130 },
      { name: "Veggie Burger with Whole Grain Bun", protein: 25, carbs: 30, fats: 12, price: 200 },
      { name: "Cabbage & Lentil Soup", protein: 15, carbs: 45, fats: 6, price: 110 },
      
    ],
    "non-veg": [
      { name: "Scrambled Eggs with Toast", protein: 20, carbs: 30, fats: 15, price: 120 },
      { name: "Grilled Chicken with Veggies", protein: 35, carbs: 20, fats: 10, price: 250 },
      { name: "Fish & Quinoa Bowl", protein: 30, carbs: 40, fats: 12, price: 280 },
      { name: "Chicken Salad with Avocado", protein: 25, carbs: 25, fats: 15, price: 230 },
      { name: "Turkey & Cheese Sandwich", protein: 28, carbs: 35, fats: 12, price: 200 },
      { name: "Grilled Salmon with Asparagus", protein: 35, carbs: 10, fats: 20, price: 300 },
      { name: "Chicken Stir Fry with Rice", protein: 30, carbs: 45, fats: 15, price: 220 },
      { name: "Beef Steak with Sweet Potato", protein: 40, carbs: 40, fats: 20, price: 350 },
      { name: "Shrimp & Veggie Stir Fry", protein: 25, carbs: 30, fats: 10, price: 240 },
      { name: "Turkey Meatballs with Zucchini", protein: 30, carbs: 15, fats: 12, price: 210 },
      { name: "Grilled Fish with Quinoa", protein: 28, carbs: 35, fats: 8, price: 270 },
      { name: "Chicken Pesto Pasta", protein: 35, carbs: 40, fats: 15, price: 230 },
      { name: "Egg & Avocado Sandwich", protein: 22, carbs: 25, fats: 18, price: 160 },
      { name: "Grilled Chicken with Sweet Potato Fries", protein: 35, carbs: 45, fats: 18, price: 250 },
      { name: "Salmon & Roasted Veggies", protein: 30, carbs: 20, fats: 18, price: 300 },
      { name: "Pork Tenderloin with Steamed Veggies", protein: 36, carbs: 18, fats: 15, price: 280 },
    ],
    combined: [
      { name: "Eggs & Oats with Nuts", protein: 22, carbs: 40, fats: 12, price: 150 },
      { name: "Grilled Chicken with Brown Rice", protein: 30, carbs: 50, fats: 10, price: 220 },
      { name: "Quinoa with Salmon & Avocado", protein: 35, carbs: 45, fats: 15, price: 300 },
      { name: "Paneer & Chicken Stir Fry", protein: 28, carbs: 30, fats: 14, price: 230 },
      { name: "Greek Yogurt & Turkey Wrap", protein: 25, carbs: 35, fats: 10, price: 200 },
      { name: "Beef & Quinoa Salad", protein: 32, carbs: 40, fats: 18, price: 260 },
      { name: "Grilled Chicken with Couscous", protein: 35, carbs: 50, fats: 15, price: 240 },
      { name: "Salmon & Veggie Stir Fry", protein: 30, carbs: 35, fats: 18, price: 290 },
      { name: "Egg Salad with Avocado", protein: 18, carbs: 25, fats: 22, price: 180 },
      { name: "Chicken & Veggie Burrito Bowl", protein: 30, carbs: 50, fats: 15, price: 230 },
      { name: "Chicken & Avocado Wrap", protein: 30, carbs: 35, fats: 18, price: 220 },
      { name: "Shrimp & Rice with Veggies", protein: 25, carbs: 40, fats: 12, price: 250 },
      { name: "Egg & Salmon Stir Fry", protein: 28, carbs: 30, fats: 16, price: 280 },
      { name: "Chicken Parmesan with Pasta", protein: 30, carbs: 40, fats: 20, price: 240 },
      { name: "Tofu & Veggie Skewers", protein: 18, carbs: 30, fats: 10, price: 170 },
      { name: "Salmon Burger with Veggie Patty", protein: 25, carbs: 30, fats: 14, price: 230 },
    ],
  };

  // Function to adjust meal portions based on calculated macros
  const adjustMeals = (mealArray) => {
    const adjustedMeals = mealArray.map((meal) => ({
      name: meal.name,
      protein: Math.round((meal.protein * macros.protein) / 100),
      carbs: Math.round((meal.carbs * macros.carbs) / 100),
      fats: Math.round((meal.fats * macros.fats) / 100),
      price: meal.price,  // Include the price
    }));
    return adjustedMeals;
  };

  // Get meals based on selected type (Veg, Non-Veg, Combined)
  const mealOptions = adjustMeals(meals[mealType]);

  // Handle meal selection
  const handleMealSelect = (meal) => {
    const newSelectedMeals = [...selectedMeals, meal];
    const totalProtein = newSelectedMeals.reduce((acc, m) => acc + m.protein, 0);
    const totalCarbs = newSelectedMeals.reduce((acc, m) => acc + m.carbs, 0);
    const totalFats = newSelectedMeals.reduce((acc, m) => acc + m.fats, 0);

    // Check if the selected meals exceed the macros
    if (
      totalProtein > macros.protein ||
      totalCarbs > macros.carbs ||
      totalFats > macros.fats
    ) {
      setWarning(true);
    } else {
      setWarning(false);
    }

    setSelectedMeals(newSelectedMeals);
  };

  // Handle deselecting a meal
  const handleMealDeselect = (meal) => {
    const newSelectedMeals = selectedMeals.filter((m) => m.name !== meal.name);
    setSelectedMeals(newSelectedMeals);

    // Recheck if the selected meals exceed the macros after removal
    const totalProtein = newSelectedMeals.reduce((acc, m) => acc + m.protein, 0);
    const totalCarbs = newSelectedMeals.reduce((acc, m) => acc + m.carbs, 0);
    const totalFats = newSelectedMeals.reduce((acc, m) => acc + m.fats, 0);

    if (
      totalProtein > macros.protein ||
      totalCarbs > macros.carbs ||
      totalFats > macros.fats
    ) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  };

  // Display the selected meals with summed macros
  const totalProtein = selectedMeals.reduce((acc, meal) => acc + meal.protein, 0);
  const totalCarbs = selectedMeals.reduce((acc, meal) => acc + meal.carbs, 0);
  const totalFats = selectedMeals.reduce((acc, meal) => acc + meal.fats, 0);
  const totalPrice = selectedMeals.reduce((acc, meal) => acc + meal.price, 0);

  // Navigate to the cart page
  const handleBuyNow = () => {
    navigate("/cart", {
      state: {
        selectedMeals,
        totalPrice,
      },
    });
  };

  return (
    <div className="meal-generator-container">
      <Navbar/>
      <h1>Meal Plan Generator</h1>
      <div className="meal-type-selection">
        <button
          onClick={() => setMealType("veg")}
          className={mealType === "veg" ? "active" : ""}
        >
          Veg Meals
        </button>
        <button
          onClick={() => setMealType("non-veg")}
          className={mealType === "non-veg" ? "active" : ""}
        >
          Non-Veg Meals
        </button>
        <button
          onClick={() => setMealType("combined")}
          className={mealType === "combined" ? "active" : ""}
        >
          Combined Meals
        </button>
      </div>

      <div className="meal-list">
        {mealOptions.map((meal, index) => (
          <div key={index} className="meal-card">
            <h3>{meal.name}</h3>
            <ul>
              <li>Protein: {meal.protein}g</li>
              <li>Carbs: {meal.carbs}g</li>
              <li>Fats: {meal.fats}g</li>
              <li>Price: ₹{meal.price}</li> {/* Display price */}
            </ul>
            <button onClick={() => handleMealSelect(meal)}>Select Meal</button>
          </div>
        ))}
      </div>

      <div className="selected-meals">
        <h2>Selected Meals</h2>
        {selectedMeals.map((meal, index) => (
          <div key={index} className="meal-card">
            <h3>{meal.name}</h3>
            <ul>
              <li>Protein: {meal.protein}g</li>
              <li>Carbs: {meal.carbs}g</li>
              <li>Fats: {meal.fats}g</li>
              <li>Price: ₹{meal.price}</li> {/* Display price */}
            </ul>
            <button onClick={() => handleMealDeselect(meal)}>Deselect</button>
          </div>
        ))}

        <div className="total-macros">
          <h3>Total Macros:</h3>
          <p>Protein: {totalProtein}g</p>
          <p>Carbs: {totalCarbs}g</p>
          <p>Fats: {totalFats}g</p>
          <p>Total Price: ₹{totalPrice}</p> {/* Display total price */}
        </div>

        {warning && (
          <div className="warning">
            <p style={{ color: "red" }}>
              Warning: Your selected meals exceed your calculated macros!
            </p>
          </div>
        )}

        {/* Buy Now button */}
        <button onClick={handleBuyNow} className="buy-now-button">Add To Cart</button>
      </div>

      <div className="calculated-macros">
        <h2>Calculated Macros (from Results):</h2>
        <p>Protein: {macros.protein}g</p>
        <p>Carbs: {macros.carbs}g</p>
        <p>Fats: {macros.fats}g</p>
      </div>
      <Footer/>
    </div>
  );
};

export default MealGenerator;
