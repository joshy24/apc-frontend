
import styles from "../styles/Home.module.css"

import Head from "next/head"

import PayeeSearch from "../components/payee/payeesearch"
import PayeeResultsHolder from "../components/payee/payeeresultsholder"
import { useState } from "react"

import Loading from "../components/loading";

import Message from "../components/message"

const Payee = () => {

    const [member, setMember] = useState(null)
    const [members, setMembers] = useState([])
    
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({visible: false, message: "", title: "", type: ""})

    const [showMobileResults, setShowMobileResults] = useState(false)

    const showMember = (mem) => {
        //setMembers([])
        setMember(mem)
        showOnMobile(mem ? true : false)
    }

    const showMembers = (list) => {
        setMembers(list)
        setMember(null)
        showOnMobile((list && list.length > 0) ? true : false)
    }

    const showOnMobile = (value) => {
        setShowMobileResults(value)
    }

    return <div className={styles.topContent}>
        <Head>
            <title>APC Members Portal</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <PayeeSearch setMembers={showMembers} setMessage={setMessage} setMember={showMember} setLoading={setLoading} />
        
        <PayeeResultsHolder showOnMobile={showOnMobile} showMobileResults={showMobileResults} setLoading={setLoading} setMessage={setMessage} member={member} members={members} setMember={showMember} setMembers={showMembers} />

        {
            loading && <Loading show={loading} /> 
        }

        {
            message.visible && <Message setMessage={setMessage} message={message} />
        }
    </div>
}

export default Payee;