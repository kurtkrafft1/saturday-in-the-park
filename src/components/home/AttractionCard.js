import React from 'react';

const AttractionCard = props => {

    return(
        <>
        <div className = "card-container">
            <div className="card-title"><h1>{props.att.name}</h1></div>
            <div className="card-subtitle"><p>-{props.att.area.name}</p></div>
        </div>
        </>
    )
}
export default AttractionCard