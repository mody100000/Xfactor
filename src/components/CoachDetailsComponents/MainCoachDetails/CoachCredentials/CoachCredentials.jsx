import styles from "./CoachCredentials.module.css"
const CoachCredentials = ({ credentials: [credential] }) => {
    return (<div>
        <h2 className="mt-3 mb-3">Credentials</h2>
        <div className=" d-flex flex-column flex-sm-row justify-content-between">
            <div className="d-flex flex-column mb-5">
                <h5 className="my-4 my-sm-5 fw-bolder">College / University</h5>
                {credential.college && credential.college.map((university, index) => (
                    <p key={index} className="text-start">{university}</p>
                ))}
            </div>
            <div className="d-flex flex-column mb-4"><h5 className="my-4 my-sm-5 fw-bolder">Coaching Experience</h5>
                <p className="text-start">{credential.experience}</p>
            </div>
            <div className="d-flex flex-column mb-4"><h5 className="my-4 my-sm-5 fw-bolder">CoachUp Accreditations</h5>
                {credential.accreditations && credential.accreditations.map((accreditation, index) => (<p key={index} className="text-start">
                    {accreditation}
                </p>))}
            </div>
        </div>
        <span className={styles.line}></span>
    </div>);
}

export default CoachCredentials;