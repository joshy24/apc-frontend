
import styles from "../../styles/Home.module.css"

import AdminSearch from '../../components/admin/adminsearch'
import AdminPayment from '../../components/admin/adminpayment'
import AdminExport from '../../components/admin/adminexport'

import Home from "../../components/admin/home"

import Nav from "../../components/admin/nav"

import Loading from "../../components/loading";

import Message from "../../components/message"

import { useState } from "react"

import withAuth from "../../utils/withAuth"

import MobileNav from "../../components/admin/mobilenav"

import MobileNavMenu from "../../components/admin/mobilenavmenu"

const Dashboard = () => {

    const [loading, setLoading] = useState(false)
    const [nav, setNav] = useState("dashboard")
    const [message, setMessage] = useState({visible: false, message: "", title: "", type: ""})
    const [navMenuVisible, setNavMenuVisible] = useState(false)

    const navItemClicked = (e, item) => {
        e.preventDefault();
        setNav(item)
    }

    return <div className={styles.adminDashboard}>
        <div className={styles.adminDashboardContent}>
            <Nav nav={nav} setNav={setNav} />

            <MobileNav setNavMenuVisible={setNavMenuVisible} />

            <div className={styles.dashboardRightContent}>
                {
                    (nav == "dashboard") && <Home setNav={setNav} />
                }
                {
                    (nav == "search") && <AdminSearch setMessage={setMessage} setLoading={setLoading} />
                }
                {
                    (nav == "payment") && <AdminPayment setMessage={setMessage} setLoading={setLoading} />
                }
                {
                    (nav == "export") && <AdminExport setLoading={setLoading} />
                }
            </div>
        </div>

        {
            loading && <Loading show={loading} /> 
        }

        {
            message.visible && <Message setMessage={setMessage} message={message} />
        }

        { 
            navMenuVisible && <MobileNavMenu setNav={setNav} setNavMenuVisible={setNavMenuVisible} nav={nav} navItemClicked={navItemClicked} /> 
        }
    </div>
}

export default withAuth(Dashboard);
//export default Dashboard;