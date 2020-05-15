import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import ParkItinerary from './components/ParkItinierary';


ReactDOM.render(
  <Router>
    <ParkItinerary />
  </Router>,
  document.getElementById('root')
);

