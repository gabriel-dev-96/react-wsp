import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute=({isAuth,component: Component, ...rest})=>(
        <Route {...rest} component={(props)=>(
            isAuth ? (<Component {...props}/>): (<Redirect to="/login"/>)
        )}/>
    )

export default PrivateRoute