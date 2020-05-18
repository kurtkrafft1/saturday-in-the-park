import React from 'react';

const ItineraryCard = props => {
    return (
        <>
        <div className="content-card">
            <div className="card-title">{props.item.attraction.name} ({props.item.start_time})</div>
        </div>
        </>
    )
}
export default ItineraryCard