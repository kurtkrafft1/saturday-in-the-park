import { Route, Redirect } from "react-router-dom";
import React from "react";
import HomeList from "./home/home_list";

const ApplicationViews = props => {
    
    return (
        <Route exact path = "/"
        render={
            props=>{
                return <HomeList {...props} />
            }
        }
        />
    )
}
export default ApplicationViews