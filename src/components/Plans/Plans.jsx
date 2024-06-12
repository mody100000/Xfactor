import React from "react";
import styles from "./Plans.module.css";
import { FaRegCheckCircle } from "react-icons/fa";
import standered from "../../assets/standered.png";
import gold from "../../assets/goldPlan.png";
import premium from "../../assets/premium.png";

const plans = [
  {
    title: "Standard",
    icon: <img src={standered} alt="Total Clients" className={styles.icon} />,
    fee: "1500",
    features: [
      "6 days per week",
      "Personal Trainer",
      "Access to all classes",
      "Free Events",
      "Access to all classes",
      "Free Events",
    ],
  },
  {
    title: "Gold",
    icon: <img src={gold} alt="Total Clients" className={styles.icon} />,
    fee: "70",
    features: [
      "7 days per week",
      "Personal Trainer",
      "Access to all classes",
      "Free Nutrition Plan",
      "Access to all classes",
      "Free Nutrition Plan",
    ],
  },
  {
    title: "Premium",
    icon: <img src={premium} alt="Total Clients" className={styles.icon} />,
    fee: "90",
    features: [
      "Unlimited access",
      "Premium Trainer Support",
      "Access to VIP classes",
      "Custom Nutrition Plan",
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
            <h1 className={`fw-bolder ${styles.sectionTitleWhite}`}>OUR PACKAGES</h1>
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
                  <div className="d-flex align-items-center justify-content-center ">
                    <span className={styles.iconContainer}>{plan.icon}</span>
                    <h3 className={styles.title}>{plan.title}</h3>
                  </div>
                  <h1 className={styles.priceValue}>
                    ${plan.fee} <span className={styles.month}>/Month</span>
                  </h1>
                </div>
                <ul className={styles.pricingContent}>
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <p>
                        <FaRegCheckCircle size={25} className={styles.checkIcon} />
                        {feature}
                      </p>
                    </li>
                  ))}
                  <div className={styles.btnContainer}>
                    <p className={`btn btn-lg ${styles.btnPriceBg}`}>Choose Plan</p>
                  </div>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
