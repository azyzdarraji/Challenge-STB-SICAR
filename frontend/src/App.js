import React from "react";
import "./App.css"
import NavBar from "./components/navBar/NavBar";

import {Routes,Route} from 'react-router-dom' ;
import NousConnaitre from "./components/NousConnaitre/NousConnaitre"

function App() {
  return (
    <div> 
      <div className="navbarApp">
      <NavBar/>
      </div>
      <Routes>
      <Route path="/" element={<NousConnaitre/>} />

      </Routes>

    </div>
  );
}

export default App;
