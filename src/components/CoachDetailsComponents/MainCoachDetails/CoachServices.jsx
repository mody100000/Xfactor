import styles from "./CoachServices.module.css"

const CoachServices = ({ services: [service] }) => {
    const formatList = (items) => {
        return items.reduce((acc, item) => {
            const lastRow = acc[acc.length - 1];
            if (!lastRow || (lastRow + item).length > 30) {
                acc.push(item);
            } else {
                acc[acc.length - 1] += `, ${item}`;
            }
            return acc;
        }, []);
    };

    return (
        <div>
            <h2 className="mt-3 mb-3">Services</h2>
            <div className="d-flex flex-column flex-sm-row justify-content-between">
                <div className="d-flex flex-column mb-5">
                    <h5 className="my-4 my-sm-5 fw-bolder">Ages</h5>
                    {service.ages && formatList(service.ages).map((row, index) => (
                        <p key={index} className="text-start">{row}</p>
                    ))}
                </div>
                <div className="d-flex flex-column mb-4">
                    <h5 className="my-4 my-sm-5 fw-bolder">Positions</h5>
                    {service.positions && formatList(service.positions).map((row, index) => (
                        <p key={index} className="text-start">{row}</p>
                    ))}
                </div>
                <div className="d-flex flex-column mb-4">
                    <h5 className="my-4 my-sm-5 fw-bolder">Specialties</h5>
                    {service.specialties && formatList(service.specialties).map((row, index) => (
                        <p key={index} className="text-start">{row}</p>
                    ))}
                </div>
            </div>
            <span className={styles.line}></span>
        </div>
    );
}

export default CoachServices;