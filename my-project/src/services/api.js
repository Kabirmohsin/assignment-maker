import axios from "axios";

/*
  REAL BACKEND API CONFIG
  Backend should be running on:
  http://localhost:5000
*/

const api = axios.create({
  baseURL: "https://assignment-maker-backend.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});
;

/* ===============================
   🔐 ATTACH JWT TOKEN
================================ */
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/* ===============================
   ASSIGNMENT APIs
================================ */

// ✅ Generate assignment (AI)
api.generateAssignment = async (assignmentData) => {
  try {
    const res = await api.post("/assignments/generate", assignmentData);
    return { success: true, data: res.data };
  } catch (error) {
    console.error("Generate Assignment Error:", error);
    return {
      success: false,
      error: error.response?.data || "Assignment generation failed",
    };
  }
};

// ✅ Save assignment to MongoDB
api.saveDraft = async (assignmentData) => {
  try {
    const res = await api.post("/assignments/save", assignmentData);
    return { success: true, data: res.data };
  } catch (error) {
    console.error("Save Assignment Error:", error);
    return {
      success: false,
      error: error.response?.data || "Save failed",
    };
  }
};

// (OPTIONAL – dashboard later)
api.getAssignments = async () => {
  try {
    const res = await api.get("/assignments");
    return { success: true, data: res.data };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

/* ===============================
   AUTH APIs
================================ */

api.register = async (userData) => {
  try {
    const res = await api.post("/auth/register", userData);
    return { success: true, data: res.data };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data || "Registration failed",
    };
  }
};

api.login = async (credentials) => {
  try {
    const res = await api.post("/auth/login", credentials);

    // 🔥 THIS WAS MISSING
    localStorage.setItem("token", res.data.token);

    return {
      success: true,
      data: res.data,
    };
  } catch (error) {
    console.error("Login failed", error);
    return {
      success: false,
      error: error.response?.data || "Login failed",
    };
  }
};

export default api;
