import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <span>Page is Loading</span>;
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                (user.email || user.displayName) ?
                    children :
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
            }
        >
        </Route >
    );
};

export default PrivateRoute;