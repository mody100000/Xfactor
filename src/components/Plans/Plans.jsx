import React from "react";
import styles from "./Plans.module.css";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    title: "Standard",
    fee: "50",
    features: [
      "6 days per week",
      "Personal Trainer",
      "Access to all classes",
      "Free Events",
    ],
  },
  {
    title: "Gold",
    fee: "70",
    features: [
      "7 days per week",
      "Personal Trainer",
      "Access to all classes",
      "Free Nutrition Plan",
    ],
  },
  {
    title: "Premium",
    fee: "90",
    features: [
      "Unlimited access",
      "Premium Trainer Support",
      "Access to VIP classes",
      "Custom Nutrition Plan",
    ],
  },
];

const Plans = () => {
  return (
    <section id="pricing" className={styles.ourPricing}>
      <div className="container">
        <div className="row">
          <div className={styles.sectionTitle}>
            <h1 className={styles.sectionTitleWhite}>OUR PACKAGES</h1>
            <p className={styles.sectionTitleWhite}>
              Choose the best plan that suits your needs and start your fitness
              journey with us.
            </p>
          </div>

          {plans.map((plan, i) => (
            <div
              key={i}
              className={`col-xs-12 col-sm-4 col-lg-4 ${styles.planColumn}`}
            >
              <div className={`${styles.pricingTable} ${styles.pricingTable2}`}>
                <div className={styles.pricingTableHeader}>
                  <h3 className={styles.title}>{plan.title}</h3>
                  <h5 className={styles.priceMonth}>Per Month</h5>
                  <h1 className={styles.priceValue}>
                    {plan.fee}{" "}
                    <span className={styles.valueBg}>EGP {plan.fee}</span>
                  </h1>
                </div>
                <ul className={styles.pricingContent}>
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <p>
                        <FaCheck color="#2ED6A8" className={styles.checkIcon} />
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className={`btn btn-lg ${styles.btnPriceBg}`}>Choose Plan</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
