// src/components/PublicRoute.jsx  ← new file
// Redirects logged-in users AWAY from login/signup pages
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function PublicRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return null; // wait for auth check

  // Already logged in → send to app, can't go back to login
  return isAuthenticated
    ? <Navigate to="/home" replace />
    : children;
}