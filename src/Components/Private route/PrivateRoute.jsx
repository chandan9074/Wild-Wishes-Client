//import pakages
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const {user, loading} = useAuth();
    if (loading) {
        return (
            <div className="spin-background">
            </div>
        );
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
            user.email ? (
            children
            ) : (
            <Redirect
                to={{
                pathname: "/accounts",
                state: { from: location }
                }}
            />
            )
        }
        />
    );
}
 
export default PrivateRoute;