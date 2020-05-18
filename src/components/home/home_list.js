import React, {useState, useEffect} from 'react';
import ApiManager from '../../modules/ApiManager';
import AttractionCard from "./AttractionCard";


const HomeList = props => {
   const [atts, setAtts] =useState([])

   useEffect(()=> {
       ApiManager.getAllAttractions().then(data=> {
           setAtts(data)
       })
   }, [])

   return(
       <>
       <div className="page-header">
           <h1>All Attractions</h1>
       </div>
       <div className="list-container">
           {atts.map(att => (
               <AttractionCard key={att.id} att={att} {...props} />
           ))}
       </div>
       </>
   )
}
export default HomeList
