import styles from "./MainBlog.module.css"
import img1 from "../../../assets/introCoach.webp"
import img2 from "../../../assets/Strength Coach.jpg"
import img3 from "../../../assets/blog5.webp"
import star from "../../../assets/start.png"
const MainBlog = () => {
    return (<div className={styles.blogContainer}>
        <div>
            <p className="fs-5 lh-lg mb-5">team is excited to announce the official opening of its first physical locationThe training facility features varietal playing surfaces to accommodate each of the sports on the CoachUp platform. Parents and athletes can now book sessions with Boston-area coaches who have the facility listed as an available training location</p>
            <p className="fs-5 lh-lg mb-5">This expansion of the CoachUp business into providing on-site training sessions is a huge step towards the holistic nature of coaching we seek to provide. You can follow along with the continued development of the facility, learn about availability and camps, and stay up-to-date on all things CoachUp by subscribing </p>
            <h2 className="lh-base fw-bold w-50 mb-5">Newly renovated CoachUp training facility in Woburn, Massachusetts</h2>
        </div>
        <div className="row">
            <div className="col-md-8">
                <img src={img1} alt="" className={styles.blogImg} />
            </div>
            <div className="col-md-4">
                <img src={img2} alt="" className={styles.blogImg} />
            </div>
        </div>
        <div className="row mt-4 h-10">
            <img src={img3} alt="" className={styles.blogImgButtom} />
        </div>
        <div>
            <h2 className="fw-bold my-5">The training facility includes each of the following:</h2>
            <p className="fw-bold fs-5 px-3">1. 3,000 square feet of open turf</p>
            <p className="fw-bold fs-5 px-3">2. Full-sized batting cage with portable pitcher’s mound</p>
            <p className="fw-bold fs-5 px-3">3. Half-court basketball with high school and college lines painted</p>
            <p className="fw-bold fs-5 px-3">4. Soccer goals</p>
            <p className="fw-bold fs-5 px-3">5. Balls, varietal training tools, agility equipment, and more!</p>
        </div>
        <div>
            <p className="fs-5 lh-lg my-5">The new training center is run internally by CoachUp and is only available to be booked for use with CoachUp coaches. We strive to continue to exceed our standards for safety, consistency, and reliability within the facility. CoachUp coaches who choose to add the facility as a primary training location will have access to a private page for scheduling sessions there. Parents and athletes in the greater Boston area are welcome to suggest the facility for their coaches to add.</p>
            <p className="fs-5 lh-lg mb-5">“We are so excited for how the training center came together, and the potential it creates for CoachUp to continue growing in the future. Our primary goal in opening the facility was to expand the offerings we provide to our users. The space is unique to the brand, and provides a truly authentic experience of what it means to train with CoachUp year-round.”</p>
            <p className="fs-5 lh-lg mb-5 fw-bold">Alex Stone, CoachUp CEO</p>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center p-3">
            <h2 className="fw-bold mb-3">How useful was this post?</h2>
            <p className="fs-5 lh-lg mb-3">Click on a star to rate it!</p>
            <img src={star} alt="" className={styles.star} />
        </div>
    </div>);
}

export default MainBlog;