import styles from "../../styles/Home.module.css"

import PayeeResult from "./payeeresult"

const PayeeResults = ({members, setMember}) => {
    
    return <div className={styles.payeeResults}>
        {
            members.map(memb => <PayeeResult key={memb.member_id} payee={memb} setMember={setMember} />)
        }
    </div>
}

export default PayeeResults;