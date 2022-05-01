
import Image from "next/image"
import styles from "../../styles/Home.module.css"

const PaymentSuccess = ({setPaymentComplete}) => {
    return <div className={styles.paymentSuccess}>
            <h4>
                Payment Successful
            </h4>

            <Image src="/images/success_img.png" width={120} height={100} />

            <button onClick={setPaymentComplete} className={styles.greenButton}>Go back to Profile</button>
    </div>
}

export default PaymentSuccess;