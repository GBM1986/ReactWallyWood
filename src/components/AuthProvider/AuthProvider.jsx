import React, { createContext, useState, useEffect, useContext } from "react";

// Create a context for managing authentication state
const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  // State to store authentication data
  const [loginData, setLoginData] = useState(null);

  // Function to check if the user is authenticated
  const isAuthenticated = () => {
    return !!loginData;
  };

  // Function to get the authentication data
  const getLoginData = () => {
    return loginData;
  };

  // Function to set the authentication data
  const login = (data) => {
    sessionStorage.setItem("token", JSON.stringify(data));
    setLoginData(data);
  };

  // Function to clear authentication data (logout)
  const logout = () => {
    sessionStorage.removeItem("token");
    setLoginData(null);
  };

  // Effect to initialize login data from session storage
  useEffect(() => {
    const storedData = sessionStorage.getItem("token");
    if (storedData) {
      setLoginData(JSON.parse(storedData));
    }
  }, []);

  // Make the authentication functions and data available to child components
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, getLoginData, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use authentication context in child components
export const useAuth = () => useContext(AuthContext);
