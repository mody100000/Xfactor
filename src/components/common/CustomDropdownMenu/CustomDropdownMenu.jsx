import React, { useState, useRef, useEffect } from 'react';
import styles from './CustomDropdownMenu.module.css';

const CustomDropdownMenu = ({ options, placeholder = "Select an option" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

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

    return (
        <div className={`${styles.dropdownContainer}`} ref={dropdownRef}>
            <div
                className={`${styles.dropdownHeader} d-flex align-items-center justify-content-between`}
                onClick={toggleDropdown}
                tabIndex={0}
            >
                <span>{selectedOption || placeholder}</span>
                <span className={`${styles.chevron} ${isOpen ? styles.chevronUp : ''}`}></span>
            </div>
            {isOpen && (
                <ul className={styles.dropdownList}>
                    {options.map((option) => (
                        <li
                            key={option}
                            className={styles.dropdownItem}
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdownMenu;