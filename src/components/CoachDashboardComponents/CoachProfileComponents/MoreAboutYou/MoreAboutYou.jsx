import React from 'react'
import styles from './MoreAboutYou.module.css'
import img1 from "@assets/introCoach.webp"
import img2 from "@assets/coachIntro.webp"

const actionImages = [{
    id: 1,
    img: img1,
    alt: "actionImage1"

}, {
    id: 2,
    img: img2,
    alt: "actionImage2"
},

]

function MoreAboutYou() {
    return (
        <div className={`d-flex flex-column my-5 ${styles.coachCard}`}>
            <div className={`${styles.cardHeader} p-3 py-3 fw-bold`}>
                <p className='mb-0 fs-5 text-white'>More About You</p>
            </div>
            <div className={`p-3  ${styles.cardBody}`}>
                <div className='d-flex flex-column justify-content-between'>
                    <div className="d-flex flex-column my-2"><h5 className="mt-1">Coaching Experience</h5>
                        <textarea className="_input_1v580_1" rows="5" placeholder="I started my soccer career coach with Arlington Soccer back on 2011. I have been coaching all soccer categories and levels with Arlington soccer travel (U8-U16). Also, I have experience coaching individual and group sessions. I have National Youth Coaching License and National D License"></textarea>
                    </div>
                    <div className="d-flex flex-column my-2"><h5 className="mt-2">Athletic Highlights </h5>
                        <textarea className="_input_1v580_1" rows="5" placeholder="I started playing organized soccer when I was 9 years old in Tunisia (North Africa). Prior to that I have improved my soccer skills by playing street soccer. I have played my first professional game when I was 19 years old and played for almost 10 years before I immigrated to US. Also, I had the honor to be called for the U18 Tunisian National team. I have won the Tunisian cup with the reserved team."></textarea>
                    </div>
                    <div className="d-flex flex-column my-2"><h5 className="mt-2">Session Plan </h5>
                        <textarea className="_input_1v580_1" rows="5" placeholder="I design my soccer session based on the level of a player. My session start with technical warm up then I focus the rest of the time working on specific topics  (shooting, dribbling, controlling...). My main focus during the session not only the technical part of it but also how you think as a soccer player."></textarea>
                    </div>
                    <div className='mx-auto mx-sm-1'>
                        <button className={`btn btn-danger mt-3 ${styles.savebtn}`}>Update</button>
                    </div>
                </div>
                <div className=" my-3">
                    <h5 className="my-4 fs-2">Action Photos </h5>
                    <div className='d-flex flex-column flex-sm-row justify-content-center align-content-center gap-4'>
                        {actionImages.map((image) => (
                            <div className='col-md-6 col-12' key={image.id}>
                                <img src={image.img} alt={image.alt} className="object-fit-cover w-100" />
                            </div>
                        ))}
                    </div>
                    <button className={`btn btn-danger mt-4 ${styles.savebtn}`}>Upload New Action Shot</button>
                </div>
            </div>
        </div>
    )
}

export default MoreAboutYou