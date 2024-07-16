import { CiBookmark, CiCirclePlus } from "react-icons/ci"
import styles from "./Purchases.module.css"

const Purchases = () => {
    return (
        <div className="p-1">
            <div className="d-flex flex-row justify-content-between align-items-center flex-wrap mt-1 mb-4">
                <h2 className={`fw-bold`}>purchases</h2>
                <div className="d-flex justify-content-between">
                    <button className={`btn btn-danger ${styles.topBtn}`}>Active</button>
                    <button className={`btn btn btn-outline border border-1 border-danger text-danger ${styles.topBtn}`}>Completed</button>
                    <button className={`btn btn btn-outline border border-1 border-danger text-danger ${styles.saveIcon}`}>
                        <CiBookmark size={25} className={`text-danger mx-1`} />
                    </button>
                </div>
            </div>
            <div className={styles.walletCard}>
                <div className="d-flex flex-row justify-content-between align-items-center flex-wrap mt-1 mb-4">
                    <div className="d-flex justify-content-center align-items-center">
                        <button className={`btn btn btn-outline border mb-3 border-1 border-danger text-danger ${styles.saveIcon}`}>
                            <CiBookmark size={20} className={`text-danger m-1`} />
                        </button>
                        <p className="fs-3 text-center">Wallet</p>
                    </div>
                    <div>
                        <p className={styles.purchaseDate}>Last purchase in feb, 2023</p>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center flex-wrap mt-1">
                    <div>
                        <p className={styles.purchaseDate}>Current balance</p>
                        <span className="fs-5">1,640 RUB</span>
                    </div>
                    <div>
                        <p className={styles.purchaseDate}>Discound points</p>
                        <span className="fs-5">305 bounses</span>
                    </div>
                    <div>
                        <p className={styles.purchaseDate}>Financial support</p>
                        <span className="fs-5">14 courses</span>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <div className="row">
                    {progressCards.map(card => (
                        <div className="col-lg-6 mb-3" key={card.id}>
                            <div className={`card ${styles.progressCard}`}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className={styles.iconWrapper}>
                                        {card.title}
                                    </div>
                                    <span className={styles.progressNumbers}>{card.progressNumbers}</span>
                                </div>
                                <div className="d-flex align-items-end justify-content-between mt-5">
                                    <span className={styles.progressTitle}>{card.state}</span>
                                    <span className={styles.progressTitle}>{card.progressPercentage}%</span>
                                </div>
                                <div className={`progress my-3 ${styles.progress}`}>
                                    <div
                                        className={styles.progressBar}
                                        role="progressbar"
                                        style={{ width: `${card.progressPercentage}%` }}
                                        aria-valuenow={card.progressPercentage}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>{card.date}</span>
                                    <span>{card.salary}$</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
const progressCards = [
    {
        id: 1,
        title: "New Brand",
        progressNumbers: "CONTINUE",
        state: "payment state",
        progressPercentage: 72,
        salary: "1000",
        date: "2 Feb, 2024",
    },
    {
        id: 2,
        title: "User Experience Research and Desgin",
        progressNumbers: "PAID",
        state: "payment state",
        progressPercentage: 95,
        salary: "1000",
        date: "2 Feb, 2024",
    },
    {
        id: 3,
        title: "Contemporary Art and Design",
        progressNumbers: "CONTINUE",
        state: "payment state",
        progressPercentage: 60,
        salary: "1000",
        date: "12 Jan, 2024",
    },
    {
        id: 4,
        title: "Introduction to Programming in swift 5",
        progressNumbers: "CONTINUE",
        state: "payment state",
        progressPercentage: 60,
        salary: "1000",
        date: "20 Apr, 2024",
    },
];
export default Purchases