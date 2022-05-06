
import styles from "../../styles/Home.module.css"

import Image from "next/image"

const PaymentMenuOptions = ({deleteClicked, editClicked, resetClicked, hidePaymentOptions}) => {

    return <div className={styles.paymentMenuOptions}>
        <div className={styles.paymentMenuOptionsHolder}>
            <div className={styles.paymentMenuOptionsTopcontent}>
                <h2 className={styles.modalTitle}>Payment Options</h2>
                <button onClick={hidePaymentOptions} className={styles.closeBtn}></button>
            </div>
            <div className={styles.paymentMenuOptionsInnerContent}>
                <div onClick={resetClicked} className={styles.paymentMenuOptionsItem}>
                    <Image src="/images/reset_btn.png" width={20} height={20} />
                    <h4>Reset</h4>
                </div>
                <div onClick={editClicked} className={styles.paymentMenuOptionsItem}>
                    <Image src="/images/edit_btn.png" width={20} height={20} />
                    <h4>Edit</h4>
                </div>
                <div onClick={deleteClicked} className={styles.paymentMenuOptionsItem}>
                    <Image src="/images/delete_btn.png" width={20} height={20} />
                    <h4>Delete</h4>
                </div>
            </div>
        </div>
    </div>
}

export default PaymentMenuOptions;