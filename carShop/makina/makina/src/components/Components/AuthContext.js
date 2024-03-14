import React, { useState, useEffect } from 'react'
export const AuthContext = React.createContext();
export function AuthProvider(props) {
    const [auth, setAuth] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user_name = localStorage.getItem('user_name');
        const hasAgency = localStorage.getItem('hasAgency');
        const hasStore = localStorage.getItem('hasStore');
        const id = localStorage.getItem('id');
        if (token)
            setAuth({
                token, user_name, hasAgency, hasStore
            });
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {props.children}
        </AuthContext.Provider>
    )


}