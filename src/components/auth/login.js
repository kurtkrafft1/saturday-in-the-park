import React, {useState} from 'react';
import ApiManager from "../../modules/ApiManager"
import "./register.css"


const Login = props => {

    const [credentials, setCredentials] = useState({"username": "", "password": ""})

    const handleFieldChange = e => {
        const stateToChange = {...credentials}
        stateToChange[e.target.id] = e.target.value
        setCredentials(stateToChange)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const loginInfo = {
            "username": credentials.username,
            "password": credentials.password
        }
        ApiManager.loginUser(loginInfo).then(r=> {
            sessionStorage.setItem("token", r.token)
        }).then(props.history.push('/'))
    }

    return (
        <>
        <div className="container">

        <form id="signup" onSubmit={handleSubmit}>

            <div className="header">
    
                <h3>Login</h3>
        
                <p>Welcome Back :D</p>
        
            </div>
    
            <div className="sep"></div>

            <div className="inputs">
            
                <input type="text" placeholder="Username" id="username"  onChange={handleFieldChange}/>
                <input type="password" placeholder="Password" id="password" onChange={handleFieldChange}/>
                
                <div className="checkboxy">
                    <input name="cecky" id="checky" value="1" type="checkbox" /><label className="terms">I accept the terms of use</label>
                </div>
                
                <input type="submit" id="submit" value="Login!" />
            
            </div>

        </form>

        </div>

        </>
    )

}
export default Login