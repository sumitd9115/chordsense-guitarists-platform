import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { FiMenu } from "react-icons/fi";

export default function Hamburger() {
  // const [openSidebar, setOpenSidebar] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay to skip the mount animation
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpenSidebar(!openSidebar)}
        className={`fixed top-5 left-5 z-50 cursor-pointer ${openSidebar ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <FiMenu className="text-2xl text-stone-300" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-40 flex items-center
         ${mounted ? "transition-transform duration-500 ease-in-out" : ""}
        ${openSidebar ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Sidebar onClose={() => setOpenSidebar(false)} />
      </div>

      {/* Overlay */}
      {openSidebar && (
        <div
          className="fixed inset-0 z-30 bg-black/30"
          onClick={() => setOpenSidebar(false)}
        />
      )}
    </>
  );
}
