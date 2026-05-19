import { createContext, useReducer, useEffect } from "react";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  isAuthenticated: false,
  isLoading: true,
};

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload.user, token: action.payload.token, isAuthenticated: true, isLoading: false };
    case "LOGOUT":
      return { ...state, user: null, token: null, isAuthenticated: false, isLoading: false };
    case "SET_USER":
      return { ...state, user: action.payload, isAuthenticated: true, isLoading: false };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

// Export context separately so useAuth can import it
export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch({ type: "SET_LOADING", payload: false });
      return;
    }
    fetch("http://localhost:3000/api/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch({ type: "SET_USER", payload: data.data.user });
        } else {
          localStorage.removeItem("token");
          dispatch({ type: "LOGOUT" });
        }
      })
      .catch(() => {
        localStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });
      });
  }, []);

  const login = (user, token) => {
    localStorage.setItem("token", token);
    dispatch({ type: "LOGIN_SUCCESS", payload: { user, token } });
  };

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}