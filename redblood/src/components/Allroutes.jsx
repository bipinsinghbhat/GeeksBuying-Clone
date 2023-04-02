import React from "react";
import Signup from "../pages/Signup"
import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import BestSelling from "../pages/BestSelling";
import SingleProductPage from "../pages/SingleProductPage";



function Allroutes(){
 return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/best" element={<BestSelling/>}/>
    <Route path="/best/:id" element={<SingleProductPage/>}></Route>
    </Routes>
)
}

export default Allroutes