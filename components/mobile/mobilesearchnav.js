
import styles from "../../styles/Home.module.css"

const MobileSearchtNav = ({showMobileFilter}) => {
    return <div className={styles.mobileRightNav}>
        <h1 className={styles.pageTitle}>Search</h1>
        <button onClick={showMobileFilter} className={styles.blueButton}>Filter</button>
    </div>
}

export default MobileSearchtNav;