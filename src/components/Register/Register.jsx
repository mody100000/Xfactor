import { useMemo, useState } from "react";
import InputWithIcon from "../../components/common/InputWithIcon";
import styles from "./Register.module.css";
import Joi from "joi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    additional_name: "",
    about_me: "",
    current_position: "",
    location: "",
    email: "",
    phone_number: "",
    password: undefined,
    Cpassword: undefined,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validationRules = useMemo(
    () => ({
      first_name: Joi.string().min(3).max(50).required().label("First Name"),
      last_name: Joi.string().min(3).max(50).required().label("Last Name"),
      additional_name: Joi.string().max(50).label("Additional Name"),
      about_me: Joi.string().max(500).label("About Me"),
      current_position: Joi.string().max(100).label("Current Position"),
      location: Joi.string().max(100).label("Location"),
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .label("Email"),
      phone_number: Joi.string()
        .required()
        .min(5)
        .pattern(/^[0-9]+$/)
        .messages({
          "string.pattern.base": "Please enter a valid phone number.",
        })
        .label("Phone Number"),
      password: Joi.string()
        .required()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/)
        .message(
          "Password must contain at least one digit, one uppercase letter, and one lowercase letter"
        ),
      Cpassword: Joi.string().required().label("Confirm Password"),
    }),
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validatedKeys = Object.keys(validationRules);
    let valid = true;

    // Reset errors before validating
    setErrors({});

    // Validate each field
    for (const key of validatedKeys) {
      if (key !== "Cpassword") {
        const fieldErrors = validate(key, data[key]);
        if (fieldErrors.length) {
          valid = false;
          setErrors((prev) => ({ ...prev, [key]: fieldErrors }));
        }
      }
    }

    // Validate confirmPassword
    if (data.password !== data.Cpassword) {
      valid = false;
      setErrors((prev) => ({
        ...prev,
        Cpassword: ["Passwords do not match"],
      }));
    }

    // Log validation results
    console.log("Validation Results:", {
      valid,
      errors,
      data,
    });

    if (valid) {
      console.log("Form is valid. Navigating to home...");
      navigate("/generalregister");
    } else {
      console.log("Form is invalid. Errors:", errors);
    }
  };

  const validate = (key, value) => {
    const validationRule = validationRules[key];
    const { error } = validationRule.validate(value);
    if (error) {
      return error.details.map((d) => d.message);
    }
    return [];
  };

  const handleInputChange = (e, key) => {
    const val = e.target.value;
    const fieldErrors = validate(key, val);
    setData((prev) => ({ ...prev, [key]: val }));
    setErrors((prev) => ({ ...prev, [key]: fieldErrors }));
  };

  return (
    <div className={`container ${styles.loginHolder}`}>
      <h1 className="mt-3 fw-bold">Register</h1>
      <div className={styles.custom_form_holder}>
        <form className={styles.custom_form} onSubmit={handleSubmit}>
          <div className={styles.inputsWrapper}>
            <div className={styles.column}>
              <div className="d-flex flex-column align-items-center text-white mb-3">
                <div className="d-flex align-items-center border-bottom border-danger">
                  <span className={styles.progress}></span>
                  <span className="fw-bold fs-3">Personal information</span>
                </div>
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
                type="password"
                onChange={(e) => handleInputChange(e, "password")}
                errors={errors["password"]}
                placeholder={"Password"}
              />
              <InputWithIcon
                type="text"
                onChange={(e) => handleInputChange(e, "about_me")}
                errors={errors["about_me"]}
                placeholder={"About Me"}
                as="textarea"
              />
            </div>
            <div className={styles.column}>
              <div className="d-flex flex-column align-items-center text-white mb-3">
                <div className="d-flex align-items-center">
                  <span className={styles.progressOff}></span>
                  <span className="fw-bold fs-3">General Information</span>
                </div>
              </div>
              <InputWithIcon
                type="text"
                onChange={(e) => handleInputChange(e, "current_position")}
                errors={errors["current_position"]}
                placeholder={"Current Position"}
              />
              <InputWithIcon
                type="text"
                onChange={(e) => handleInputChange(e, "phone_number")}
                errors={errors["phone_number"]}
                placeholder={"Phone"}
              />
              <InputWithIcon
                type="email"
                onChange={(e) => handleInputChange(e, "email")}
                errors={errors["email"]}
                placeholder={"Email"}
              />
              <InputWithIcon
                type="password"
                onChange={(e) => handleInputChange(e, "Cpassword")}
                errors={errors["Cpassword"]}
                placeholder={"Confirm Password"}
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
