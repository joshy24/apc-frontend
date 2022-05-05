import styles from "../../styles/Home.module.css"

import NavImage from "./navimage";

import Image from "next/image"

const MobileNavMenu = ({setNavMenuVisible, nav, setNav}) => {

    function showNav(e, val){
        e.preventDefault();
        setNav(val);
        hideNavMenu();
    }

    const getColor = (selected) => {
        if(selected){
            return "#E41F26";
        }
        else{
            return "#82859B";
        }
    }

    const hideNavMenu = () => {
        setNavMenuVisible(false);
    }

    return <div className={styles.mobileNavMenu}>
        <div className={styles.mobileNavMenuTopContent}>
            <div className={styles.mobileNavLogoName}>
                <Image className={styles.mobileNavLogo} src="/images/logo.webp" width={50} height={50} />
                <h4>APC Admin</h4>
            </div>
            <button onClick={hideNavMenu} className={styles.closeBtn}></button>
        </div>

        <div className={styles.mobileNavMenuHolder}>
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

export default MobileNavMenu;