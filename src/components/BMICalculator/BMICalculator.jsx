import React, { useState } from "react";
import styles from "./BMICalculator.module.css";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

const BMICalculator = () => {
  const [unitSystem, setUnitSystem] = useState("Metric");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(0);
  const [toggleIcon, setToggleIcon] = useState(true);

  const toggleUnitSystem = () => {
    setUnitSystem((prev) => (prev === "Metric" ? "Imperial" : "Metric"));
    setWeight("");
    setHeight("");
    setBMI(0);
    setToggleIcon(!toggleIcon);
  };

  const calculateBMI = () => {
    if (weight && height) {
      let bmiValue;
      if (unitSystem === "Metric") {
        const heightInMeters = height / 100;
        bmiValue = weight / (heightInMeters * heightInMeters);
      } else {
        // For Imperial: weight in pounds, height in inches
        bmiValue = (weight / (height * height)) * 703;
      }
      setBMI(bmiValue.toFixed(2));
    }
  };

  return (
    <section className={styles.bmiCalculatorSection}>
      <div className="container">
        <h1 className={styles.title}>BMI Calculator</h1>
        <h2 className={styles.subtitle}>Get Into Shape , Now!</h2>
        <p className={styles.description}>
          Calculate your Body Mass Index (BMI) to find out if you are at a healthy weight.
        </p>
        <div className={styles.calculatorContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.inputGroupFull}>
              <h2 className="mb-4 fw-bold">Know Your BMI</h2>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={styles.inputSelectField}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <input
                id="weight"
                type="number"
                placeholder="Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className={styles.inputField}
              />
              <span className={styles.unit}>{unitSystem === "Metric" ? "kg" : "lb"}</span>
            </div>
            <div className={styles.inputGroup}>
              <input
                id="height"
                type="number"
                placeholder="Height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className={styles.inputField}
              />
              <span className={styles.unit}>{unitSystem === "Metric" ? "cm" : "in"}</span>
            </div>
            <div className={`d-flex justify-content-between align-items-center ${styles.switchRow}`}>
              <span>Metric</span>
              {toggleIcon ? (
                <FaToggleOn size={35}  color="#BF1E2E" onClick={toggleUnitSystem} style={{ cursor: "pointer" }} />
              ) : (
                <FaToggleOff size={35} onClick={toggleUnitSystem} style={{ cursor: "pointer" }} />
              )}
              <span>Imperial</span>
              <div>
              <button onClick={calculateBMI} className={styles.calculateButton}>
                Calculate
              </button>
              </div>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <h3 className={styles.bmiTitle}>Your BMI is</h3>
            <p className={styles.bmiValue}>{bmi || "0.00"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
