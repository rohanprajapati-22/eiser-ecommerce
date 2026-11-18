import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [customer, setCustomer] = useState(() => {
        const savedCustomer = localStorage.getItem("customer");
        return savedCustomer ? JSON.parse(savedCustomer) : null;
    });

    const [token, setToken] = useState(
        () => localStorage.getItem("token")
    );

    // Login
    const login = (token, customer) => {
        localStorage.setItem("token", token);
        localStorage.setItem("customer", JSON.stringify(customer));

        setToken(token);
        setCustomer(customer);
    };

    // Logout
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("customer");

        setToken(null);
        setCustomer(null);
    };

    return (
        <AuthContext.Provider
            value={{
                customer,
                token,
                isLoggedIn: !!token,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);