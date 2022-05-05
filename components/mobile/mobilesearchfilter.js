
import styles from "../../styles/Home.module.css"

import { lgas_list } from "../../utils/helper"

import AdminSearchPayment from "../admin/search/adminsearchpayment"

import AdminPaymentFilter from "../admin/search/adminpaymentfilter"

import AdminLeftStateSearch from "../admin/search/adminleftstatesearch"

import MobileTopSearch from "../mobile/mobiletopsearch"

const base_state = "Select a State";
const base_lga = "Select an LGA";


const MobileSearchFilter = ({hideMobileFilter, setSearchValue, setSearchOption, search_option, search_value, clearSearchOptions, performSearch, performExport, payment, setShowPayment, clearStateLga, lga, state, lgas, setState, setLga, setLgas, setPaymentType, payment_type}) => {
    
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
    
    return <div className={styles.mobileSearchFilter}>
        <div className={styles.mobileSearchFilterTopContent}>
            <div className={styles.closeContent}>
                    <h2>Search Filter</h2>
                    <button onClick={hideMobileFilter} className={styles.closeBtn}></button>
            </div>
            <div className={styles.mobileSearchFilterHolder}>
                <MobileTopSearch setSearchValue={setSearchValue} setSearchOption={setSearchOption} search_value={search_value} search_option={search_option} clearSearchOptions={clearSearchOptions} performExport={performExport} performSearch={performSearch} />

                <AdminLeftStateSearch lga={lga} state={state} lgas={lgas} clearStateLga={clearStateLga} performSearch={performSearch} base_lga={base_lga} base_state={base_state} onLGAChanged={onLGAChanged} onStateChanged={onStateChanged} />

                <AdminSearchPayment setShowPayment={setShowPayment} payment={payment} />

                <AdminPaymentFilter payment_type={payment_type} setPaymentType={setPaymentType} />
            </div>
        </div>
    </div>
}

export default MobileSearchFilter;