
import styles from "../../styles/Home.module.css"

import { getAmount } from "../../utils/helper"

const payeeAmount = ({payee, setAmount}) => {

    const hideAmount = (e) => {
        e.preventDefault();
        setAmount(null)
    }

    return <div className={styles.payeeAmount}>
        <div className={styles.topSection}>
            <button onClick={hideAmount} className={styles.closeBtn}></button>
        </div>

        <h5>Amount to be paid</h5>

        <h1>{getAmount(payee.amount)}</h1>

        <button className={styles.greenButton}>Proceed</button>
    </div>
}

export default payeeAmount;