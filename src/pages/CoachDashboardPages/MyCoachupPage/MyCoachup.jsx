import React from 'react';
import styles from "./MyCoachup.module.css";
import { BsPersonCheck } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { GrSchedulePlay } from "react-icons/gr";
import MyCoachupMain from '../../../components/CoachDashboardComponents/MyCoachupMain/MyCoachupMain';

function MyCoachup() {
    return (
        <div className='p-3'>
            <MyCoachupMain />
        </div>
    )
}

export default MyCoachup;