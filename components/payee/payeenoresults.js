import styles from "../../styles/Home.module.css"

import Image from "next/image"

const PayeeNoResults = () => {

    return <div className={styles.payeeNoResults}>
        <Image className={styles.payeeNoResultsImage} src="/images/search_img.png" width={170} height={150}/>

        <h1>No Results Found</h1>

        <h5>Enter your membership ID or search for your profile to get started.</h5>
    </div>

}

export default PayeeNoResults;