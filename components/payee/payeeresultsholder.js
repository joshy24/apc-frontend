
import styles from "../../styles/Home.module.css"

import PayeeNoResults from "./payeenoresults"
import PayeeProfile from "./payeeprofile"
import PayeeAmount from "./payeeamount"
import PayeeResults from "./payeeresults"
import { useState } from "react"

const PayeeResultsHolder = ({member, members, setMember}) => {

    const [amount, setAmount] = useState(null)

    return <div className={styles.payeeResultsHolder}>
        {
            member ?   ( amount ? <PayeeAmount payee={member} setAmount={setAmount} /> : <PayeeProfile payee={member} setAmount={setAmount} setMember={setMember} /> )
            : (members && members.length > 0) 
            ? <PayeeResults setMember={setMember} members={members} />
            : <PayeeNoResults /> 
        }
    </div>

}

export default PayeeResultsHolder;