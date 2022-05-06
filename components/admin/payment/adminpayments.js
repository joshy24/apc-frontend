
import styles from "../../../styles/Home.module.css"

import Payment from "./payment"

const AdminPayments = ({payments, setPaymentActive, openPaymentOptions}) => {

    return <div className={styles.adminPayments}>
        <div className={styles.singlePaymentTop}>
            <div className={styles.paymentItem}>
                <h5>Name</h5>
            </div>
            <div className={styles.paymentItem}>
                <h5>Amount</h5>
            </div>
            <div className={styles.paymentItem}>
                <h5>Date Issued</h5>
            </div>
            <div className={styles.paymentItem}>
                <h5>Date Due</h5>
            </div>
            <div className={styles.paymentItem}>
                <h5>Active</h5>
            </div>
            <div style={{width: "40px", maxWidth: "40px"}} className={styles.paymentItem}>
                
            </div>
        </div>
        {
            payments && payments.map(payment => {
                return <Payment openPaymentOptions={openPaymentOptions} key={payment._id} payment={payment} setPaymentActive={setPaymentActive} />
            })
        }
    </div>
}

export default AdminPayments;