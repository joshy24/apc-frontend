
import styles from "../../styles/Home.module.css"

import Head from "next/head"

import PayeeSearch from "../../components/payee/payeesearch"
import PayeeResultsHolder from "../../components/payee/payeeresultsholder"
import { useState } from "react"

import Loading from "../../components/loading";

const Payee = () => {

    const [member, setMember] = useState(null)
    const [members, setMembers] = useState([])
    const [loading, setLoading] = useState(false)

    const showMember = (mem) => {
        //setMembers([])
        setMember(mem)
    }

    const showMembers = (list) => {
        setMembers(list)
        setMember(null)
    }

    return <div className={styles.topContent}>
        <Head>
            <title>APC Members Portal</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <PayeeSearch setMembers={showMembers} setMember={showMember} setLoading={setLoading} />
        <PayeeResultsHolder  member={member} members={members} setMember={showMember} setMembers={showMembers} />

        {
            loading && <Loading show={loading} /> 
        }
    </div>
}

export default Payee;