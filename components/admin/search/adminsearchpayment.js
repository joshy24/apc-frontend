
import styles from "../../../styles/Home.module.css"

import { getAmount, getDate } from "../../../utils/helper"

const AdminSearchPayment = ({payment, setShowPayment}) => {

    const changePaymentClicked = () => {
        setShowPayment(true);
    }

    return <div className={styles.adminSearchPayment}>
        <h4>Payment</h4>

        <h5 className={styles.paymentAmount}>{payment && getAmount(payment.amount)}</h5>
        <div className={styles.paymentDate}>
            <h4>Date Issued</h4>
            <h5>{payment && payment.date_issued && getDate(payment.date_issued)}</h5>
        </div>
       <div className={styles.paymentDate}>
            <h4>Date Due</h4>
            <h5>{payment && payment.date_due && getDate(payment.date_due)}</h5>
        </div>

        <button onClick={changePaymentClicked} className={styles.greenButton}>Change Payment</button>
    </div>
}

export default AdminSearchPayment;


/*
import styles from "../../../styles/Home.module.css"

const AdminSearchPayment = () => {

    return <div>

    </div>
}

export default AdminSearchPayment;
*/