
import styles from "../../styles/Home.module.css"

import Image from "next/image"

const NavImage = ({image, selected}) => {
    
    const getImage = () => {
        switch (image){
            case "DASHBOARD":
                return selected ? "/nav/dashboard_selected.png" : "/nav/dashboard.png" ;
            case "SEARCH":
                return selected ? "/nav/search_selected.png" : "/nav/search.png" ;
            case "PAYMENT":
                return selected ? "/nav/payment_selected.png" : "/nav/payment.png" ;
            case "EXPORT":
                return selected ? "/nav/export_selected.png" : "/nav/export.png" ;
        }
    }

    const getBackground = () => {
        if(selected){
            return "/nav/selected_background.png";
        }
        else{
            return "";
        }
    }
    
    return <div style={{background: "url(" + getBackground() + ")"}} className={styles.navImage}>
        <div className={styles.innerImage}>
            <Image src={getImage()} width={25} height={25} />
        </div>
    </div>
}

export default NavImage;