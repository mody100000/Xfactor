import styles from "./Login.module.css";
import { useState } from "react";
import { useMemo } from "react";
import Joi from "joi";
import { Link, useNavigate } from "react-router-dom";
import InputWithIcon from './../common/InputWithIcon';
import logo from "../../assets/logo.png";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: undefined,
  });
  const [errors, setErrors] = useState({}); // [key: string] : string[]  {"name": ["name is required", "name must be at least 5 chars"]}
  const navigate = useNavigate();
  const validationRules = useMemo(
    () => ({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .label("email"),
      password: Joi.string().required().label("password"),
    }),
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validatedKeys = Object.keys(validationRules);
    let valid = true;
    for (const key of validatedKeys) {
      const errors = validate(key, data[key]);
      if (errors.length) {
        valid = false;
        setErrors((prev) => ({ ...prev, [key]: errors }));
      }
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
      <div className={styles.custom_form_holder}>
        <form className={styles.custom_form} onSubmit={handleSubmit}>
          <img src={logo} className={styles.logo} alt="XFACTOR" />
          <h3 className="fw-bold fs-1 mb-4">login</h3>
          <h6 className={`mb-4 ${styles.supTitle}`}>Login to track your membership </h6>
          <div className={styles.inputsWrapper}>
            <InputWithIcon
              type="email"
              onChange={(e) => handleInputChange(e, "email")}
              placeholder={"email"}
              errors={errors["email"]}
            />
            <InputWithIcon
              type="password"
              onChange={(e) => handleInputChange(e, "password")}
              placeholder={"password"}
              errors={errors["password"]}
            />
          </div>
          <button
            className={styles.btn}
            type="submit"
          >
            Login
          </button>
          <h6 className={styles.supTitle}>
            Dont have an account yet?
            <Link to="/registerOptions" className="text-decoration-none">
              <span className={`mx-2 fw-bold ${styles.register}`}>Register Now</span>
            </Link>
          </h6>
        </form>
      </div>
    </div>
  );
};

export default Login;
