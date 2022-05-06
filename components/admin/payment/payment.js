import styles from "../../../styles/Home.module.css"

import { getAmount, getDate } from "../../../utils/helper"

import Switch from "react-switch";

import MobilePayment from "../../mobile/mobilepayment"

const Payment = ({payment, setPaymentActive}) => {

    const switchChanged = () => {
        setPaymentActive(payment)
    }

    return <>
        <div className={styles.singlePayment}>
            <div className={styles.paymentItem}>
                <h4>{payment.name}</h4>
            </div>
            <div className={styles.paymentItem}>
                <h4>{getAmount(payment.amount)}</h4>
            </div>
            <div className={styles.paymentItem}>
                <h4>{getDate(payment.date_issued)}</h4>
            </div>
            <div className={styles.paymentItem}>
                <h4>{getDate(payment.date_due)}</h4>
            </div>
            <div className={styles.paymentItem}>
                <label>
                    <Switch onChange={switchChanged} checked={payment.active} onColor="#E41F26" />
                </label>
            </div>
        </div>

        <MobilePayment payment={payment} setPaymentActive={setPaymentActive} />
    </>
}

export default Payment;