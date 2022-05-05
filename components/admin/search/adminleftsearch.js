
import styles from "../../../styles/Home.module.css"

import { lgas_list } from "../../../utils/helper"

import AdminSearchPayment from "./adminsearchpayment"

import AdminPaymentFilter from "./adminpaymentfilter"

import AdminLeftStateSearch from "./adminleftstatesearch"

const base_state = "Select a State";
const base_lga = "Select an LGA";

const AdminLeftSearch = ({performSearch, payment, setShowPayment, clearStateLga, lga, state, lgas, setState, setLga, setLgas, setPaymentType, payment_type}) => {

    function onStateChanged(event){
        const value = event.target.value;
        
        setState(value)
        
        if(value === base_state){
            setLgas([])
            setLga(base_lga)
        }
        else{
            setLgas(lgas_list[value])
        }
    }

    const onLGAChanged = (event) => {
        const value = event.target.value;
        
        setLga(value)
    }
    
    return <div className={styles.adminLeftSearch}>

        <h1 className={styles.pageTitle}>Search</h1>

        <AdminLeftStateSearch lga={lga} state={state} lgas={lgas} clearStateLga={clearStateLga} performSearch={performSearch} base_lga={base_lga} base_state={base_state} onLGAChanged={onLGAChanged} onStateChanged={onStateChanged} />

        <AdminSearchPayment setShowPayment={setShowPayment} payment={payment} />

        <AdminPaymentFilter payment_type={payment_type} setPaymentType={setPaymentType} />

    </div>
}

export default AdminLeftSearch;