import React from "react";
import "./App.css"
import NavBar from "./components/navBar/NavBar";

import {Routes,Route} from 'react-router-dom' ;
import NousConnaitre from "./components/NousConnaitre/NousConnaitre"
import NosFonds from "./components/NosFonds/NosFonds";

function App() {
  return (
    <div> 
      <div className="navbarApp">
      <NavBar/>
      </div>
      <Routes>
      <Route path="/" element={<NousConnaitre/>} />

      <Route path="/nosfonds" element={<NosFonds/>} />

      </Routes>

    </div>
  );
}

export default App;
