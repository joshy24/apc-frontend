
import styles from "../../styles/Home.module.css"


import {postRequest, getRequest} from "../../utils/api.requests"

import {BASE_URL, ADMIN_GET_PAYMENTS} from "../../utils/api.endpoints"
import { useEffect, useState } from "react"

import { getDate, getAmount } from "../../utils/helper"

const ChangePayment = ({setLoading, paymentChanged, setShowPayment}) => {

    const [payments, setPayments] = useState([]);

    useEffect(() => {
        getPayments(); 
    }, [])

    const setNewPayment = (e, payment) => {
        e.preventDefault();
        paymentChanged(payment)
    }

    const getPayments = async() => {

        setLoading(true);

        try{
            let url = BASE_URL + ADMIN_GET_PAYMENTS;

            let payments = await getRequest(url)
            
            setLoading(false)

            if(payments){
                setPayments(payments.data)
            }
            else{

            }
        }
        catch(err){
            setLoading(false)
        }
    }

    function hidePayment(){
        setShowPayment(false)
    }

    return <div className={`${styles.paymentModal} ${styles.changePayment}`}>
        <div className={styles.paymentModalInnerContent}>
            <div className={styles.paymentModalTopcontent}>
                <h2 modalTitle>Select Payment</h2>
                <button onClick={hidePayment} className={styles.closeBtn}></button>
            </div>
            <div className={styles.payment}>
                <h5>Name</h5>
                <h5>Amount</h5>
                <h5>Date Issued</h5>
                <h5>Date Due</h5>
            </div>
            {
                payments && payments.map(payment => {
                    return <div key={payment._id} onClick={e => setNewPayment(e, payment)} className={styles.paymentItem}>
                        <h5>{payment.name}</h5>
                        <h5 className={styles.colorGreen}>{getAmount(payment.amount)}</h5>
                        <h5>{getDate(payment.date_issued)}</h5>
                        <h5>{getDate(payment.date_due)}</h5>
                    </div>
                })
            }
        </div>
    </div>
}

export default ChangePayment