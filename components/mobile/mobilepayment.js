
import styles from "../../styles/Home.module.css"

import { getAmount, getDate } from "../../utils/helper"

import Switch from "react-switch";

const MobilePayment = ({payment, setPaymentActive}) => {

    const switchChanged = () => {
        setPaymentActive(payment)
    }

    return <div className={styles.singlePaymentMobile}>
        <div className={styles.paymentItem}>
            <h1 className={styles.paymentName}>{payment.name}</h1>
            <h3 className={styles.paymentAmount}>{getAmount(payment.amount)}</h3>
        </div>
        <div className={styles.paymentItem}>
             <h5>Date Issued</h5>
             <h4>{getDate(payment.date_issued)}</h4>
        </div>
        <div className={styles.paymentItem}>
            <h5>Date Issued</h5>
            <h4>{getDate(payment.date_due)}</h4>
        </div>
        <div className={styles.paymentItem}>
            <label>
                <Switch onChange={switchChanged} checked={payment.active} onColor="#E41F26" />
            </label>
        </div>
    </div>
}

export default MobilePayment;