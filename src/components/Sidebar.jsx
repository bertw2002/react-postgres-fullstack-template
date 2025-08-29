import { Link } from "react-router";

function Sidebar({ activeSection, onSelectSection, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const handleNavigation = (section) => {
    onSelectSection(section);
    // Close mobile menu after navigation
    if (setIsMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <aside className="sidebar w-64 h-screen bg-white shadow-lg md:shadow-none overflow-y-auto">
      {/* Mobile Close Button */}
      <div className="md:hidden flex justify-between items-center p-4 border-b border-gray-200">
        <div className="sidebar-title text-lg font-bold text-gray-900">Pickleball Coach</div>
        <button 
          className="text-gray-500 hover:text-gray-700"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Desktop Title */}
      <div className="hidden md:block sidebar-title p-6 text-lg font-bold text-gray-900 border-b border-gray-200">
        Pickleball Coach
      </div>

      <nav className="sidebar-nav p-4">
        <Link
          to="/"
          className={
            activeSection === null ? "sidebar-link-active" : "sidebar-link"
          }
          onClick={() => handleNavigation(null)}
        >
          About Me
        </Link>

        <div className="sidebar-section mt-6">
          <div className="sidebar-heading text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Services
          </div>
          <Link
            to="/section/coaching"
            className={
              activeSection === "coaching" ? "sidebar-link-active" : "sidebar-link"
            }
            onClick={() => handleNavigation("coaching")}
          >
            Online Coaching
          </Link>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
