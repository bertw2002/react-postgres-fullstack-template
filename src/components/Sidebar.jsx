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
    <aside className="sidebar w-64 h-screen bg-white border-r border-gray-200 overflow-y-auto">
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
        <button
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors font-sans text-sm ${
            activeSection === "coaching" ? "bg-blue-50 text-blue-800 font-medium" : "text-gray-900 hover:bg-blue-50"
          }`}
          onClick={() => handleNavigation("coaching")}
        >
          Online Coaching
        </button>

        <div className="sidebar-section mt-6">
          <button
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors font-sans text-sm ${
              activeSection !== "coaching" ? "bg-blue-50 text-blue-800 font-medium" : "text-gray-900 hover:bg-blue-50"
            }`}
            onClick={() => handleNavigation("about")}
          >
            About Me
          </button>
        </div>
      </nav>

      <div className="mt-auto pt-6 px-6 pb-6">
        <div className="text-xs text-gray-900">
          Powered by
          <br />
          <a
            href="https://cloudflare.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:underline"
          >
            Cloudflare
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
