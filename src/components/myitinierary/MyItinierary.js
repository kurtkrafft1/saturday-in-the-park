import React, { useState, useEffect } from "react";
import ApiManager from "../../modules/ApiManager";
import ItineraryCard from "./ItineraryCard"

const MyItinerary = props=> {
    const [itinerary, setItinerary] = useState([])
    // const user = JSON.parse(sessionStorage.getItem("credentials"));
    const user = { id: 1 };

    useEffect(()=> {
        ApiManager.getItinerary(user.id).then(data=> {
            setItinerary(data)
        })
    },[])

    return (
        <>
        <div className="page-header">My Itinerary</div>
        <div className="list-container">
            {itinerary.map(item=> (
                <ItineraryCard item={item} key = {item.id} {...props} />
            ))}
        </div>
        </>
    )
}

export default MyItinerary
