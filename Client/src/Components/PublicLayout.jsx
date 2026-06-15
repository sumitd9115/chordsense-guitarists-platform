import { useAuth } from "../context/useAuth";
import Hamburger from "./Hamburger";

export default function PublicLayout({ children }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return children;
  }

  return (
    <div className="relative">
      <Hamburger />
      {children}
    </div>
  );
}
