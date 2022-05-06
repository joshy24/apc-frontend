import styles from "../../styles/Home.module.css"

import Image from "next/image"

import { useState } from 'react'

import {postRequest, getRequest} from "../../utils/api.requests"
import {BASE_URL, SEARCH_MEMBER_ID, SEARCH_PROFILE} from "../../utils/api.endpoints"

import { lgas_list } from "../../utils/helper"

const base_state = "Select a State";
const base_lga = "Select an LGA";

const PayeeSearch = ({setMembers, setMember, setLoading, setMessage}) => {

    const [memberId, setMemberId] = useState("")
    const [name, setName] = useState("")
    const [state, setState] = useState(base_state)
    const [lga, setLga] = useState(base_lga)
    const [lgas, setLgas] = useState([])

    function onMemberIdChanged(event){
        const value = event.target.value;
        
        setMemberId(value)
    }

    function onNameChanged(event){
        const value = event.target.value;
        
        setName(value)
    }

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

    const searchMemberId = async() => {
        /*let result  = {
            firstname: "Ife",
            lastname: "Ajayi",
            state: "Lagos",
            lga: "Alimosho",
            member_id: "d98dsdsh9ddniei",
            amount: 1000000,
            status: "Pending"
        }

        setMember(result)*/

        setMembers([])

        setLoading(true);
        
        try{
            let url = BASE_URL+SEARCH_MEMBER_ID+"?member_id="+memberId;

            let profile = await getRequest(url);

            setLoading(false)

            if(profile && profile.data){
                setMember(profile.data)
            }
            else{
                setMessage({message: "Your profile was not retrieved. Try again later.", visible: true, type: "ERROR"})
            }
        }
        catch(err){
            console.log(err)
            setMessage({message: "An error occurred getting your profile.", visible: true, type: "ERROR"})
            setLoading(false)
        }
    }

    const searchProfile = async () => {
        /*let result = [{
            firstname: "Ife",
            lastname: "Ajayi",
            state: "Lagos",
            lga: "Alimosho",
            member_id: "d98dsdsh9ddniei",
            amount: 1000000,
            status: "Pending"
        }, {
            firstname: "David",
            lastname: "Stern",
            state: "Lagos",
            lga: "Alimosho",
            member_id: "sdjndfofnodsl8",
            amount: 1000000,
            status: "Pending"
        }, {
            firstname: "Ja",
            lastname: "Morant",
            state: "Abuja",
            lga: "Alimosho",
            member_id: "98e9erwueerns",
            amount: 1000000,
            status: "Pending"
        },{
            firstname: "Kevin",
            lastname: "Durant",
            state: "Abuja",
            lga: "Alimosho",
            member_id: "89weherjwfin34uf",
            amount: 1000000,
            status: "Pending"
        }, {
            firstname: "Isaiah",
            lastname: "Thomas",
            state: "Abuja",
            lga: "Alimosho",
            member_id: "03bh98hu3rbiu",
            amount: 1000000,
            status: "Pending"
        }]

        setMembers(result)*/

        setLoading(true);

        try{
            let url = BASE_URL+SEARCH_PROFILE+"?name="+name+(state && state.length > 0 && state != base_state ? "&state="+state : "")+(lga && lga.length > 0 && lga != base_lga ? "&lga="+lga : "");

            let profiles = await getRequest(url);
            
            setLoading(false)

            if(profiles && profiles.data){
                setMembers(profiles.data)
            }
            else{
                setMessage({message: "Your profile was not retrieved. Try again later.", visible: true, type: "ERROR"})
            }
        }
        catch(err){
            setLoading(false)
            setMessage({message: "An error occurred getting your profile.", visible: true, type: "ERROR"})
        }
    }
    
    return <div className={styles.payeeSearch}>
            <div>
                <Image style={{borderRadius: "50%"}} src="/images/logo.webp" width={65} height={65} />

                <h1 className={styles.enterText}>Enter your membership ID to get started</h1>

                <div className={styles.membershipIDContent}>
                    <input value={memberId} name="memberId" onChange={onMemberIdChanged} className={styles.inputField} placeholder="Enter your membership ID" />
                    <button onClick={searchMemberId} className={styles.redButton}>Proceed</button>
                </div>

                <div className={styles.orContent}>
                    <hr/>
                    <h2>or</h2>
                    <hr/>
                </div>

                <h1>Search for your profile</h1>

                <div className={styles.membershipIDContent}>
                    <input value={name} onChange={onNameChanged} className={styles.inputField} placeholder="Enter your name" />
                    <button onClick={searchProfile} className={styles.redButton}>Proceed</button>
                </div>

                <div className={styles.stateLga}>
                    <select value={state} className={styles.state} onChange={onStateChanged} name="states" id="states" placeholder="Select State">
                        <option value={base_state}>{base_state}</option>
                        {
                            Object.keys(lgas_list).map(stat => {
                                return <option key={stat} value={stat}>{stat}</option>
                            })
                        }
                    </select>

                    <select value={lga} onChange={onLGAChanged} className={styles.lga} name="lga" id="lga" placeholder="Select LGA">
                        <option value={base_lga}>{base_lga}</option>
                        {
                            lgas && lgas.map(lg => {
                                return <option key={lg} value={lg}>{lg}</option>
                            })
                        }
                    </select>
                </div>
            </div>

    </div>

}

export default PayeeSearch;