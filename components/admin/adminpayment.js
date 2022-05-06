
import { useState, useEffect } from "react";
import AdminLeftPayment from "./payment/adminleftpayment"
import AdminPayments from "./payment/adminpayments"

import styles from "../../styles/Home.module.css"

import {postRequest, getRequest} from "../../utils/api.requests"

import {BASE_URL, ADMIN_SEARCH_PAYMENTS, DELETE_PAYMENT, RESET_PAYMENT} from "../../utils/api.endpoints"
import CreatePayment from "./payment/createpayment";
import EditPayment from "./payment/editpayment"

import MobilePaymentFilter from "../mobile/mobilepaymentfilter"

import PaymentMenuOptions from "./paymentmenuoptions"

const base_year = new Date().getFullYear()
const base_month = new Date().getMonth()+1;

const AdminPayment = ({setLoading, setMessage}) => {

    const [year, setYear] = useState(base_year)
    const [month, setMonth] = useState(base_month)

    const [payments, setPayments] = useState([])

    const [paymentEdit, setPaymentEdit] = useState({})

    const [showCreatePayment, setShowCreatePayment] = useState(false)

    const [showEditPayment, setShowEditPayment] = useState(false)

    const [mobilePaymentFilter, setMobilePaymentFilter] = useState(false)

    const [paymentInFocus, setPaymentInFocus] = useState({})

    const [showPaymentOptions, setShowPaymentOptions] = useState(false)

    useEffect(() => {
        performSearch();
    }, [])

    const performSearch = async() => {
        setMobilePaymentFilter(false);

        let url = BASE_URL+ADMIN_SEARCH_PAYMENTS+ ( year ? "?year="+year+"&month="+month : "") 
        
        setLoading(true);

        try{
            let response = await getRequest(url)
            
            setLoading(false);

            if(response && response.data){
                setPayments(response.data)
            }
            else{
                //show search error message
            }
        }
        catch(err){
            setLoading(false);
            //show search error message
        }
    }

    const paymentCreated = () => {
        setShowCreatePayment(false)
        loadDefault()
    }

    const paymentEdited = () => {
        setShowEditPayment(false)
        performSearch()
    }

    const clearSearchOptions = async () => {
        loadDefault()
    }

    const loadDefault = async() => {
        
        setYear(base_year)
        setMonth(base_month)
        
        let url = BASE_URL+ADMIN_SEARCH_PAYMENTS+ ( year ? "?year="+base_year+"&month="+base_month : "") 
        
        setLoading(true);

        try{
            let response = await getRequest(url)
            
            setLoading(false);

            if(response && response.data){
                setPayments(response.data)
            }
            else{
                //show search error message
            }
        }
        catch(err){
            setLoading(false);
            //show search error message
        }
    }

    const setPaymentActive = async (payment) => {
        
        payment.active = !payment.active;

        try{
            let url = BASE_URL+EDIT_PAYMENT

            setLoading(true);

            let response = await postRequest(url, payment)

            setLoading(false);

            if(response.data == true || response.data=="true"){

            }
            else{

            }
        }
        catch(err){
            setLoading(false);
        }

    }

    const setCreatePaymentVisible = () => {
        setShowCreatePayment(true)
    }

    const setCreatePaymentInvisible = () => {
        setShowCreatePayment(false)
    }

    const setEditPaymentVisible = () => {
        setShowEditPayment(true)
    }

    const setEditPaymentInvisible = () => {
        setShowEditPayment(false)
    }

    const showMobilePaymentFilter = () => {
        setMobilePaymentFilter(true)
    }

    const hideMobilePaymentFilter = () => {
        setMobilePaymentFilter(false)
    }

    const openPaymentOptions = (payment) => {
        setPaymentInFocus(payment)
        setShowPaymentOptions(true)
    }

    const hidePaymentOptions = () => {
        setShowPaymentOptions(false)
    }

    const deleteClicked = async () => {
        hidePaymentOptions();

        try{
            let url = BASE_URL + DELETE_PAYMENT;

            setLoading(true)

            let result = await postRequest(url, {_id: paymentInFocus._id})
            
            setLoading(false)

            if(result && result.err){
                setMessage({message: "Failed to delete payment", type: "ERROR", title: "Message", visible: true})
            }
            else{
                if(result && result.response=="success" && result.data){
                    setMessage({message: "Payment deleted Successfully", type: "SUCCESS",  visible: true})
                    performSearch()
                }
                else{
                    setMessage({message: "Failed to delete payment. An error occurred", type: "ERROR", title: "Message", visible: true})
                }
            }
        }
        catch(err){
            setLoading(false)

            setMessage({message: err.message, type: "ERROR", title: "Message", visible: true})
        }
    }

    const editClicked = () => {
        hidePaymentOptions();
        setEditPaymentVisible()
    }

    const resetClicked = async() => {
        hidePaymentOptions();

        try{
            let url = BASE_URL + RESET_PAYMENT;

            setLoading(true)

            let result = await postRequest(url, {payment_id: paymentInFocus._id})
            
            setLoading(false)

            if(result && result.err){
                setMessage({message: "Failed to reset payment", type: "ERROR", title: "Message", visible: true})
            }
            else{
                if(result && result.response=="success" && result.data){
                    setMessage({message: "Payment reset Successfully", type: "SUCCESS",  visible: true})
                    performSearch()
                }
                else{
                    setMessage({message: "Failed to reset payment. An error occurred", type: "ERROR", title: "Message", visible: true})
                }
            }
        }
        catch(err){
            setLoading(false)

            setMessage({message: err.message, type: "ERROR", title: "Message", visible: true})
        }
    }
    

    return <div className={styles.adminPayment}>

        <div className={styles.adminPaymentTopContent}>
            <h1 className={styles.pageTitle}>Payment</h1>

            <div className={styles.adminPaymentButtonHolder}>
                <button onClick={showMobilePaymentFilter} className={`${styles.blueButton} ${styles.mobilePaymentFilterBtn}`}>Filter</button>
                <button onClick={setCreatePaymentVisible} className={styles.greenButton}>Create Payment</button>
            </div>
        </div>

        <div className={styles.adminPaymentHolder}>
            <div className={styles.adminLeftContent}>
                <AdminLeftPayment year={year} setYear={setYear} month={month} setMonth={setMonth} performSearch={performSearch} clearSearchOptions={clearSearchOptions} />
            </div>

            <div className={styles.adminRightContent}>
                <AdminPayments openPaymentOptions={openPaymentOptions} payments={payments} setPaymentActive={setPaymentActive} />
            </div>
        </div>

        {
            showCreatePayment && <CreatePayment setMessage={setMessage} setCreatePaymentInvisible={setCreatePaymentInvisible} paymentCreated={paymentCreated} setLoading={setLoading} />
        }

        {
            showEditPayment && <EditPayment payment={paymentInFocus} setMessage={setMessage} setEditPaymentInvisible={setEditPaymentInvisible} paymentEdited={paymentEdited} setLoading={setLoading} />
        }

        {
            mobilePaymentFilter && <MobilePaymentFilter hideMobilePaymentFilter={hideMobilePaymentFilter} year={year} setYear={setYear} month={month} setMonth={setMonth} performSearch={performSearch} clearSearchOptions={clearSearchOptions} />
        }

        {
            showPaymentOptions && <PaymentMenuOptions resetClicked={resetClicked} deleteClicked={deleteClicked} editClicked={editClicked} hidePaymentOptions={hidePaymentOptions}  />
        }

    </div>
}

export default AdminPayment;

/*
{
    payment && <NewPayment payment={payment} setPayment={setPayment} savePayment={savePayment} />
}
*/