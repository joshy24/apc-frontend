
import styles from "../../../styles/Home.module.css"

import { useState } from 'react'

import Image from "next/image"

const AdminPaymentFilter = ({setPaymentType, payment_type}) => {

    const setOption = (e, opt) => {
        e.preventDefault();
        setPaymentType(opt)
    }

    return <div className={styles.adminPaymentFilter}>
        <div className={styles.paymentFilterOption} onClick={e => setOption(e,"all")}>
            <Image className={styles.image} src={payment_type == "all" ? "/images/full_radio.png" : "/images/blank_radio.png"} width={16} height={16} />
            <label htmlFor="all">All</label>
        </div>

        <div className={styles.paymentFilterOption} onClick={e => setOption(e,"paid")}>
            <Image className={styles.image} src={payment_type == "paid" ? "/images/full_radio.png" : "/images/blank_radio.png"} width={16} height={16} />
            <label htmlFor="paid">Paid</label>
        </div>
        
        <div className={styles.paymentFilterOption} onClick={e => setOption(e,"not_paid")}>
            <Image className={styles.image} src={payment_type == "not_paid" ? "/images/full_radio.png" : "/images/blank_radio.png"} width={16} height={16} />
            <label htmlFor="not_paid">Not Paid</label>
        </div>
    </div>
}

export default AdminPaymentFilter;