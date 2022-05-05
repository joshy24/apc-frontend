
import styles from "../../../styles/Home.module.css"

import { useState, useEffect } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {postRequest, getRequest} from "../../../utils/api.requests"

import {BASE_URL, CREATE_PAYMENT} from "../../../utils/api.endpoints"

const CreatePayment = ({setMessage, setLoading, paymentCreated, setCreatePaymentInvisible}) => {

    const [date_issued, setDateIssued] = useState(new Date());

    const [date_due, setDateDue] = useState(new Date());

    const [amount, setAmount] = useState("");


    function onAmountChanged(e){
        setAmount(e.target.value)
    }

    const savePayment = async() => {

        if(!amount || amount <= 0 || amount.length == 0){
            setMessage({message: "Enter a valid Amount to proceed", type: "INFO", title: "Invalid Amount", visible: true})
            return
        }

        if(!date_issued){
            setMessage({message: "Enter a valid Date Issued", type: "INFO", title: "Invalid Date Issued", visible: true})
            return
        }

        if(!date_due){
            setMessage({message: "Enter a valid Date Due", type: "INFO", title: "Invalid Date Due", visible: true})
            return;
        }

        try{
            let url = BASE_URL + CREATE_PAYMENT;

            setLoading(true)

            let result = await postRequest(url, {amount,date_due, date_issued})
            
            setLoading(false)

            if(result && result.err){
                setMessage({message: "Failed to save payment", type: "ERROR", title: "Message", visible: true})
            }
            else{
                if(result && result.response=="success" && result.data){
                    paymentCreated()
                }
                else{
                    setMessage({message: "Failed to save payment", type: "ERROR", title: "Message", visible: true})
                }
            }

            
        }
        catch(err){
            setLoading(false)
            console.log(err)
            setMessage({message: err.message, type: "ERROR", title: "Message", visible: true})
        }
    }

    const setDates = (date) => {
        //console.log(date)
    }


    return <div className={`${styles.paymentModal} ${styles.createPayment}`}>
        <div className={styles.paymentModalInnerContent}>
            <div className={styles.paymentModalTopcontent}>
                <h2>Create Payment</h2>
                <button onClick={setCreatePaymentInvisible} className={styles.closeBtn}></button>
            </div>
            
            <div className={styles.paymentItem}>
                <h5>Amount</h5>
                <input type="number" value={amount} onChange={onAmountChanged} className={styles.generalInputField} placeholder="Enter Amount" />
            </div>

            <div className={styles.paymentItem}>
                <h5>Date Issued</h5>
                <DatePicker className={styles.generalInputField} minDate={new Date()} onChange={date => setDateIssued(date)} selected={date_issued} />
            </div>

            <div className={styles.paymentItem}>
                <h5>Date Due</h5>
                <DatePicker className={styles.generalInputField} minDate={date_issued} onChange={date => setDateDue(date)} selected={date_due} />
            </div>

            <button onClick={savePayment} className={`${styles.greenButton} ${styles.saveButton}`}>Save</button>
        
        </div>
    </div>
}

export default CreatePayment;