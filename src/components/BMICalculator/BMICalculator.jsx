import React, { useState } from "react";
import styles from "./BMICalculator.module.css";

const BMICalculator = () => {
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(0);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBMI(bmiValue.toFixed(2));
    }
  };

  return (
    <section className={styles.bmiCalculatorSection}>
      <div className="container">
        <h1 className={styles.title}>BMI Calculator</h1>
        <h2 className={styles.subtitle}>Get into shape now</h2>
        <p className={styles.description}>
          Calculate your Body Mass Index (BMI) to find out if you are at a
          healthy weight.
        </p>
        <div className={styles.calculatorContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.inputGroup}>
              <h2 className="mb-4 fw-bold">Know Your BMI</h2>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={styles.inputField}
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
              <span className={styles.unit}>kg</span>
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
              <span className={styles.unit}>cm</span>
            </div>
            <button onClick={calculateBMI} className={styles.calculateButton}>
              Calculate
            </button>
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
