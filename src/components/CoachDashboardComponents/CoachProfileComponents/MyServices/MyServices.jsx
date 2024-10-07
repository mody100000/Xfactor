import React, { useState } from 'react'
import styles from "./MyServices.module.css"

const agesType = [{
    id: 1, age: "Adults", picked: true
}, {
    id: 2, age: "Teenagers", picked: true
}, {
    id: 3, age: "Kids", picked: true
}]

const positionsType = [
    { id: 1, position: "Defense", picked: true },
    { id: 2, position: "Forward", picked: true },
    { id: 3, position: "Goalkeeper", picked: false },
    { id: 4, position: "Midfield", picked: true },
]

const specialtiesType = [
    { id: 1, name: "Agility", picked: true },
    { id: 2, name: "Corner Kicks", picked: false },
    { id: 3, name: "Crossing", picked: false },
    { id: 4, name: "Dribbling", picked: true },
    { id: 5, name: "First Touch", picked: true },
    { id: 6, name: "Free Kicks", picked: true },
    { id: 7, name: "Goal Kicks", picked: true },
    { id: 8, name: "Heading", picked: true },
    { id: 9, name: "One-Touch", picked: true },
    { id: 10, name: "One-on-Ones", picked: false },
    { id: 11, name: "Passing", picked: false },
    { id: 12, name: "Penalty Kicks", picked: false },
    { id: 13, name: "Shooting", picked: true },
    { id: 14, name: "Throw-Ins", picked: false }
]

function MyServices() {
    const [ages, setAges] = useState(agesType)
    const [positions, setPositions] = useState(positionsType)
    const [specialties, setSpecialties] = useState(specialtiesType)

    const handleCheckboxChange = (id, type) => {
        if (type === 'age') {
            setAges(ages.map(age => age.id === id ? { ...age, picked: !age.picked } : age))
        } else if (type === 'position') {
            setPositions(positions.map(position => position.id === id ? { ...position, picked: !position.picked } : position))
        } else if (type === "specialtie") {
            setSpecialties(specialties.map(specialtie => specialtie.id === id ? { ...specialtie, picked: !specialtie.picked } : specialtie))
        }

    }

    return (
        <div className={`d-flex flex-column my-5 ${styles.coachCard}`}>
            <div className={`${styles.cardHeader} p-3 py-3 fw-bold`}>
                <p className='mb-0 fs-5 text-white'>My Services</p>
            </div>
            <div className={`p-3  ${styles.cardBody}`}>
                <div className='d-flex flex-column justify-content-between'>
                    <p className={`${styles.supText}`}>Select the ages, positions, and specialties that apply to your coaching services. Check all that apply.
                    </p>
                    <div>
                        <p className='fs-5'>Ages</p>
                        <div className='d-flex flex-wrap '>
                            {ages.map((age) => (
                                <div className="d-flex mb-2 col-6 col-sm-3" key={age.id}>
                                    <input
                                        type="checkbox"
                                        onChange={() => handleCheckboxChange(age.id, 'age')}
                                        checked={age.picked}
                                        id={age.age}
                                        className="mx-2"
                                    />
                                    <label htmlFor={age.id}>{age.age}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='fs-5'>Positions</p>
                        <div className='d-flex flex-wrap '>
                            {positions.map((position) => (
                                <div className="d-flex mb-2 col-6 col-sm-3" key={position.id}>
                                    <input
                                        type="checkbox"
                                        onChange={() => handleCheckboxChange(position.id, 'position')}
                                        checked={position.picked}
                                        id={position.position}
                                        className="mx-2"
                                    />
                                    <label htmlFor={position.id}>{position.position}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='fs-5'>Specialties</p>
                        <div className='d-flex flex-wrap '>
                            {specialties.map((specialtie) => (
                                <div className="d-flex mb-2 col-6 col-sm-3" key={specialtie.id}>
                                    <input
                                        type="checkbox"
                                        onChange={() => handleCheckboxChange(specialtie.id, 'specialtie')}
                                        checked={specialtie.picked}
                                        id={specialtie.specialtie}
                                        className="mx-2"
                                    />
                                    <label htmlFor={specialtie.id}>{specialtie.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mx-auto mx-sm-1'>
                        <button className={`btn btn-danger mt-3 ${styles.savebtn}`}>Update Services</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyServices