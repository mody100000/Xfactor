import { useMemo, useState } from "react";
import styles from "./CoachBackground.module.css";
import { Link, useNavigate } from "react-router-dom";
import CustomDropdown from "../../common/CustomDropdown/CustomDropdown";
import Joi from "joi";
import { IoChevronBackOutline } from "react-icons/io5";
import InputWithIcon from "../../common/InputWithIcon";

const CoachBackground = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        Address: "",
        Apartment: "",
        Country: "",
        State: "",
        City: "",
        ZibCode: ""
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/CoachExperience");
    };

    const validationRules = useMemo(
        () => ({
            Address: Joi.string().required().label("Address"),
            Apartment: Joi.string().required().label("Apartment"),
            Country: Joi.string().required().label("Country"),
            State: Joi.string().required().label("State"),
            City: Joi.string().required().label("City"),
            ZibCode: Joi.string().required().label("ZibCode"),
        }),
        []
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validatedKeys = Object.keys(validationRules);
        let valid = true;

        setErrors({});

        for (const key of validatedKeys) {
            const fieldErrors = validate(key, data[key]);
            if (fieldErrors.length) {
                valid = false;
                setErrors((prev) => ({ ...prev, [key]: fieldErrors }));
            }
        }

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
                <h2 className={styles.title}>Coach Background</h2>
                <form className={styles.custom_form} onSubmit={handleSubmit}>
                    <div className={styles.inputsWrapper}>
                        <div className={styles.column}>
                            <InputWithIcon
                                type="text"
                                onChange={(e) => handleInputChange(e, "Address")}
                                errors={errors["Address"]}
                                placeholder={"Address"}
                            />
                            <InputWithIcon
                                type="text"
                                onChange={(e) => handleInputChange(e, "Country")}
                                errors={errors["Country"]}
                                placeholder={"Country"}
                            />
                            <InputWithIcon
                                type="text"
                                onChange={(e) => handleInputChange(e, "City")}
                                errors={errors["City"]}
                                placeholder={"City"}
                            />
                        </div>
                        <div className={styles.column}>
                            <InputWithIcon
                                type="text"
                                onChange={(e) => handleInputChange(e, "Apartment")}
                                errors={errors["Apartment"]}
                                placeholder={"Apartment"}
                            />
                            <InputWithIcon
                                type="text"
                                onChange={(e) => handleInputChange(e, "State")}
                                errors={errors["State"]}
                                placeholder={"State"}
                            />
                            <InputWithIcon
                                type="text"
                                onChange={(e) => handleInputChange(e, "ZibCode")}
                                errors={errors["ZibCode"]}
                                placeholder={"Zib Code"}
                            />
                        </div>
                    </div>
                    <div className="d-flex gap-2 mt-3 mb-4 mx-auto">
                        <button type="button" className={styles.backBtn} onClick={handleNavigate}><IoChevronBackOutline size={25} /></button>
                        <Link to="/CoachProfile">
                            <button className={styles.nextBtn} type="submit" disabled={loading}>
                                Next
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CoachBackground;