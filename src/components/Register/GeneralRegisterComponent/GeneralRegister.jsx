import { useState } from "react";
import styles from "./GeneralRegister.module.css";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const GeneralRegister = () => {
  const [specialists, setSpecialists] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [courses, setCourses] = useState([]);
  const [skills, setSkills] = useState([]);
  const [workingDays, setWorkingDays] = useState([]);
  const [isFullTime, setIsFullTime] = useState(false);
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const [placesWorked, setPlacesWorked] = useState('');
  const [timeSlots, setTimeSlots] = useState([]);
  const [trainerType, setTrainerType] = useState('');


  const navigate = useNavigate();

  const handelNavigate = () => {
    navigate("/register")
  }

  const handleAddItem = (setter, items, value, setInputValue) => {
    if (value.trim() !== '') {
      setter([...items, value]);
      setInputValue(''); // Clear input
    }
  };

  const handleWorkingDaysToggle = (day) => {
    setWorkingDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleTimeTypeChange = (type) => {
    setIsFullTime(type === 'fulltime');
  };

  const handleAddTimeSlot = () => {
    if (fromTime && toTime) {
      setTimeSlots([...timeSlots, { fromTime, toTime }]);
      setFromTime('');
      setToTime('');
    }
  };
  const handleTrainerTypeChange = (type) => {
    setTrainerType(type);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>General Information</h2>
      <div className={styles.formColumns}>
        <div className={styles.formColumn}>

          <div className={styles.inputGroup}>
            <div className={styles.inputWithButton}>
              <input
                type="text"
                id="specialistInput"
                placeholder="Specialist"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddItem(setSpecialists, specialists, e.target.value, (val) => e.target.value = val);
                  }
                }}
              />
              <button
                onClick={() => handleAddItem(setSpecialists, specialists, document.getElementById('specialistInput').value, (val) => document.getElementById('specialistInput').value = val)}
              >Add</button>
            </div>
            <div className={styles.tags}>
              {specialists.map((item, index) => (
                <span key={index} className={styles.tag}>{item} <button onClick={() => setSpecialists(specialists.filter((_, i) => i !== index))}>x</button></span>
              ))}
            </div>
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.inputWithButton}>
              <input
                type="text"
                id="experienceInput"
                placeholder="Experiences"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddItem(setExperiences, experiences, e.target.value, (val) => e.target.value = val);
                  }
                }}
              />
              <button
                onClick={() => handleAddItem(setExperiences, experiences, document.getElementById('experienceInput').value, (val) => document.getElementById('experienceInput').value = val)}
              >Add</button>
            </div>
            <div className={styles.tags}>
              {experiences.map((item, index) => (
                <span key={index} className={styles.tag}>{item} <button onClick={() => setExperiences(experiences.filter((_, i) => i !== index))}>x</button></span>
              ))}
            </div>
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.inputWithButton}>
              <input
                type="text"
                id="courseInput"
                placeholder="Courses"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddItem(setCourses, courses, e.target.value, (val) => e.target.value = val);
                  }
                }}
              />
              <button
                onClick={() => handleAddItem(setCourses, courses, document.getElementById('courseInput').value, (val) => document.getElementById('courseInput').value = val)}
              >Add</button>
            </div>
            <div className={styles.tags}>
              {courses.map((item, index) => (
                <span key={index} className={styles.tag}>{item} <button onClick={() => setCourses(courses.filter((_, i) => i !== index))}>x</button></span>
              ))}
            </div>
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.inputWithButton}>
              <input
                type="text"
                id="skillInput"
                placeholder="Skills"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddItem(setSkills, skills, e.target.value, (val) => e.target.value = val);
                  }
                }}
              />
              <button
                onClick={() => handleAddItem(setSkills, skills, document.getElementById('skillInput').value, (val) => document.getElementById('skillInput').value = val)}
              >Add</button>
            </div>
            <div className={styles.tags}>
              {skills.map((item, index) => (
                <span key={index} className={styles.tag}>{item} <button onClick={() => setSkills(skills.filter((_, i) => i !== index))}>x</button></span>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.formColumn}>
          <div className={styles.inputGroup}>
            <label>Available Working Hour</label>
            <div className={styles.workingDays}>
              {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
                <button
                  key={day}
                  className={workingDays.includes(day) ? styles.active : ''}
                  onClick={() => handleWorkingDaysToggle(day)}
                >
                  {day}
                </button>
              ))}
            </div>
            <div className={styles.workType}>
              <label className={styles.label}>
                <span
                  onClick={() => handleTimeTypeChange('parttime')}
                  className={`${styles.radioInput} ${!isFullTime ? styles.checked : ''}`}
                ></span>
                Part Time
              </label>
              <label className={styles.label}>
                <span
                  onClick={() => handleTimeTypeChange('fulltime')}
                  className={`${styles.radioInput} ${isFullTime ? styles.checked : ''}`}
                ></span>
                Full Time
              </label>
            </div>
            {!isFullTime && (
              <div className={styles.timeInputs}>
                <label>
                  From:
                  <input
                    type="time"
                    value={fromTime}
                    onChange={(e) => setFromTime(e.target.value)}
                    className={styles.timeInput}
                  />
                </label>
                <label>
                  To:
                  <input
                    type="time"
                    value={toTime}
                    onChange={(e) => setToTime(e.target.value)}
                    className={styles.timeInput}
                  />
                </label>
                <button className={styles.addButton} onClick={handleAddTimeSlot}>Add</button>
              </div>
            )}
            <div className={styles.timeSlots}>
              {timeSlots.map((slot, index) => (
                <div key={index} className={styles.timeSlot}>
                  <span>{slot.fromTime} - {slot.toTime}</span>
                  <button onClick={() => setTimeSlots(timeSlots.filter((_, i) => i !== index))}>x</button>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.inputGroup}>
            <textarea
              value={placesWorked}
              placeholder="Places I Worked With"
              onChange={(e) => setPlacesWorked(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
      <div className={styles.formActions}>
        <div className={`d-flex ${styles.formActionsContiner}`}>
          <label className={styles.labelCoach}>
            <span
              onClick={() => handleTrainerTypeChange('online')}
              className={`${styles.radioInputCoach} ${trainerType === 'online' ? styles.checked : ''}`}
            ></span>
            <p className="fs-3 mb-1">Online Trainer</p>
          </label>
          <label className={styles.labelCoach}>
            <span
              onClick={() => handleTrainerTypeChange('offline')}
              className={`${styles.radioInputCoach} ${trainerType === 'offline' ? styles.checked : ''}`}
            ></span>
            <p className="fs-3 mb-1">Offline Trainer</p>
          </label>
        </div>
        <div className="d-flex gap-2 mt-3 mb-4">
          <button type="button" className={styles.backBtn} onClick={handelNavigate}><IoChevronBackOutline size={25} /></button>
          <Link to="/CoachExperience">
            <button type="submit" className={styles.nextBtn}>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GeneralRegister;
