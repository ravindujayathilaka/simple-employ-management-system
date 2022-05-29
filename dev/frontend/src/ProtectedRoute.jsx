import React from 'react'
import { Navigate, Route } from 'react-router'

export default function ProtectedRoute({auth, component: Component, ...rest}) {
    return (
        <div>
            <Route {...rest} render = {(props) => {
                if(auth) return <Component {...props} />
                if(!auth) return <Navigate to= {{path: '/', state : {from : props.location}}} />
            }} />
        </div>
    );
}