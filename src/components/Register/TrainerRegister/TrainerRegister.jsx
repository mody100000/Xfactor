import { useMemo, useState } from "react";
import styles from "./TrainerRegister.module.css";
import Joi from "joi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import InputWithIcon from "../../common/InputWithIcon";

const TrainerRegister = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    full_name: "",
    email: "",
    weight: undefined,
    height: undefined,
    birth_date: undefined,
    phone_number: "",
    password: undefined,
    Cpassword: undefined,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const validationRules = useMemo(
    () => ({
      full_name: Joi.string()
        .min(3)
        .max(50)
        .pattern(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/)
        .message(
          "Name must only contain letters and single spaces between words"
        )
        .required()
        .label("full_name"),
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .label("email"),
      weight: Joi.number().required().max(400).label("weight"),
      height: Joi.number().required().max(400).label("height"),
      birth_date: Joi.date().required().label("birth_date").min(3).max(90),
      phone_number: Joi.string()
        .required()
        .min(5)
        .pattern(/^[0-9]+$/)
        .messages({
          "string.pattern.base": "Please enter a valid phone number.",
        })
        .label("phone_number"),
      password: Joi.string()
        .required()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/)
        .message(
          "invalid password :Password must be(one digit-one uppercase letter-one lowercase letter"
        ),
      Cpassword: Joi.string().required().label("Cpassword"),
    }),
    []
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validatedKeys = Object.keys(validationRules);
    let valid = true;
    let confirmPasswordError = "";
    for (const key of validatedKeys) {
      if (key !== "Cpassword") {
        const errors = validate(key, data[key]);
        if (errors.length) {
          valid = false;
          setErrors((prev) => ({ ...prev, [key]: errors }));
        }
      }
    }
    // Validate confirmPassword
    if (data.password !== data.Cpassword) {
      valid = false;
      confirmPasswordError = "Passwords do not match";
      setErrors((prev) => ({ ...prev, Cpassword: [confirmPasswordError] }));
    } else {
      setErrors((prev) => ({ ...prev, Cpassword: [] }));
    }
    if (valid) {
      navigate("/")
    }
  };
  const validate = (key, value) => {
    const validationRule = validationRules[key];
    const validationResult = validationRule.validate(value);
    if (validationResult.error) {
      return validationResult.error.details.map((d) => d.message);
    }
    return [];
  };
  const handleInputChange = (e, key) => {
    const val = e.target.value;
    const errors = validate(key, val);
    if (errors.length) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [key]: errors,
      }));
    } else {
      setErrors((prev) => ({ ...prev, [key]: [] }));
      setData((prev) => ({ ...prev, [key]: val }));
    }
  };

  return (
    <div className={styles.imageBackground}>
      <div className={`container ${styles.loginHolder}`}>
        <div className={styles.custom_form_holder}>
          <form className={styles.custom_form} onSubmit={handleSubmit}>
            <img src={logo} className={styles.logo} alt="XFACTOR" />
            <h3 className="fw-bold fs-2 mb-4">Register</h3>
            <h6 className={`mb-4 ${styles.supTitle}`}>Create your membership now</h6>
            <div className={styles.inputsWrapper}>
              <InputWithIcon
                type="text"
                onChange={(e) => handleInputChange(e, "full_name")}
                errors={errors["full_name"]}
                placeholder={"Full Name"}
              />
              <InputWithIcon
                type="email"
                onChange={(e) => handleInputChange(e, "email")}
                placeholder={"Email"}
                errors={errors["email"]}
              />
              <InputWithIcon
                type="number"
                className="text-secondary"
                onChange={(e) => handleInputChange(e, "birth_date")}
                placeholder={"Age"}
                errors={errors["birth_date"]}
              />
              <InputWithIcon
                type="number"
                onChange={(e) => handleInputChange(e, "phone_number")}
                placeholder={"Phone Number"}
                errors={errors["phone_number"]}
              />
              <InputWithIcon
                type="password"
                onChange={(e) => handleInputChange(e, "password")}
                placeholder={"Password"}
                errors={errors["password"]}
              />
              <InputWithIcon
                type="password"
                onChange={(e) => handleInputChange(e, "Cpassword")}
                placeholder={"Confirm Password"}
                errors={errors["Cpassword"]}
              />
            </div>
            <button className={styles.btn} type="submit" disabled={loading}>
              Register
            </button>
            <h6 className={styles.supTitle}>
              Already have an account ?
              <Link to="/login" className="text-decoration-none">
                <span className={`mx-2 fw-bold ${styles.login}`}>Login Now</span>
              </Link>
            </h6>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TrainerRegister;