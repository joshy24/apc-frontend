
import styles from "../../../styles/Home.module.css"

import { getAmount } from "../../../utils/helper"

const AdminMember = ({member}) => {

    return <div className={styles.adminMember}>
        <h5 className={styles.memberName}>{member.firstname} {member.lastname}</h5>
        <h5 className={styles.memberState}>{member.state}</h5>
        <h5 className={styles.memberLga}>{member.lga}</h5>
        <h5 className={styles.memberId}>#{member.member_id}</h5>
        <h5 className={styles.memberAmount}>{getAmount(member.amount)}</h5>
        <h4 className={`${styles.memberStatus} ${member.status == "paid" ? styles.paidText : styles.notPaidText}`}>{member.status}</h4>
    </div>
}

export default AdminMember;