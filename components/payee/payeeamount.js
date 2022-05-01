
import styles from "../../styles/Home.module.css"

import { getAmount } from "../../utils/helper"

import { PaystackButton } from 'react-paystack';
import { useEffect } from "react";

import {postRequest} from "../../utils/api.requests"
import {BASE_URL, VERIFY_TRANSACTION} from "../../utils/api.endpoints"

const payeeAmount = ({payee, setAmount, payment_id, setLoading, setMessage, setSuccess}) => {

    const config = {
        reference: (new Date()).getTime().toString(),
        email: "nigeria.apc@gmail.com",
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC,
        amount: payee.amount * 100
    };

    const hideAmount = (e) => {
        e.preventDefault();
        setAmount(null)
    }

    const handlePaystackSuccessAction = async (reference) => {
        // Implementation for whatever you want to do with reference and after success call.

        if(reference && reference.reference && reference.status == "success"){
            try{
                setLoading(true)

                let url = BASE_URL + VERIFY_TRANSACTION;
                let result = await postRequest(url, {payee, reference: reference.reference, payment_id})

                setLoading(false)

                if(result && result.data && result.response == "success"){
                        //show success
                        setSuccess(true)
                }
                else{
                        setMessage({message: "Your transaction could not be verified.", visible: true, title: "Payment Failed", type: "ERROR"})
                }
            }
            catch(err){
                setLoading(false)

                console.log(err)

                setMessage({message: "Your transaction could not be verified.", visible: true, title: "Payment Failed", type: "ERROR"})
            }
        }
        else{
            setMessage({message: "Your transaction could not be completed.", visible: true, title: "Payment Failed", type: "ERROR"})
        }
    };

    // you can call this function anything
    const handlePaystackCloseAction = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }

    const componentProps = {
        ...config,
        text: 'Continue',
        onSuccess: (reference) => handlePaystackSuccessAction(reference),
        onClose: handlePaystackCloseAction,
    };

    return <div className={styles.payeeAmount}>
        <div className={styles.topSection}>
            <button onClick={hideAmount} className={styles.closeBtn}></button>
        </div>

        <h5>Amount to be paid</h5>

        <h1>{getAmount(payee.amount)}</h1>

        <PaystackButton className={styles.greenButton} {...componentProps} />
    </div>
}

export default payeeAmount;

// <button className={styles.greenButton}>Proceed</button>