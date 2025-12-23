import React, { createContext, useContext, useState } from "react";
import api from "../services/api";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ REAL LOGIN (BACKEND)
 const login = async (email, password) => {
  setLoading(true);
  try {
    const res = await api.post("/auth/login", { email, password });

    // ✅ TOKEN HERE (ONLY PLACE)
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);

    return res.data;
  } finally {
    setLoading(false);
  }
};

const register = async (name, email, password) => {
  setLoading(true);
  try {
    const res = await api.post("/auth/register", {
      name,
      email,
      password,
    });

    // ❌ no token here
    return res.data;
  } finally {
    setLoading(false);
  }
};


  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const isAuthenticated = () => {
    return !!localStorage.getItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
