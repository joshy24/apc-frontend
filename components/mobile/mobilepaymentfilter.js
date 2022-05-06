import styles from "../../styles/Home.module.css"

import AdminLeftPayment from "../admin/payment/adminleftpayment"

const MobilePaymentFilter = ({year, month, setMonth, setYear, performSearch, clearSearchOptions, hideMobilePaymentFilter}) => {
    
    return <div className={styles.adminMobilePaymentFilter}>
        <div className={styles.adminMobilePaymentFilterHolder}>
            <div className={styles.closeContent}>
                    <h2>Payment Filter</h2>
                    <button onClick={hideMobilePaymentFilter} className={styles.closeBtn}></button>
            </div>

            <AdminLeftPayment year={year} setYear={setYear} month={month} setMonth={setMonth} performSearch={performSearch} clearSearchOptions={clearSearchOptions} />
        </div>
    </div>
}

export default MobilePaymentFilter;