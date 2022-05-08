

import styles from "../../styles/Home.module.css"

import { lgas_list } from "../../utils/helper"

import { useState } from "react"

import {getExportRequest} from "../../utils/api.requests"

import {BASE_URL, EXPORT} from "../../utils/api.endpoints"

const base_state = "State";
const base_lga = "Local Government Area";


const AdminExport = ({setLoading, setMessage}) => {

    const [state, setState] = useState(base_state)
    const [lga, setLga] = useState(base_lga)
    const [lgas, setLgas] = useState([])
    const [paymentStatus, setPaymentStatus] = useState("all")
    
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

    const onPaymentStatusChanged = (event) => {
        const value = event.target.value;
        
        setPaymentStatus(value)
    }

    const doExport = async(e, export_type) => {
        e.preventDefault();

        try{
            let url = BASE_URL+EXPORT+"?state="+state+"&lga="+lga+"&export_type="+export_type +"&payment_status="+paymentStatus;

            let result = await getExportRequest(url, export_type=="excel" ? "xlsx" : "pdf");

            if(result){
                const d_url = window.URL.createObjectURL(new Blob([result]));
                const link = document.createElement('a');
                const file_name = 'file.'+export_type=="excel" ? ".xlsx" : ".pdf"
                link.href = d_url;
                link.setAttribute('download', file_name); //or any other extension
                document.body.appendChild(link);
                link.click();
            }
            else{
                console.log(result)
            }
        }
        catch(err){
            console.log(err)
        }
    }

    return <div className={styles.adminExport}>

        <div>
            <h1 className={styles.pageTitle}>Export</h1>
        </div>

        <div className={styles.adminExportHolder}>
            <div className={styles.exportText}>
                <h5>Select data to export</h5>
            </div>
            <div className={styles.exportOptions}>
                <div className={ ` ${styles.adminLoginInput} ${styles.state}` }>
                    <h4>State</h4>
                    <select value={state} className={`generalSelect`} onChange={onStateChanged} name="states" id="states">
                        <option value={base_state}>{base_state}</option>
                        {
                            Object.keys(lgas_list).map(stat => {
                                return <option key={stat} value={stat}>{stat}</option>
                            })
                        }
                    </select>
                </div>

                <div className={`${styles.adminLoginInput} ${styles.lga} `}>
                    <h4>Local Government Area</h4>
                    <select value={lga} onChange={onLGAChanged} className={`generalSelect`} name="lga" id="lga" placeholder="Select LGA">
                        <option value={base_lga}>{base_lga}</option>
                        {
                            lgas && lgas.map(lg => {
                                return <option key={lg} value={lg}>{lg}</option>
                            })
                        }
                    </select>
                </div>

                <div className={`${styles.adminLoginInput} ${styles.paymentStatus} `}>
                    <h4>Payment Status</h4>
                    <select value={paymentStatus} onChange={onPaymentStatusChanged} className={`generalSelect`} name="paymentStatus" id="paymentStatus" placeholder="Select Payment Status">
                        <option value="all">All</option>
                        <option value="paid">Paid</option>
                        <option value="not_paid">Not Paid</option>
                    </select>
                </div>
            </div>

            <div className={styles.exportButtons}>
                    <button onClick={e => doExport(e, "pdf")} className={styles.greenButton}>Export as pdf</button>
                    <button onClick={e => doExport(e, "excel")} className={styles.greenButton}>Export as excel</button>
            </div>
        </div>
    </div>
}

export default AdminExport;