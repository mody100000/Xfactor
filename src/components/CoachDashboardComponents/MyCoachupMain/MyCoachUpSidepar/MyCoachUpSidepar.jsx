import React from 'react'
import styles from "./MyCoachUpSidepar.module.css"
import xlogo from "@assets/Xlogo.png"
import { Link } from 'react-router-dom'

function MyCoachUpSidepar() {
    return (
        <div>
            <p className='fs-5 mt-1'>Your Profile is 100% Complete</p>
            <div className="progress">
                <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
            <p className='my-3 text-danger cursor-pointer'>Add Social Accounts</p>
            <span className={styles.line}></span>
            <h4>Coach Ranking and Stats</h4>
            <div className={`d-flex flex-column justify-content-center align-items-center ${styles.rankedBox}`}>
                <p className={styles.stNumber}>21st</p>
                <p className='fs-5'>in Virginia Soccer</p>
                <p className='text-danger fs-5 cursor-pointer'>View Coach Leaderboard</p>
            </div>
            <div className={`${styles.rankedDetails}`}>
                <div className='d-flex justify-content-between align-items-center'>
                    <p>Leads Acquired</p>
                    <p className='fw-bold'>71</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p>Paid Clients</p>
                    <p className='fw-bold'>28</p>
                </div>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <p>Leads Converted</p>
                    <p className='fw-bold'>28 (39%)</p>
                </div>
                <p className='text-danger text-center cursor-pointer mb-1'>View All Your Coaching Stats</p>
            </div>
            <h4>Pro Shop Reward</h4>
            <div className={`${styles.shopBox}`}>
                <div className='d-flex justify-content-center align-items-center mb-2'>
                    <img src={xlogo} alt="logo" className={styles.imgLogo} /> <h2 className='text-center mt-2 fw-bolder fs-1 fst-italic '>Pro Shop</h2>
                </div>
                <div className={styles.badge}> <p className='mb-0'> 20% OFF</p></div>
                <p className='py-4 px-3'>The CoachUp Pro Shop offers a wide selection of apparel and equipment for your training needs from top brands including Under Armour, SKLZ, Wilson, EvoShield, and more!</p>
                <Link to="/shop">
                    <button className={`${styles.messageBtn} mx-auto`}>
                        Shop Now
                    </button>
                </Link>
            </div>
            <h4 className='mb-4'>Helpful Links</h4>
            <p className='text-danger cursor-pointer mb-2'>Insurance Info</p>
            <p className='text-danger cursor-pointer mb-2'>FAQ</p>
            <p className='text-danger cursor-pointer mb-2'>Training Center</p>
            <p className='text-danger cursor-pointer mb-2'>Apparel and Business Cards</p>
            <button className={`${styles.infoBtn} mx-auto mt-5`}>
                Invite a Client
            </button>
            <button className={`${styles.infoBtn} mx-auto`}>
                Refer a Coach
            </button>
        </div>
    )
}

export default MyCoachUpSidepar