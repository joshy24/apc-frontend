
import styles from "../../styles/Home.module.css"

import AdminSearch from '../../components/admin/adminsearch'
import AdminPayment from '../../components/admin/adminpayment'
import AdminExport from '../../components/admin/adminexport'

import Home from "../../components/admin/home"

import Nav from "../../components/nav"

import Loading from "../../components/loading";

import Message from "../../components/message"

import { useState } from "react"

import withAuth from "../../utils/withAuth"

const Dashboard = () => {

    const [loading, setLoading] = useState(false)
    const [nav, setNav] = useState("dashboard")
    const [message, setMessage] = useState({visible: false, message: "", title: "", type: ""})

    return <div className={styles.adminDashboard}>
        <div className={styles.adminDashboardContent}>
            <Nav nav={nav} setNav={setNav} />

            <div className={styles.dashboardLeftContent}>
                {
                    (nav == "dashboard") && <Home />
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
    </div>
}

export default withAuth(Dashboard);
//export default Dashboard;