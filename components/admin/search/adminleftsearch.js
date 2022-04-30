
import styles from "../../../styles/Home.module.css"

import { lgas_list } from "../../../utils/helper"

import AdminSearchPayment from "./adminsearchpayment"

import AdminPaymentFilter from "./adminpaymentfilter"

const base_state = "Select a State";
const base_lga = "Select an LGA";

const payment = {
    amount: 50000,
    date_issued: "25-04|2022",
    date_due: "19-05|2022",
    _id: "8hwdihiwef3heiwuci94fh9",
    active: false
}

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

        <div className={styles.adminLeftInnerContent}>
            <div className={styles.adminLoginInput}>
                <h4>Select State</h4>
                <select value={state} className={styles.state} onChange={onStateChanged} name="states" id="states" placeholder="Select State">
                    <option value={base_state}>{base_state}</option>
                    {
                        Object.keys(lgas_list).map(stat => {
                            return <option key={stat} value={stat}>{stat}</option>
                        })
                    }
                </select>
            </div>

            <div className={styles.adminLoginInput}>
                <h4>Select LGA</h4>
                <select value={lga} onChange={onLGAChanged} className={styles.lga} name="lga" id="lga" placeholder="Select LGA">
                    <option value={base_lga}>{base_lga}</option>
                    {
                        lgas && lgas.map(lg => {
                            return <option key={lg} value={lg}>{lg}</option>
                        })
                    }
                </select>
            </div>

            <button onClick={performSearch} className={`${styles.greenButton} ${styles.btnSearch}`}>Search</button>

            <button onClick={clearStateLga} className={`${styles.greyButton}  ${styles.btnClear}`}>Clear</button>
        </div>

        <AdminSearchPayment setShowPayment={setShowPayment} payment={payment} />

        <AdminPaymentFilter payment_type={payment_type} setPaymentType={setPaymentType} />

    </div>
}

export default AdminLeftSearch;