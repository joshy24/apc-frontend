
import styles from "../../styles/Home.module.css"

import PayeeNoResults from "./payeenoresults"
import PayeeProfile from "./payeeprofile"
import PayeeAmount from "./payeeamount"
import PayeeResults from "./payeeresults"
import PaymentSuccessful from "./paymentsuccessful"
import { useState } from "react"

const PayeeResultsHolder = ({member, members, setMember, setMessage, setLoading, setMembers, showOnMobile, showMobileResults}) => {

    const [amount, setAmount] = useState(null)
    const [success, setSuccess] = useState(false)

    const setPaymentComplete = () => {
        setAmount(null)
        setSuccess(false);

        setMembers([])
        setMember(Object.assign(member, {status: "paid"}))
        showOnMobile(false)
    }

    return <div className={showMobileResults ? `${styles.showDisplayHolderOnMobile} ${styles.payeeResultsHolder}` : styles.payeeResultsHolder}>
        
        {
            member ?   ( success ? <PaymentSuccessful setPaymentComplete={setPaymentComplete} /> : amount ? <PayeeAmount setSuccess={setSuccess} setMessage={setMessage} setLoading={setLoading} payee={member} setAmount={setAmount} />  : <PayeeProfile  setMessage={setMessage} payee={member} setAmount={setAmount} setMember={setMember} /> )
            : (members && members.length > 0) 
            ? <PayeeResults setMembers={setMembers} setMember={setMember} members={members} />
            : <PayeeNoResults /> 
        }
    </div>

}

export default PayeeResultsHolder;