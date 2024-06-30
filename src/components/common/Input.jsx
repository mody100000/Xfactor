import clsx from "clsx";
import PropTypes from "prop-types";
import InputStyles from "./styles/inputs.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  const { type, value, onChange, className, as, ...rest } = props;

  if (as === "textarea") {
    return (
      <textarea
        value={value}
        onChange={onChange}
        className={clsx(InputStyles.input, className)}
        ref={ref}
        {...rest}
      />
    );
  }

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={clsx(InputStyles.input, className)}
      ref={ref}
      {...rest}
    />
  );
});

Input.displayName = "Input";
Input.propTypes = {
  type: PropTypes.oneOf(["text", "password", "email", "date", "number"]),
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  as: PropTypes.oneOf(["input", "textarea"]),
};
Input.defaultProps = {
  as: "input"
};

export default Input;
