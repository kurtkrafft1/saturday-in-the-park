import React, {useState, useEffect} from 'react';
import ApiManager from '../../modules/ApiManager';
import AreaCard from "./AreaCard";
import AttractionCard from "./AttractionCard";
import "./home.css";
import "./button.css"


const HomeList = props => {
   const [areas, setAreas] =useState([])
   const [atts, setAtts] = useState([])

   const showAttractions=(id)=> {
       ApiManager.getAllAttractionsByArea(id).then(data=> {
           setAtts(data)
       })

   }

   useEffect(()=> {
       ApiManager.getAreas().then(data=> {
           setAreas(data)
       })
   }, [])

   return(
       <>
       <div className="list-container">
           <div className="area-list">
               <h1 className="list-header"><span className="purple">Areas</span></h1>
               <div className="area-btn-div">
           {areas.map(area => (
               <AreaCard key={area.id} area={area} showAttraction={showAttractions} {...props} />
           ))}
           </div>
           </div>
           <div className = "area-list">
           <h1 className="list-header"><span className="orange">Attractions</span></h1>
           
            {atts.length != 0 ? atts.map(att=> (
                <AttractionCard key={att.id} att={att} {...props} />
            )):(<h5 className="click-options">Please select an area to view the attractions</h5>)}
           </div>
       </div>
       
       </>
   )
}
export default HomeList
