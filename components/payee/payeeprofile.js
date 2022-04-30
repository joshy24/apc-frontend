
import styles from "../../styles/Home.module.css"

import Image from "next/image"

import { getAmount } from "../../utils/helper"

const PayeeProfile = ({payee, setAmount, setMember}) => {

    const showAmount = (e) => {
        e.preventDefault();
        setAmount(payee)
    }

    const removeMember = (e) => {
        e.preventDefault();
        setMember(null)
    }

    return <div className={styles.payeeProfile}>
            <div className={styles.topSection}>
                <div>
                    <Image style={{borderRadius: "50%"}} src="/images/logo.webp" width={75} height={75} />
                </div>
                <button onClick={e => removeMember(e)} className={styles.closeBtn}></button>
            </div>

            <div className={styles.payeeDetails}>
                <div className={styles.payeeDetail}>
                    <h6>Name</h6>
                    <h5>{payee.firstname} {payee.lastname}</h5>
                </div>

                <div className={styles.payeeDetail}>
                    <h6>State</h6>
                    <h5>{payee.state}</h5>
                </div>

                <div className={styles.payeeDetail}>
                    <h6>LGA</h6>
                    <h5>{payee.lga}</h5>
                </div>

                <div className={styles.payeeDetail}>
                    <h6>Member ID</h6>
                    <h5>#{payee.member_id}</h5>
                </div>

                <div className={styles.payeeDetail}>
                    <h6>Amount to be paid</h6>
                    <h5>{getAmount(payee.amount)}</h5>
                </div>

                <div className={styles.payeeDetail}>
                    <h6>Status</h6>
                    <h5>{payee.status}</h5>
                </div>
            </div>
            
            <button onClick={e => showAmount(e)} className={styles.greenButton}>Pay</button>
    </div>
}

export default PayeeProfile;