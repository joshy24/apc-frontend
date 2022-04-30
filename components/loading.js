import styles from "../styles/Loader.module.css"

const Loading = ({show}) => {
    return (
        <div>
            {
                show ? <div className={styles.loaderTop}>
                    <div className={styles.loader}>
                        
                    </div>
                </div> : <div></div>
            }
        </div>
    )
}

export default Loading;