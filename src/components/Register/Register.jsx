import { useMemo, useState } from "react";
import InputWithIcon from "../../components/common/InputWithIcon";
import styles from "./Register.module.css";
import Joi from "joi";
import { useNavigate } from "react-router-dom";
import CustomDropdown from "../common/CustomDropdown/CustomDropdown";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    date_Of_birth: "",
    zib_code: "",
    gender: "",
    referral_code: "",
    heardAboutUs: "",
    password: undefined,
    Cpassword: undefined,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validationRules = useMemo(
    () => ({
      first_name: Joi.string().min(3).max(50).required().label("First Name"),
      last_name: Joi.string().min(3).max(50).required().label("Last Name"),
      zib_code: Joi.string().required().label("Zib Code"),
      date_Of_birth: Joi.date().required().label("Date Of Birth"),
      gender: Joi.string().required().label("Gender"),
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
      // referral_code: Joi.string().label("Referral Code"),
      password: Joi.string()
        .required()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/)
        .message(
          "Password must contain at least one digit, one uppercase letter, and one lowercase letter"
        ).label("Password"),
      Cpassword: Joi.string().required().label("Confirm Password"),
      heardAboutUs: Joi.string().required().label("Heard About Us")
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
      <div className={styles.custom_form_holder}>
        <h2 className={styles.title}>Personal information</h2>
        <form className={styles.custom_form} onSubmit={handleSubmit}>
          <div className={styles.inputsWrapper}>
            <div className={styles.column}>
              <InputWithIcon
                type="text"
                onChange={(e) => handleInputChange(e, "first_name")}
                errors={errors["first_name"]}
                placeholder={"First Name"}
              />
              <InputWithIcon
                type="text"
                onChange={(e) => handleInputChange(e, "phone_number")}
                errors={errors["phone_number"]}
                placeholder={"Phone"}
              />
              <InputWithIcon
                type="text"
                onChange={(e) => handleInputChange(e, "additional_name")}
                errors={errors["additional_name"]}
                placeholder={"Additional Name"}
              />
              <InputWithIcon
                type="text"
                onChange={(e) => handleInputChange(e, "zib_code")}
                errors={errors["zib_code"]}
                placeholder={"Zib Code"}
              />
              <InputWithIcon
                type="password"
                onChange={(e) => handleInputChange(e, "password")}
                errors={errors["password"]}
                placeholder={"Password"}
              />
              <InputWithIcon
                type="text"
                onChange={(e) => handleInputChange(e, "referral_code")}
                errors={errors["referral_code"]}
                placeholder={"Referral Code"}
              />
            </div>
            <div className={styles.column}>
              <InputWithIcon
                type="text"
                onChange={(e) => handleInputChange(e, "last_name")}
                errors={errors["last_name"]}
                placeholder={"Last Name"}
              />
              <InputWithIcon
                type="email"
                onChange={(e) => handleInputChange(e, "email")}
                errors={errors["email"]}
                placeholder={"Email"}
              />
              <InputWithIcon
                type="date"
                onChange={(e) => handleInputChange(e, "date_Of_birth")}
                errors={errors["date_Of_birth"]}
                placeholder={"Date Of birth"}
              />
              <CustomDropdown
                options={["Male", "Female", "Other"]}
                placeholder="Gender"
                onChange={(e) => handleInputChange(e, "gender")}
                errors={errors["gender"]}
              />
              <InputWithIcon
                type="password"
                onChange={(e) => handleInputChange(e, "Cpassword")}
                errors={errors["Cpassword"]}
                placeholder={"Confirm Password"}
              />
              <CustomDropdown
                options={["Facebook", "Instagram", "Twitter", "Company Website", "Other"]}
                placeholder="How did you hear about us?"
                onChange={(e) => handleInputChange(e, "heardAboutUs")}
                errors={errors["heardAboutUs"]}
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
