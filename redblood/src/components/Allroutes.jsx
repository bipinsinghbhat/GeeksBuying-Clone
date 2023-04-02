import React from "react";
import Signup from "../pages/Signup"
import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import BestSelling from "../pages/BestSelling";
import SingleProductPage from "../pages/SingleProductPage";
import PrivateRoutes from "./PrivateRoute";
import AdminPage from "../pages/AdminPage";



function Allroutes(){
 return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/best" element={
   <PrivateRoutes>
   <BestSelling/>
   </PrivateRoutes>
    
    }/>
    <Route path="/best/:id" element={<SingleProductPage/>}></Route>
    <Route path='/admin' element={<AdminPage/>}></Route>
    </Routes>
     
)
}

export default Allroutes