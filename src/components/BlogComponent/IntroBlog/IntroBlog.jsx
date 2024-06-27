import styles from "./IntroBlog.module.css"
const IntroBlog = () => {
    return ( <div className={styles.intro}>
        <div className={styles.overlay}>
            <div className='d-flex flex-column align-items-center justify-content-center p-5'>
            <h1 className="fw-bold">Blogs</h1>
            <h3 className={`text-center ${styles.suptitle}`}>
            Explore questions from other athletes and parents, or submit your own to receive free
            </h3>
            </div>
           </div>
            <div>
        </div>
      </div> );
}
 
export default IntroBlog;