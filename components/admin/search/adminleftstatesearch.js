
import styles from "../../../styles/Home.module.css"

import { lgas_list } from "../../../utils/helper"

const base_state = "Select a State";
const base_lga = "Select an LGA";

const AdminLeftStateSearch = ({lga, state, lgas, clearStateLga, performSearch, onStateChanged, onLGAChanged}) => {
    return <div className={styles.adminLeftStateSearch}>
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
}

export default AdminLeftStateSearch;