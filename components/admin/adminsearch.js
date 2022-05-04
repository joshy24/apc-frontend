
import { useEffect, useState } from "react";
import AdmintopSearch from "./search/admintopsearch"
import AdminMembers from "./search/adminmembers"
import AdminLeftSearch from "./search/adminleftsearch"
import ChangePayment from "../changepayment"

import styles from "../../styles/Home.module.css"

import {postRequest, getRequest} from "../../utils/api.requests"

import {BASE_URL, ADMIN_SEARCH_PROFILES, ADMIN_SEARCH_PROFILES_ID, ADMIN_GET_PAYMENTS} from "../../utils/api.endpoints"

const base_state = "Select a State";
const base_lga = "Select an LGA";

const AdminSearch = ({setLoading, setMessage}) => {

    const [search_value, setSearchValue] = useState("")
    const [search_option, setSearchOption] = useState("name")

    const [state, setState] = useState(base_state)
    const [lga, setLga] = useState(base_lga)
    const [lgas, setLgas] = useState([])

    const [members, setMembers] = useState([])

    const [payment, setPayment] = useState({})

    const [payment_type, setPaymentType] = useState("all")

    const [showPayment, setShowPayment] = useState(true)


    useEffect(() => {
        //performSearch();
    }, [])

    const performSearch = async () => {
        if(search_option == "member_id"){
            let url = BASE_URL+ADMIN_SEARCH_PROFILES_ID+"?member_id="+search_value

            setLoading(true);

            try{
                let response = await getRequest(url)
                
                setLoading(false);

                if(response && response.data){
                    setMembers([response.data])
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
        else{

            if(!payment || !payment._id){
                setMessage({message: "Please select a payment or create a payment", visible: true, type: "INFO"})
                return;
            }

            let url = BASE_URL+ADMIN_SEARCH_PROFILES+"?payment_id="+payment._id+"&payment_status="+payment_type

            if(state && state!=base_state){
                url+="&state="+state

                if(lga && lga != base_lga){
                    url+="&lga="+lga
                }
            }
            
            if(search_value && search_value.length > 0){
                url+="&name="+search_value
            }

            doSearch(url)
        }
    }

    const doSearch = async(url) => {
        setLoading(true);

        try{
            let response = await getRequest(url)

            setLoading(false);

            if(response && response.data){
                setMembers(response.data)
            }
            else{
                //show search error message
                setMessage({message: "An error occurred processing the request", visible: true, type: "ERROR"})
            }
        }
        catch(err){
            setLoading(false);
            //show search error message
            setMessage({message: "An error occurred processing the request", visible: true, type: "ERROR"})
        }
    }

    const performExport = () => {

    }

    const paymentChanged = async(new_payment) => {
        //set payment 
        //fetch mambers 
        setPayment(new_payment)
        setShowPayment(false)

        let url = BASE_URL+ADMIN_SEARCH_PROFILES+"?payment_id="+new_payment._id+"&payment_status="+payment_type

        if(state && state!=base_state){
            url+="&state="+state

            if(lga && lga != base_lga){
                url+="&lga="+lga
            }
        }
        
        if(search_value && search_value.length > 0){
            url+="&name="+search_value
        }

        doSearch(url)
    }

    const clearStateLga = () => {
        setState(base_state)
        setLga(base_lga);
        setLgas([])

        if(payment && payment._id){
            let url = BASE_URL+ADMIN_SEARCH_PROFILES+"?payment_id="+payment._id+"&payment_status="+payment_type
        
            if(search_value && search_value.length > 0){
                url+="&name="+search_value
            }

            doSearch(url)
        }
    }

    const clearSearchOptions = () => {
        setSearchValue("");

        if(payment && payment._id){
            let url = BASE_URL+ADMIN_SEARCH_PROFILES+"?payment_id="+payment._id+"&payment_status="+payment_type

            if(state && state!=base_state){
                url+="&state="+state

                if(lga && lga != base_lga){
                    url+="&lga="+lga
                }
            }

            doSearch(url)
        }
    }

    const onPaymentTypeChanged = (new_type) => {
        setPaymentType(new_type);
        
        if(payment && payment._id){
            let url = BASE_URL+ADMIN_SEARCH_PROFILES+"?payment_id="+payment._id+"&payment_status="+new_type
            console.log(url)
            if(state && state!=base_state){
                url+="&state="+state

                if(lga && lga != base_lga){
                    url+="&lga="+lga
                }
            }
            
            if(search_value && search_value.length > 0){
                url+="&name="+search_value
            }

            doSearch(url)
        }
    }
    
    return <div className={styles.adminSearch}>

        <div className={styles.adminLeftContent}>
            <AdminLeftSearch performSearch={performSearch} payment={payment}  setShowPayment={setShowPayment} payment_type={payment_type} setPaymentType={onPaymentTypeChanged} clearStateLga={clearStateLga} lga={lga} state={state} lgas={lgas} setState={setState} setLga={setLga} setLgas={setLgas} />
        </div>

        <div className={styles.adminRightContent}>
            <AdmintopSearch setSearchValue={setSearchValue} setSearchOption={setSearchOption} search_value={search_value} search_option={search_option} clearSearchOptions={clearSearchOptions} performExport={performExport} performSearch={performSearch} />
            
            <AdminMembers members={members} />
        </div>

        {
            showPayment && <ChangePayment setShowPayment={setShowPayment} paymentChanged={paymentChanged} setLoading={setLoading} />
        }

    </div>
}

export default AdminSearch;