import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Hamburger from "./Components/Hamburger";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute";
import PublicLayout from "./Components/PublicLayout";

// Auth Pages
import LoginPage from "./Pages/Auth/LoginPage";
import SignupPage from "./Pages/Auth/SignupPage";
import AddPasswordPage from "./Pages/Auth/AddPasswordPage";
import VerifyOTPPage from "./Pages/Auth/VerifyOTPPage";
import ForgotPasswordPage from "./Pages/Auth/ForgotPasswordPage";
import ResetPasswordPage from "./Pages/Auth/ResetPasswordPage";

// Main Pages
import HomePage from "./Pages/HomePage";
import GuitarTuner from "./Pages/GuitarTuner";
import LearningSection from "./Pages/LearningSection";
import ChordLibrary from "./Pages/ChordLibrary";
import ChordProgGen from "./Pages/ChordProgGen";
import SavedProgressionPage from "./Components/Chord Progression Gen/SavedProgressionPage";
import AIassistant from "./Pages/AIassistant";
import ProfilePage from "./Pages/ProfilePage";

function AppLayout() {
  return (
    <div className="relative">
      <Hamburger />
      {/* Page content — React Router renders the matched child here */}
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="learning-section" element={<LearningSection />} />
        <Route path="guitar-tuner" element={<GuitarTuner />} />
        <Route path="chord-library" element={<ChordLibrary />} />
        <Route path="chord-prog-gen" element={<ChordProgGen />} />
        <Route
          path="saved-progression/:id"
          element={<SavedProgressionPage />}
        />
        <Route path="ai-assistant" element={<AIassistant />} />
        <Route path="ai-assistant/:chatId" element={<AIassistant />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route
        path="/"
        element={
          <PublicLayout>
            <HomePage />
          </PublicLayout>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignupPage />
          </PublicRoute>
        }
      />
      <Route
        path="/add-password"
        element={
          <PublicRoute>
            <AddPasswordPage />
          </PublicRoute>
        }
      />
      <Route
        path="/verify-otp"
        element={
          <PublicRoute>
            <VerifyOTPPage />
          </PublicRoute>
        }
      />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route
        path="/reset-password/:token"
        element={
          <PublicRoute>
            <ResetPasswordPage />
          </PublicRoute>
        }
      />

      {/* Protected — everything under /* requires login */}
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
