import { useMemo, useState } from "react";
import styles from "./CoachExperience.module.css";
import { Link, useNavigate } from "react-router-dom";
import CustomDropdown from "../../common/CustomDropdown/CustomDropdown";
import Joi from "joi";
import { IoChevronBackOutline } from "react-icons/io5";

const CoachExperience = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        levelOfExperience: "",
        hoursPerWeek: "",
        privateSessionTime: "",
        TrainType: "",
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/generalregister");
    };

    const validationRules = useMemo(
        () => ({
            levelOfExperience: Joi.string().required().label("Level Of Experience"),
            hoursPerWeek: Joi.string().required().label("Hours Per Week"),
            privateSessionTime: Joi.string().required().label("Private Session Time"),
            TrainType: Joi.string().required().label("Heard About Us")
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
                <h2 className={styles.title}>Coach Experience</h2>
                <form className={styles.custom_form} onSubmit={handleSubmit}>
                    <div className={styles.inputsWrapper}>
                        <div className={styles.column}>
                            <CustomDropdown
                                options={["Football", "Basketball", "Tennis", "Swimming", "Running"]}
                                placeholder="Train Athlete In"
                                onChange={(e) => handleInputChange(e, "TrainType")}
                                errors={errors["TrainType"]}
                            />
                            <CustomDropdown
                                options={["Football", "Basketball", "Tennis", "Swimming", "Running"]}
                                placeholder="How many hours/week do you coach private sessions?"
                                onChange={(e) => handleInputChange(e, "privateSessionTime")}
                                errors={errors["privateSessionTime"]}
                            />
                        </div>
                        <div className={styles.column}>
                            <CustomDropdown
                                options={["Beginner", "Intermediate", "Advanced", "Expert", "Professional"]}
                                placeholder="Select your highest level of coaching experience"
                                onChange={(e) => handleInputChange(e, "levelOfExperience")}
                                errors={errors["levelOfExperience"]}
                            />
                            <CustomDropdown
                                options={["Less than 5 hours", "5-10 hours", "10-15 hours", "15-20 hours", "More than 20 hours"]}
                                placeholder="How many hours a week would you spend training?"
                                onChange={(e) => handleInputChange(e, "hoursPerWeek")}
                                errors={errors["hoursPerWeek"]}
                            />
                        </div>
                    </div>
                    <div className="d-flex gap-2 mt-3 mb-4 mx-auto">
                        <button type="button" className={styles.backBtn} onClick={handleNavigate}><IoChevronBackOutline size={25} /></button>
                        <Link to="/CoachBackground">
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

export default CoachExperience;