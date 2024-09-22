import { useMemo, useState } from "react";
import styles from "./CoachProfile.module.css";
import { Link, useNavigate } from "react-router-dom";
import Joi from "joi";
import { IoChevronBackOutline } from "react-icons/io5";
import InputWithIcon from "../../common/InputWithIcon";

const CoachProfile = () => {
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
        navigate("/CoachBackground");
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
    //TODO:dont forget to rplace the value name
    return (
        <div className={`container ${styles.loginHolder}`}>
            <div className={styles.custom_form_holder}>
                <h2 className={styles.title}>Coach Profile</h2>
                <form className={styles.custom_form} onSubmit={handleSubmit}>
                    <div className={styles.inputsWrapper}>
                        <div className={styles.column}>
                            <InputWithIcon
                                type="text"
                                className={styles.textarea}

                                onChange={(e) => handleInputChange(e, "Address")}
                                errors={errors["Address"]}
                                placeholder={"Coach experience"}
                                as="textarea"
                            />
                            <InputWithIcon
                                type="text"
                                className={styles.textarea}

                                onChange={(e) => handleInputChange(e, "Country")}
                                errors={errors["Country"]}
                                placeholder={"Athletics Highlights"}
                                as="textarea"

                            />
                        </div>
                        <div className={styles.column}>
                            <InputWithIcon
                                className={styles.textarea}
                                type="text"
                                onChange={(e) => handleInputChange(e, "State")}
                                errors={errors["State"]}
                                placeholder={"Session Plan"}
                                as="textarea"

                            />
                            <InputWithIcon
                                type="text"
                                className={styles.textarea}

                                onChange={(e) => handleInputChange(e, "ZibCode")}
                                errors={errors["ZibCode"]}
                                placeholder={"On Sentence Bio"}
                                as="textarea"

                            />
                        </div>
                    </div>
                    <div className="d-flex gap-2 mt-3 mb-4 mx-auto">
                        <button type="button" className={styles.backBtn} onClick={handleNavigate}><IoChevronBackOutline size={25} /></button>
                        <Link to="/CoachPrice">
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

export default CoachProfile;