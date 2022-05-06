import styles from "../../styles/Home.module.css"

import PayeeResult from "./payeeresult"

const closeBtnContent = {
    display: "flex", 
    width: "100%", 
    justifyContent: "flex-end", 
    padding: "8px 16px 8px 16px", 
    position: "fixed",
    background: "url(0,0,0,0)",
    position: "fixed",
    top: "0"
}

const PayeeResults = ({members, setMember, setMembers}) => {
    const removeMembers = (e) => {
        e.preventDefault();
        setMembers([])
    }

    return <div className={styles.payeeResults}>
        <div style={closeBtnContent}>
            <button onClick={e => removeMembers(e)} className={styles.closeBtn}></button>
        </div>
        {
            members.map(memb => <PayeeResult key={memb.member_id} payee={memb} setMember={setMember} />)
        }
    </div>
}

export default PayeeResults;