
import Login from "../../components/admin/login"

import Loading from "../../components/loading";

import { useState } from "react"

import Message from "../../components/message"

const Admin = () => {

    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({visible: false, message: "", title: "", type: ""})

    return <div>
        <Login setMessage={setMessage} setLoading={setLoading}  />

        {
            loading && <Loading message={message} setMessage={setMessage} show={loading} /> 
        }

        {
            message.visible && <Message setMessage={setMessage} message={message} />
        }
    </div>
}

export default Admin;