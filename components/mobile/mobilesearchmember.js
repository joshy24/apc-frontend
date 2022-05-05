
import styles from "../../styles/Home.module.css"

import { getAmount } from "../../utils/helper"

const MobileSearchMember = ({member}) => {
    return <div className={styles.modileSearchMember}>
        <div>
            <h3 className={styles.modileSearchMemberName}>{member.firstname} {member.lastname}</h3>
            <h5 className={styles.memberId}>#{member.member_id}</h5>
        </div>

        <div className={styles.mobileSearchMemberHorizontalHolder}>
            <div>
                <h5 className={styles.modileSearchMemberTitle}>State</h5>
                <h5>{member.state}</h5>
            </div>
            <div>
                <h5 className={styles.modileSearchMemberTitle}>LGA</h5>
                <h5>{member.lga}</h5>
            </div>
        </div>
        <div className={styles.mobileSearchMemberHorizontalHolder}>
            <div>
                <h5 className={styles.modileSearchMemberTitle}>Amount</h5>
                <h5 className={styles.memberAmount}>{getAmount(member.amount)}</h5> 
            </div>
            <div>
                <h4 className={`${styles.memberStatus} ${member.status == "paid" ? styles.paidText : styles.notPaidText}`}>{member.status}</h4>
            </div>
        </div>
    </div>
}

export default MobileSearchMember;