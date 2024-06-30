import React from "react";
import Input from "./Input";
import InputStyles from "./styles/inputs.module.css";
import PropTypes from "prop-types";
import Tooltip from "./tooltip";

const InputWithIcon = (props) => {
  const { Icon, errors, as, ...rest } = props;
  const inputRef = React.createRef();
  const handleFocusInput = () => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  };
  return (
    <div className={InputStyles.inputWrapper}>
      <div className={InputStyles.inputGroup}>
        {Icon && (
          <div className={InputStyles.iconWrapper} onClick={handleFocusInput}>
            <Icon size={iconSize} />
          </div>
        )}
        <div className={InputStyles.inputWrapper}>
          <Input
            ref={inputRef}
            className={errors?.length > 0 ? InputStyles.inputDanger : ""}
            as={as}
            {...rest}
          />
          {rest.type === "date" && (
            <label className={`${InputStyles.placeholderLabel}`}>
              {rest.placeholder}
            </label>
          )}
        </div>
      </div>

      <div className={InputStyles.errors}>
        {errors?.map((e) => (
          <Tooltip
            key={e}
            className={InputStyles.errorField}
            placement={"bottom"}
            content={e}
          />
        ))}
      </div>
    </div>
  );
};

InputWithIcon.propTypes = {
  Icon: PropTypes.func,
  errors: PropTypes.array,
  as: PropTypes.oneOf(["input", "textarea"]),
};
InputWithIcon.defaultProps = {
  as: "input"
};

export default InputWithIcon;
