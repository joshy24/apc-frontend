import styles from "../../styles/Home.module.css"

import Image from "next/image"

const PayeeNoResults = () => {

    return <div className={styles.payeeNoResults}>
        <div className={styles.payeeNoResultsImage}>
            <Image className={styles.payeeNoResultsImage} src="/images/logo.webp" width={200} height={200}/>
        </div>

        <h1>APC Membership Portal</h1>

        <h5>Enter your membership ID or search for your profile to make payment.</h5>
    </div>

}

export default PayeeNoResults;