import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in (e.g., from localStorage)
    const checkAuthStatus = () => {
      const token = localStorage.getItem("authToken");

      if (token) {
        // In a real app, you might verify the token validity
        setIsAuthenticated(true);
        setUser({
          name: localStorage.getItem("userName") || "Admin User",
          email: localStorage.getItem("userEmail") || "admin@example.com",
          role: localStorage.getItem("userRole") || "admin",
        });
      }

      setLoading(false);
    };

    checkAuthStatus();
  }, []);

  const login = (email, password, rememberMe) => {
    // In a real app, this would make an API call to verify credentials
    // This is just a dummy implementation
    return new Promise((resolve, reject) => {
      // Simulate API call
      setTimeout(() => {
        if (email && password) {
          const userData = {
            name: "Admin User",
            email: email,
            role: "admin",
          };

          setIsAuthenticated(true);
          setUser(userData);

          // Store authentication data if remember me is checked
          if (rememberMe) {
            localStorage.setItem("authToken", "dummy-token-value");
            localStorage.setItem("userName", userData.name);
            localStorage.setItem("userEmail", userData.email);
            localStorage.setItem("userRole", userData.role);
          }

          resolve(userData);
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 500);
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userRole");
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
