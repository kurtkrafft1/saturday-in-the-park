import React, {useState} from 'react';
import ApiManager from '../../modules/ApiManager'
import "./register.css"
const Register = props => {

    const [credentials, setCredentials] = useState({"username":"","password": "","email":"", "firstName": "", "lastName":"", "familyMembers": 0 })

    const handleFieldChange = e => {
        const stateToChange = {...credentials}
        stateToChange[e.target.id] = e.target.value
        setCredentials(stateToChange)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newUser = {
            "username": credentials.username,
            "password": credentials.password,
            "email": credentials.email,
            "first_name": credentials.firstName,
            "last_name": credentials.lastName,
            "family_members": credentials.familyMembers
        }
        ApiManager.registerUser(newUser).then(resp=> { 
            sessionStorage.setItem("token", resp.token)
        }).then(props.history.push('/'))
    }
    return(
        <>
        <div className="container">

        <form id="signup" onSubmit={handleSubmit}>

            <div className="header">
    
                <h3>Sign Up</h3>
        
                <p>You want to fill out this form :D</p>
        
            </div>
    
            <div className="sep"></div>

            <div className="inputs">
            
                <input type="text" placeholder="Username" id="username"  onChange={handleFieldChange}/>
                <input type="email" placeholder="e-mail" id="email"  onChange={handleFieldChange}/>
                <input type="password" placeholder="Password" id="password" onChange={handleFieldChange}/>
                <input type="text" placeholder="First Name" id="firstName" onChange={handleFieldChange}/>
                <input type="text" placeholder="Last Name" id="lastName" onChange={handleFieldChange}/>
                <input type="number" id="familyMembers" placeholder="Number of Family Members" onChange={handleFieldChange}/>
                
                <div className="checkboxy">
                    <input name="cecky" id="checky" value="1" type="checkbox" /><label className="terms">I accept the terms of use</label>
                </div>
                
                {/* <a id="submit" href="#">Join the Park!</a> */}
                <input type="submit" id="submit" value="Join The Park!" />
            
            </div>

        </form>

        </div>

        </>
    )
}
export default Register