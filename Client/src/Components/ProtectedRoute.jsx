import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

// Wraps any route that requires login
// If not authenticated → redirect to /login
export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-stone-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-stone-500 font-mono text-xs tracking-widest uppercase">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/" replace />;
}
