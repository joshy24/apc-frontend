
import { useState, useEffect } from "react";
import AdminLeftPayment from "./payment/adminleftpayment"
import AdminPayments from "./payment/adminpayments"

import styles from "../../styles/Home.module.css"

import {postRequest, getRequest} from "../../utils/api.requests"

import {BASE_URL, ADMIN_SEARCH_PAYMENTS, CREATE_PAYMENT, EDIT_PAYMENT} from "../../utils/api.endpoints"
import CreatePayment from "./payment/createpayment";

import MobilePaymentFilter from "../mobile/mobilepaymentfilter"

const base_year = new Date().getFullYear()
const base_month = new Date().getMonth()+1;

const AdminPayment = ({setLoading, setMessage}) => {

    const [year, setYear] = useState(base_year)
    const [month, setMonth] = useState(base_month)

    const [payments, setPayments] = useState([])

    const [paymentEdit, setPaymentEdit] = useState({})

    const [showCreatePayment, setShowCreatePayment] = useState(false)

    const [mobilePaymentFilter, setMobilePaymentFilter] = useState(false)

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

    const showMobilePaymentFilter = () => {
        setMobilePaymentFilter(true)
    }

    const hideMobilePaymentFilter = () => {
        setMobilePaymentFilter(false)
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
                <AdminPayments payments={payments} setPaymentActive={setPaymentActive} />
            </div>
        </div>

        {
            showCreatePayment && <CreatePayment setMessage={setMessage} setCreatePaymentInvisible={setCreatePaymentInvisible} paymentCreated={paymentCreated} setLoading={setLoading} />
        }

        {
            mobilePaymentFilter && <MobilePaymentFilter hideMobilePaymentFilter={hideMobilePaymentFilter} year={year} setYear={setYear} month={month} setMonth={setMonth} performSearch={performSearch} clearSearchOptions={clearSearchOptions} />
        }

    </div>
}

export default AdminPayment;

/*
{
    payment && <NewPayment payment={payment} setPayment={setPayment} savePayment={savePayment} />
}
*/