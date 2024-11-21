import { useMemo, useState } from "react";
import styles from "./TrainerRegister.module.css";
import Joi from "joi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import InputWithIcon from "../../common/InputWithIcon";
import CustomDropdown from "../../common/CustomDropdown/CustomDropdown";

const TrainerRegister = () => {
  const [loading, setLoading] = useState(false);
  const [trainerType, setTrainerType] = useState('');
  const [data, setData] = useState({
    full_name: "",
    email: "",
    birth_date: undefined,
    zib_code: "",
    phone_number: "",
    spoutOfInterest: "",
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
      birth_date: Joi.date().required().label("birth_date").min(3).max(90),
      zib_code: Joi.string().required().label("Zib Code"),
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
      spoutOfInterest: Joi.string().required().label("Heard About Us")
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
      navigate("/dashboard")
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
  const handleTrainerTypeChange = (type) => {
    setTrainerType(type);
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
              <div className="my-2">
                <label className={styles.labelCoach}>
                  <span
                    onClick={() => handleTrainerTypeChange('online')}
                    className={`${styles.radioInputCoach} ${trainerType === 'online' ? styles.checked : ''}`}
                  ></span>
                  <p className="fs-5 text-decoration-underline mb-0">Athlete</p>
                </label>
              </div>
              <div className="my-2">
                <label className={styles.labelCoach}>
                  <span
                    onClick={() => handleTrainerTypeChange('offline')}
                    className={`${styles.radioInputCoach} ${trainerType === 'offline' ? styles.checked : ''}`}
                  ></span>
                  <p className="fs-5 text-decoration-underline mb-0">Parent</p>
                </label>
              </div>
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
              <CustomDropdown
                options={["Football", "Basketball", "Tennis", "Swimming", "Running", "Other"]}
                placeholder="Spout of interest"
                onChange={(e) => handleInputChange(e, "spoutOfInterest")}
                errors={errors["spoutOfInterest"]}
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