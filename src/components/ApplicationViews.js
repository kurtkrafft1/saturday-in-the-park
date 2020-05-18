import { Route, Redirect } from "react-router-dom";
import React from "react";
import HomeList from "./home/home_list";
import MyItinerary from "./myitinierary/MyItinierary"
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

        </>
    )
}
export default ApplicationViews