
import styles from "../../../styles/Home.module.css"

const base_year = new Date().getFullYear()
const base_month = new Date().getMonth();

const AdminLeftPayment = ({clearSearchOptions, year, setYear, month, setMonth, performSearch}) => {

    function onYearChanged(event){
        const value = event.target.value;
        
        setYear(value)
    }

    const onMonthChanged = (event) => {
        const value = event.target.value;
        
        setMonth(value)
    }

    return <div className={styles.adminLeftPayment}>
        <div className={styles.adminLoginInput}>
            <h4>Year</h4>
            <select value={year} onChange={onYearChanged} name="year" id="year" placeholder="Select Year">
                <option value={base_year+1}>{base_year+1}</option>
                <option value={base_year}>{base_year}</option>
                <option value={base_year-1}>{base_year-1}</option>
                <option value={base_year-2}>{base_year-2}</option>
                <option value={base_year-3}>{base_year-3}</option>
                <option value={base_year-4}>{base_year-4}</option>
                <option value={base_year-5}>{base_year-5}</option>
                <option value={base_year-6}>{base_year-6}</option>
                <option value={base_year-7}>{base_year-7}</option>
                <option value={base_year-8}>{base_year-8}</option>
            </select>
        </div>

        <div className={styles.adminLoginInput}>
            <h4>Month</h4>
            <select value={month} onChange={onMonthChanged} name="month" id="month">
                <option value={1}>January</option>
                <option value={2}>February</option>
                <option value={3}>March</option>
                <option value={4}>April</option>
                <option value={5}>May</option>
                <option value={6}>June</option>
                <option value={7}>July</option>
                <option value={8}>August</option>
                <option value={9}>September</option>
                <option value={10}>October</option>
                <option value={11}>November</option>
                <option value={12}>December</option>  
            </select>
        </div>

        <button onClick={performSearch} className={`${styles.greenButton} ${styles.searchButton}`}>Search</button>

        <button onClick={clearSearchOptions} className={`${styles.greyButton} ${styles.clearButton}`}>Clear</button>
    </div>
}

export default AdminLeftPayment;