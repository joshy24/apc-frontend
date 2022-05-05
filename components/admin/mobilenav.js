
import styles from "../../styles/Home.module.css"

import Image from "next/image"

const MobileNav = ({setNavMenuVisible}) => {

    const showNavMenu = () => {
        setNavMenuVisible(true)
    }

    return <div className={styles.mobileNav}>
        <div className={styles.mobileNavLogoName}>
            <Image className={styles.mobileNavLogo} src="/images/logo.webp" width={50} height={50} />
            <h4>APC Admin</h4>
        </div>

        <button onClick={showNavMenu} className={styles.mobileNavMenuBtn}></button>
    </div>
}

export default MobileNav;