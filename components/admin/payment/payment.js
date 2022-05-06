import styles from "../../../styles/Home.module.css"

import { getAmount, getDate } from "../../../utils/helper"

import Switch from "react-switch";

import MobilePayment from "../../mobile/mobilepayment"

import Image from "next/image"

const Payment = ({payment, setPaymentActive, openPaymentOptions}) => {

    const switchChanged = () => {
        setPaymentActive(payment)
    }

    const showPaymentOptions = () => {
        openPaymentOptions(payment);
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
            <div style={{width: "40px", maxWidth: "40px"}} className={styles.paymentItem}>
                <Image className={styles.paymentMenuBtn} onClick={showPaymentOptions} src="/images/options.png" width={30} height={30} />
            </div>
        </div>

        <MobilePayment payment={payment} setPaymentActive={setPaymentActive} />
    </>
}

export default Payment;