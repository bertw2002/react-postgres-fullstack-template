import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Breadcrumbs from "./components/Breadcrumbs";
import Sidebar from "./components/Sidebar";
import AboutMeSection from "./components/AboutMeSection";
import OnlineCoachingSection from "./components/OnlineCoachingSection";

function App() {
  const navigate = useNavigate();
  const params = useParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get route parameters
  const { section } = params;
  const activeSection = section ? decodeURIComponent(section) : null;

  const handleSelectSection = (section) => {
    if (section) {
      navigate(`/section/${encodeURIComponent(section)}`);
    } else {
      navigate("/");
    }
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="layout">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-lg shadow-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar
          activeSection={activeSection}
          onSelectSection={handleSelectSection}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 overflow-y-auto">
          <Sidebar
            activeSection={activeSection}
            onSelectSection={handleSelectSection}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>
      )}

      <main className="main-content md:ml-64 pt-16 md:pt-0">
        {/* Breadcrumbs for main page */}
        {!section && (
          <Breadcrumbs
            items={[
              { label: "About Me", value: null },
              ...(activeSection
                ? [{ label: activeSection, value: activeSection }]
                : []),
            ]}
            onNavigate={(value) => {
              if (value === null) {
                handleSelectSection(null);
              }
            }}
          />
        )}

        <div className="page-header">
          <h1>{activeSection ? `${activeSection}` : "Get to 5.0+ in 1 year"}</h1>
          <p className="text-gray-900">
            {activeSection
              ? `Transform your pickleball game with proven coaching methods`
              : "Transform your pickleball game with proven coaching methods"}
          </p>
        </div>

        {/* Content based on section */}
        {section === "coaching" ? (
          <OnlineCoachingSection />
        ) : (
          <AboutMeSection />
        )}
      </main>
    </div>
  );
}

export default App;
