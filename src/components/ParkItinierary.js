import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Sidebar from "./sidebar/Sidebar";
import ApplicationViews from "./ApplicationViews";
import Navbar from "./navbar/navbar";

const ParkItinerary = props => {

    return (
        <>
        <Sidebar />
        <Navbar />
        <ApplicationViews />
        </>
    )
}
export default ParkItinerary