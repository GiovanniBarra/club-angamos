import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const RutasProtegidas = ({canActivate}) => {
    if(!canActivate){
        return <Navigate to= "/" replace/>
    } 
    return <Outlet/>
}

export default RutasProtegidas
