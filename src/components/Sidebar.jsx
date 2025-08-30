import { Link } from "react-router";

function Sidebar({ activeSection, onSelectSection, isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <aside className="sidebar w-64 fixed h-screen bg-gradient-to-b from-blue-50 to-indigo-100 border-r border-blue-200 overflow-y-auto">
      {/* Mobile Close Button */}
      <div className="md:hidden flex justify-between items-center p-4 border-b border-blue-200">
        <div className="sidebar-title text-lg font-bold text-blue-900">Pickleball Coach</div>
        <button 
          className="text-blue-600 hover:text-blue-800"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Desktop Title */}
      <div className="hidden md:block sidebar-title p-6 text-lg font-bold text-blue-900 border-b border-blue-200 bg-white bg-opacity-50">
        Get to 5.0+
      </div>

      {/* Navigation - takes remaining space */}
      <nav className="sidebar-nav p-4 flex-1">
        <Link
          to="/section/coaching"
          className={
            activeSection === "coaching" 
              ? "sidebar-link-active bg-blue-600 text-white shadow-md" 
              : "sidebar-link text-blue-800 hover:bg-blue-100 hover:text-blue-900"
          }
        >
          Online Coaching
        </Link>

        <div className="sidebar-section">
          <Link
            to="/section/about"
            className={
              activeSection === "about" 
                ? "sidebar-link-active bg-blue-600 text-white shadow-md" 
                : "sidebar-link text-blue-800 hover:bg-blue-100 hover:text-blue-900"
            }
          >
            About Me
          </Link>
        </div>
      </nav>

      {/* Bottom spacing to ensure full height */}
      <div className="flex-1"></div>
    </aside>
  );
}

export default Sidebar;
