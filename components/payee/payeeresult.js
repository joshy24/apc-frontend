import styles from "../../styles/Home.module.css"

import Image from "next/image"

const PayeeResult = ({payee, setMember}) => {

    const memberClicked = (e) => {
        e.preventDefault();
        setMember(payee)
    }

    return <div onClick={e => memberClicked(e)} className={styles.payeeResult}>

            <div className={styles.payeeAvatar}>
                <Image style={{borderRadius: "50%"}} src="/images/logo.webp" width={75} height={75} object-fit="contain" />
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
                    <h5>{payee.member_id}</h5>
                </div>
            </div>
        </div>
}

export default PayeeResult;