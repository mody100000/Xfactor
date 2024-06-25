import styles from "./Testimonials.module.css"
const Testimonials = () => {
    return ( <div className={styles.container}>
   <h2 className={styles.title}>Testimonials</h2>
   <p className={styles.text}>Simply put, CoachUp coaching works. Every day, athletes across the country are training with CoachUp coaches to learn new moves, build their confidence and step up their game. But don't take our word for it. Check out what actual parents and athletes using CoachUp are saying:</p>
   <div className={styles.card}>
       <p>Lorem ipsum dolor sit amet consectetur. Malesuada tincidunt turpis volutpat quis. Semper Lorem ipsum dolor sit amet consectetur. Malesuada tincidunt turpis volutpat quis. Semper Lorem ipsum dolor sit amet consectetur. Malesuada tincidunt Lorem ipsum dolor sit amet consectetur. Malesuada tincidunt turpis volutpat quis. Semper Lorem ipsum dolor sit amet consectetur. Malesuada tincidunt turpis volutpat quis. Semper Lorem ipsum dolor sit amet consectetur. Malesuada tincidunt </p>
       <button className={styles.viewBtn}>View All</button>
   </div>
    </div> );
}
 
export default Testimonials;