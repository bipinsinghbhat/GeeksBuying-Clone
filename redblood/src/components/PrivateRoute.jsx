import React, { useContext } from "react"
import { AuthContext } from "../content/AuthContext"
import { Navigate } from "react-router-dom"

function PrivateRoutes({children}){
    
   const { isAuth } =useContext(AuthContext)
   if(!isAuth){
    return <Navigate to="/signup"/>
   }
    
    return  children;
    
   }
   
   export default PrivateRoutes