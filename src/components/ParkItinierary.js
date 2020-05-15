import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Sidebar from "./sidebar/Sidebar";
import ApplicationViews from "./ApplicationViews";

const ParkItinerary = props => {

    return (
        <>
        <Sidebar />
        <ApplicationViews />
        </>
    )
}
export default ParkItinerary