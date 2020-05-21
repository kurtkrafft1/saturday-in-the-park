import React from "react";

const AreaCard = props => {
  return (
    <>
      <div className="text-box">
        <a href="#" className="btn btn-white btn-				 animate" onClick={() => {
          props.showAttraction(props.area.id);
        }}>
          {props.area.name}
        </a>
      </div>
    </>
  );
};
export default AreaCard;
