
import styles from "../../../styles/Home.module.css"

const AdmintopSearch = ({search_option, setSearchValue, search_value, setSearchOption, performSearch, clearSearchOptions, performExport}) => {

    function onSearchValueChanged(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        setSearchValue(value)
    }

    function onSearchOptionChanged(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        setSearchOption(value)
    }

    return <div className={styles.adminTopSearch}>
        
        <div className={styles.adminTopSearchSearch}>
            <select value={search_option} onChange={onSearchOptionChanged} className={styles.search_option} name="search_option" id="search_option">
                <option value="name">Name</option>
                <option value="member_id">Member Id</option>
            </select>
            
            <input value={search_value} onChange={onSearchValueChanged} className={styles.generalInputField} placeholder={"Enter "+ (search_option == "name" ? "Name" : "Member ID")} />
        
            <button onClick={performSearch} className={styles.greenButton}>Proceed</button>

            <button onClick={clearSearchOptions} className={styles.greyButton}>Clear</button>
        </div>

        <button onClick={performExport} className={styles.greenButton}>Export</button>
    </div>
}

export default AdmintopSearch;