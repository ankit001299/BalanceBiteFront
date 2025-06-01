import React from "react";
import aiImage from "../images/ai.jpeg";
import healthImage from "../images/health.jpeg";
import calculatorImage from "../images/calculator.jpeg";
import shoppingImage from "../images/shopping.jpeg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div style={styles.container}>
    <Navbar/>
      <h2 style={styles.title}>About Us</h2>
      <p style={styles.description}>
        Welcome to <b>Balance Bite</b>, your one-stop destination for a healthier lifestyle!  
        Our platform helps you generate personalized meal plans, track calorie intake, and shop for essential supplements—all in one place.
      </p>

      <h3 style={styles.subTitle}>🚀 Features of Our Website</h3>

      <div style={styles.featureGrid}>
        <div style={styles.card}>
          {/* <img src="../images/ai.jpeg" alt="Meal Generator" style={styles.cardImage} /> */}
          <img src={aiImage} alt="Meal Generator" style={styles.cardImage} />
          <h4 style={styles.cardTitle}>🍽️ AI-Powered Meal Generator</h4>
          <p style={styles.cardDesc}>
            Get customized meal plans based on your weight and fitness goals.  
            Choose from vegetarian, non-vegetarian, or mixed meals.
          </p>
        </div>

        <div style={styles.card}>
          {/* <img src="https://via.placeholder.com/200" alt="Healthcare Store" style={styles.cardImage} /> */}
          <img src={healthImage} alt="Meal Generator" style={styles.cardImage} />
          <h4 style={styles.cardTitle}>🛒 Healthcare Store</h4>
          <p style={styles.cardDesc}>
            Shop for proteins, supplements, and vitamins from top brands, all in one place!
          </p>
        </div>

        <div style={styles.card}>
          {/* <img src="https://via.placeholder.com/200" alt="Calorie Calculator" style={styles.cardImage} /> */}
          <img src={calculatorImage} alt="Meal Generator" style={styles.cardImage} />
          <h4 style={styles.cardTitle}>🔥 Calorie & Macro Calculator</h4>
          <p style={styles.cardDesc}>
            Enter your weight to get precise macro recommendations to meet your fitness goals.
          </p>
        </div>

        <div style={styles.card}>
          {/* <img src="https://via.placeholder.com/200" alt="Shopping Experience" style={styles.cardImage} /> */}
          <img src={shoppingImage} alt="Meal Generator" style={styles.cardImage} />
          <h4 style={styles.cardTitle}>📦 Seamless Shopping</h4>
          <p style={styles.cardDesc}>
            Enjoy a **smooth, secure checkout experience** with fast delivery options.
          </p>
        </div>
      </div>

      <p style={styles.footer}>
        Start your fitness journey today with Balance Bite! 🚀
      </p>
     <Footer/>
    </div>
  );
};


// Inline CSS
const styles = {
  container: {
    maxWidth: "1100px",
    margin: "40px auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  description: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px",
    lineHeight: "1.6",
  },
  subTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#222",
    marginBottom: "20px",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    background: "#f8f9fa",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease",
  },
  cardImage: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#007bff",
  },
  cardDesc: {
    fontSize: "16px",
    color: "#444",
    lineHeight: "1.5",
  },
  footer: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#007bff",
    marginTop: "20px",
  },
};

export default AboutUs;
