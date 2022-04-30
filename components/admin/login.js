
import { useState } from "react"
import styles from "../../styles/Home.module.css"

import { useRouter } from "next/router"

import Image from "next/image"

import withNoAuth from "../../utils/withNoAuth"

import AuthHelperMethods from '../../utils/AuthHelperMethods';

const Auth = new AuthHelperMethods();

const Login = ({setLoading, setMessage}) => {
    const router = useRouter()

    const [user, setUser] = useState({username: "", password: ""})
    
    const processLogin = async(e) => {
        e.preventDefault();
        if(!user.username || user.username.length < 2 || user.username.length > 100 || !user.password && user.password.length < 8 || user.password.length > 100){
            //show message
            setMessage({visible: true, type: "INFO", message: "Please enter appropriate signin information", title: "Incomplete Fields"})
            return;
        }
        
        setLoading(true)

        try{
            let admin = await Auth.login(user.username, user.password);

            setLoading(false)

            console.log(admin)

            if(admin && admin.data && admin.response == "success"){
                router.push("/admin/dashboard")
            }
            else{
                setMessage({visible: true, type: "INFO", message: "Cant sign you in. Please check your signin details", title: "Login Failed"})
            }
        }
        catch(err){
            setLoading(false)
            setMessage({visible: true, type: "ERROR", message: "Cant sign you in. An error occurred", title: "Login Error"})
        }

    }

    function onFieldChanged(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        setUser({...user, [name]:value})
    }

    return <div className={styles.adminLoginTop}>
        <div className={styles.adminLoginInnerContent}>
            <Image className={styles.adminLoginInnerContentImage} src="/images/logo.webp" width={140} height={134} />

            <div className={styles.adminLoginInput}>
                <h4>Username</h4>
                <input value={user.username} type="text" name="username" id="username" onChange={e => onFieldChanged(e)} className={styles.inputField} placeholder="Enter your Username" />
            </div>

            <div className={styles.adminLoginInput}>
                <h4>Password</h4>
                <input value={user.password} type="password" name="password" id="password" onChange={e => onFieldChanged(e)} className={styles.inputField} placeholder="Enter your Password" />
            </div>

            <button onClick={e => processLogin(e)} className={styles.greenButton}>Login</button>
        </div>
    </div>
}

export default withNoAuth(Login);
//export default Login;