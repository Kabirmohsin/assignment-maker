import api from "./api";

const authService = {

  /* ===============================
     REGISTER (BACKEND)
  ================================ */
  async register(name, email, password) {
    try {
      const res = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      return {
        success: true,
        user: res.data.user,
        message: res.data.message,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Registration failed",
      };
    }
  },

  /* ===============================
     LOGIN (BACKEND + JWT)
  ================================ */
  async login(email, password) {
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      // 🔥 IMPORTANT
      localStorage.setItem("token", res.data.token);

      return {
        success: true,
        user: res.data.user,
        token: res.data.token,
        message: res.data.message,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Login failed",
      };
    }
  },

  /* ===============================
     LOGOUT
  ================================ */
  logout() {
    localStorage.removeItem("token");
    return { success: true };
  },

  /* ===============================
     CHECK AUTH (TOKEN EXISTS)
  ================================ */
  isAuthenticated() {
    return !!localStorage.getItem("token");
  }
};

export default authService;
