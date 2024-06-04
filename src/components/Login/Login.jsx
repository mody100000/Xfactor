import styles from "./Login.module.css";
import { IoLockClosed } from "react-icons/io5";
import { useState } from "react";
import { useMemo } from "react";
import Joi from "joi";
import { MdEmail } from "react-icons/md";
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
          <h1 className={`${styles.gym_title} fw-bold`}>
          <img src={logo} className={styles.logo} alt="XFACTOR" />

          </h1>
          <h3 className="fw-bold">login</h3>
          <h6 className="text-muted mb-4 ">Login to track your membership </h6>
          <div className={styles.inputsWrapper}>
            <InputWithIcon
              type="email"
              onChange={(e) => handleInputChange(e, "email")}
              placeholder={"email"}
              errors={errors["email"]}
              Icon={MdEmail}
            />
            <InputWithIcon
              type="password"
              onChange={(e) => handleInputChange(e, "password")}
              placeholder={"password"}
              errors={errors["password"]}
              Icon={IoLockClosed}
            />
          </div>
          <button
            className={styles.btn}
            type="submit"
          >
            Login
          </button>
          <h6 className="text-muted ">
            Dont have an account yet?
            <Link to="/register" className="text-decoration-none">
              <span className="text-dark mx-2 fw-bold ">Register Now</span>
            </Link>
          </h6>
        </form>
      </div>
    </div>
  );
};

export default Login;
