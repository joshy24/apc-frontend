
import styles from "../../styles/Home.module.css"

import NavImage from "./navimage";

import Image from "next/image"

const Nav = ({nav, setNav}) => {

    function showNav(e, val){
        e.preventDefault();
        setNav(val);
    }

    const getColor = (selected) => {
        if(selected){
            return "#E41F26";
        }
        else{
            return "#82859B";
        }
    }

    return <div className={styles.nav}>
        <Image className={styles.image} style={{borderRadius: "50%"}} src="/images/logo.webp" width={60} height={60} />

        <div className={styles.navHolder}>
            <div className={styles.navItem} onClick={e => showNav(e,"dashboard")}>
                <NavImage image="DASHBOARD" selected={nav == "dashboard"} />
                <h5 style={{color: getColor(nav == "dashboard")}}>Dashboard</h5>
            </div>

            <div className={styles.navItem} onClick={e => showNav(e, "search")}>
                <NavImage image="SEARCH" selected={nav == "search"} />
                <h5 style={{color: getColor(nav == "search")}}>Search</h5>
            </div>

            <div className={styles.navItem} onClick={e => showNav(e, "payment")}>
                <NavImage image="PAYMENT" selected={nav == "payment"} />
                <h5 style={{color: getColor(nav == "payment")}}>Payment</h5>
            </div>

            <div className={styles.navItem} onClick={e => showNav(e, "export")}>
                <NavImage image="EXPORT" selected={nav == "export"} />
                <h5 style={{color: getColor(nav == "export")}}>Export</h5>
            </div>
        </div>
    </div>
}

export default Nav;