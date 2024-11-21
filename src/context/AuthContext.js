// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context for auth
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap the app and provide context
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    // Load currentUser from localStorage or set it to null initially
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('currentUser'));
        setCurrentUser(storedUser);  // Here, we assume you are storing user data in localStorage
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
