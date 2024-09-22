import React, { useState, useRef, useEffect } from 'react';
import styles from './CustomDropdown.module.css';

const CustomDropdown = ({ options, placeholder, onChange, errors }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onChange({ target: { value: option } });
    };

    return (
        <div className={styles.dropdownContainer} ref={dropdownRef}>
            <div
                className={`${styles.dropdownHeader} ${errors && errors.length > 0 ? styles.inputDanger : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                tabIndex="0" // Added to make it focusable
            >
                <span className={selectedOption ? styles.selectedOption : styles.placeholder}>
                    {selectedOption || placeholder}
                </span>
                <span className={`${styles.chevron} ${isOpen ? styles.chevronUp : ''}`}></span>
            </div>
            {isOpen && (
                <ul className={styles.dropdownList}>
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className={styles.dropdownItem}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
            <div className={styles.errorSpace}>
                {errors && errors.length > 0 ? (
                    errors.map((error, index) => (
                        <span key={index} className={styles.errorField}>
                            {error}
                        </span>
                    ))
                ) : (
                    <span className={styles.errorPlaceholder}></span>
                )}
            </div>
        </div>
    );
};

export default CustomDropdown;
