import React from "react";
import Signup from "../pages/Signup"
import { Routes,Route } from "react-router-dom";



function Allroutes(){
 return (
   <Routes>
    <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
)
}

export default Allroutes