
import styles from "../../../styles/Home.module.css"

import AdminMember from "./adminmember"

const AdminMembers = ({members}) => {

    return <div className={styles.adminMembers}>
        <div className={styles.adminMemberHeader}>
            <h5>Name</h5>
            <h5>State</h5>
            <h5>LGA</h5>
            <h5>Member ID</h5>
            <h5>Amount</h5>
            <h5>Status</h5>
        </div>
        {
            members && members.map(member => {
                return <AdminMember key={member._id} member={member} /> 
            })
        }
    </div>
}

export default AdminMembers;