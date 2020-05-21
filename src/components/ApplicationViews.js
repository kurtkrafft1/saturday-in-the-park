import { Route, Redirect } from "react-router-dom";
import React from "react";
import HomeList from "./home/home_list";
import MyItinerary from "./myitinierary/MyItinierary";
import Register from "./auth/register";
import Login from "./auth/login";
const ApplicationViews = props => {
    
    return (
        <>
        <Route exact path = "/"
        render={
            props=>{
                return <HomeList {...props} />
            }
        }
        />
        <Route exact path = "/myitinerary"
        render={
            props=> {
                return <MyItinerary {...props} />
            }
        }
        />
        <Route exact path = "/register"
        render = {
            props => {
                return <Register {...props} />
            }
        }
        />
        <Route exact path = "/login" 
        render={
            props=> {
                return < Login {...props} />
            }
        }
        />
        </>
    )
}
export default ApplicationViews