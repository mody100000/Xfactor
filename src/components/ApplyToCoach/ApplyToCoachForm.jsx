import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSport, setAddress } from '../../store/features/coachSlice';
import styles from './ApplyToCoachForm.module.css';
import { useNavigate } from 'react-router-dom';

const sportsList = ["Football", "Basketball", "Tennis", "Swimming", "Running"];
const addressesList = ["Los Angeles", "New York", "Chicago", "San Francisco", "Miami"];

const ApplyToCoachForm = () => {
  const [sportInput, setSportInput] = useState('');
  const [addressInput, setAddressInput] = useState('');
  const [filteredSports, setFilteredSports] = useState([]);
  const [filteredAddresses, setFilteredAddresses] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    validateForm();
  }, [sportInput, addressInput]);

  const validateForm = () => {
    const isSportValid = sportsList.includes(sportInput);
    const isAddressValid = addressesList.includes(addressInput);
    setIsButtonDisabled(!(isSportValid && isAddressValid));
  };

  const handleSportChange = (e) => {
    const value = e.target.value;
    setSportInput(value);
    if (value.length > 0) {
      const filtered = sportsList.filter(sport => sport.toLowerCase().includes(value.toLowerCase()));
      setFilteredSports(filtered);
    } else {
      setFilteredSports([]);
    }
  };

  const handleAddressChange = (e) => {
    const value = e.target.value;
    setAddressInput(value);
    if (value.length > 0) {
      const filtered = addressesList.filter(address => address.toLowerCase().includes(value.toLowerCase()));
      setFilteredAddresses(filtered);
    } else {
      setFilteredAddresses([]);
    }
  };

  const handleSportSelect = (sport) => {
    setSportInput(sport);
    setFilteredSports([]);
  };

  const handleAddressSelect = (address) => {
    setAddressInput(address);
    setFilteredAddresses([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSport(sportInput));
    dispatch(setAddress(addressInput));
    navigate('/training-options');
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Apply to Coach Now</h1>
      <p className={styles.description}>
        Train with the largest network of expert coaches with a proven track record of improving athletic performance.
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={sportInput}
            onChange={handleSportChange}
            placeholder="Enter your sport"
            className={styles.input}
          />
          {filteredSports.length > 0 && (
            <ul className={styles.suggestions}>
              {filteredSports.map((sport, index) => (
                <li key={index} onClick={() => handleSportSelect(sport)}>
                  {sport}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={addressInput}
            onChange={handleAddressChange}
            placeholder="Enter your address"
            className={styles.input}
          />
          {filteredAddresses.length > 0 && (
            <ul className={styles.suggestions}>
              {filteredAddresses.map((address, index) => (
                <li key={index} onClick={() => handleAddressSelect(address)}>
                  {address}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button type="submit" className={styles.submitButton} disabled={isButtonDisabled}>Apply Now</button>
      </form>
    </div>
  );
};

export default ApplyToCoachForm;
