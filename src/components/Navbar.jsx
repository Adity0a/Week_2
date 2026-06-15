import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/react";
import { useTheme } from "../context/ThemeContext";

const SunIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.95 16.95l.707.707M7.05 7.05l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const BookIcon = () => (
  <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
  </svg>
);

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Flights", path: "/flights" },
    { name: "Trains", path: "/trains" },
    { name: "About", path: "/about" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== "/") {
        setIsScrolled(true);
      } else {
        setIsScrolled(window.scrollY > 10);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-md py-3 md:py-4 border-b border-gray-100 dark:border-slate-800"
          : "bg-transparent py-4 md:py-6 text-white"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src={assets.logo}
          alt="logo"
          className={`h-7 md:h-9 ${(!isDarkMode && isScrolled) ? "invert" : ""} opacity-90 hover:opacity-100 transition-all`}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={`group flex flex-col gap-0.5 font-medium transition-colors ${
              location.pathname === link.path
                ? "text-primary dark:text-blue-400"
                : (isScrolled && !isDarkMode) ? "text-gray-800 hover:text-primary" : "text-white hover:text-gray-200"
            }`}
          >
            {link.name}
            <div
              className={`${
                location.pathname === link.path
                  ? "w-full bg-primary"
                  : (isScrolled && !isDarkMode) ? "bg-primary" : "bg-white"
              } h-0.5 ${location.pathname === link.path ? "w-full" : "w-0"} group-hover:w-full transition-all duration-300`}
            />
          </Link>
        ))}
        {user && (
          <button
            className={`border px-5 py-1.5 text-sm font-medium rounded-full cursor-pointer transition-all ${
              (isScrolled && !isDarkMode)
                ? "border-gray-300 text-gray-800 hover:bg-gray-50"
                : "border-white/30 text-white hover:bg-white/10"
            }`}
            onClick={() => navigate("/owner")}
          >
            Dashboard
          </button>
        )}
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-5">
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-all ${
            (isScrolled && !isDarkMode)
              ? "hover:bg-gray-100 text-gray-600"
              : "hover:bg-white/10 text-white"
          }`}
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>

        <img
          src={assets.searchIcon}
          alt="search"
          className={`${(!isDarkMode && isScrolled) ? "invert" : ""} h-6 cursor-pointer opacity-80 hover:opacity-100 transition-all`}
        />

        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<BookIcon />}
                onClick={() => navigate("/my-bookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button
            onClick={openSignIn}
            className={`px-8 py-2.5 rounded-full ml-2 font-medium transition-all duration-500 shadow-sm ${
              (isScrolled && !isDarkMode)
                ? "text-white bg-black hover:bg-gray-800"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-4 md:hidden">
        {user && (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<BookIcon />}
                onClick={() => navigate("/my-bookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
        <button
          onClick={toggleTheme}
          className={isScrolled ? "text-gray-700 dark:text-gray-200" : "text-white"}
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
        <img
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          src={assets.menuIcon}
          alt="menu"
          className={`${(isDarkMode || !isScrolled) ? "invert" : ""} h-5 cursor-pointer`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl flex flex-col md:hidden items-center justify-center gap-8 font-medium text-gray-800 dark:text-gray-200 transition-all duration-500 origin-top ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <button
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={assets.closeIcon} alt="close-menu" className="h-7 dark:invert" />
        </button>

        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="text-3xl font-playfair hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col w-full px-12 gap-4 mt-4">
          {user ? (
            <button
              className="w-full border border-gray-300 dark:border-slate-700 px-8 py-3 rounded-xl text-lg font-bold hover:bg-gray-50 dark:hover:bg-slate-800 transition-all"
              onClick={() => {
                navigate("/owner");
                setIsMenuOpen(false);
              }}
            >
              Owner Dashboard
            </button>
          ) : (
            <button
              onClick={() => {
                openSignIn();
                setIsMenuOpen(false);
              }}
              className="w-full bg-black dark:bg-primary text-white px-12 py-4 rounded-xl text-lg font-bold shadow-lg hover:bg-gray-800 transition-all"
            >
              Login / Sign Up
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
