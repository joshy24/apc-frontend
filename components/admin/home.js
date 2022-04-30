
import styles from "../../styles/Home.module.css"

import Image from "next/image"

import { useEffect, useState } from "react"

import {getRequest} from "../../utils/api.requests"

import {BASE_URL, ADMIN_COUNT_PAYMENTS} from "../../utils/api.endpoints"

const Home = ({setNav}) => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        getPaymentsCount()
    }, [])

    const getPaymentsCount = async () => {
        try{

            let url = BASE_URL+ADMIN_COUNT_PAYMENTS;

            let result  = await getRequest(url)

            if(result && result.data){
                setCount(result.data)
            }

        }catch(err){
            
        }
    }

    const goToSearch = () => {
        setNav("search")
    }

    const goToPayment = () => {
        setNav("payment")
    }

    const goToExport = () => {
        setNav("export")
    }

    return <div className={styles.home}>
        <div className={styles.homeTopContent}>
            <h4 className={styles.pageTitle}>Dashboard</h4>

            <input onClick={goToSearch} className={`${styles.homeSearchInput} ${styles.generalInputField}`} placeholder="Search Members" />
        </div>

        <h4 className={styles.payments_count_text}>{count} payments created</h4>

        <div className={styles.homeContentHolder}>
            <div className={styles.homeContentItem} onClick={goToSearch}>
                <div className={styles.homeContentItemImageItem}>
                    <Image src="/nav/search_selected.png" width={100} height={100} />
                </div>

                <div className={styles.homeContentItemInnerItem}>
                    <h3>Search</h3>
                    <h4>Search members and see who has paid dues</h4>
                </div>
            </div>
            <div className={styles.homeContentItem} onClick={goToPayment}>
                <div className={styles.homeContentItemImageItem}>
                    <Image src="/nav/payment_selected.png" width={100} height={100} />
                </div>

                <div className={styles.homeContentItemInnerItem}>
                    <h3>Payment</h3>
                    <h4>View and create payments for members</h4>
                </div>
            </div>
            <div className={styles.homeContentItem} onClick={goToExport}>
                <div className={styles.homeContentItemImageItem}>
                    <Image src="/nav/export_selected.png" width={92} height={92} />
                </div>

                <div className={styles.homeContentItemInnerItem}>
                    <h3>Export</h3>
                    <h4>Export data in various ways and formats</h4>
                </div>
            </div>
        </div>
    </div>
}

export default Home;