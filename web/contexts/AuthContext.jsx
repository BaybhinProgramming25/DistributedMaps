import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [isAuthenicated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check if user is Logged in 
    useEffect(() => {
        checkAuth();
    }, [])

    const checkAuth = async () => {
        try {
            const token = localStorage.getItem('token');
            // Working on implementing JWT and Access/Refresh Tokens 
            console.log(token)
        } catch () {

        }
    }
 
}