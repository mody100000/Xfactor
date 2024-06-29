import { useMemo, useState } from "react";
import InputWithIcon from "../../components/common/InputWithIcon";
import styles from "./Register.module.css";
import {
  IoPerson,
  IoLockClosed,
  IoPersonOutline,
} from "react-icons/io5";
import {FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Joi from "joi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Register = () => {
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
      birth_date: Joi.date().required().label("birth_date"),
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
    <div className={`container ${styles.loginHolder}`}>
      <h1 className="mt-3 fw-bold">Register</h1>
      <div className={styles.custom_form_holder}>
        <form className={styles.custom_form} onSubmit={handleSubmit}>
          {/* <div className={styles.tabHeader}>
            <span className={styles.activeTab}>Personal Information</span>
          </div> */}
          <div className={styles.inputsWrapper}>
            <div className={styles.column}>
            <div className="d-flex flex-column align-items-center text-white mb-3">
  <div className="d-flex align-items-center">
    <span className={styles.progress}></span>
    <span className="fw-bold fs-3">General Information</span>
  </div>
  <span className={styles.line}></span>
</div>
              <InputWithIcon
                type="text"
                onChange={(e) => handleInputChange(e, "first_name")}
                errors={errors["first_name"]}
                placeholder={"First Name"}
               
              />
              <InputWithIcon
                type="text"
                onChange={(e) => handleInputChange(e, "last_name")}
                errors={errors["last_name"]}
                placeholder={"Last Name"}
               
              />
              <InputWithIcon
                type="text"
                onChange={(e) => handleInputChange(e, "additional_name")}
                errors={errors["additional_name"]}
                placeholder={"Additional Name"}
               
              />
              <InputWithIcon
                type="text"
                onChange={(e) => handleInputChange(e, "about_me")}
                errors={errors["about_me"]}
                placeholder={"About Me"}
               
              />
            </div>
            <div className={styles.column}>
            <div className="d-flex justify-content-center align-items-center text-white mb-3 border-bottom border-danger ">
        <span className={styles.progressOff}></span>
        <span className="fw-bold fs-3 ">General Information</span>
      {/* <span className={styles.line}></span> */}

        </div>
              <InputWithIcon
                type="text"
                onChange={(e) => handleInputChange(e, "current_position")}
                errors={errors["current_position"]}
                placeholder={"Current Position"}
               
              />
              <InputWithIcon
                type="text"
                onChange={(e) => handleInputChange(e, "phone")}
                errors={errors["phone"]}
                placeholder={"Phone"}
              />
              <InputWithIcon
                type="email"
                onChange={(e) => handleInputChange(e, "email")}
                errors={errors["email"]}
                placeholder={"Email"}
              
              />
              <InputWithIcon
                type="text"
                onChange={(e) => handleInputChange(e, "location")}
                errors={errors["location"]}
                placeholder={"Location"}
               
              />
            </div>
          </div>
          <button className={styles.btn} type="submit" disabled={loading}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
  
};

export default Register;
