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
  const activeSection = section ? decodeURIComponent(section) : "coaching";

  // Debug logging
  console.log("Current section:", section);
  console.log("Current activeSection:", activeSection);
  console.log("Current pathname:", window.location.pathname);

  // Set default page only on very first load
  useEffect(() => {
    // Only redirect if we're at the root path with no section parameter
    if (window.location.pathname === "/" && !section && !localStorage.getItem('hasVisited')) {
      localStorage.setItem('hasVisited', 'true');
      navigate("/section/coaching", { replace: true });
    }
  }, []); // Only run once on mount

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
          onSelectSection={() => {}} // This function is no longer needed
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 overflow-y-auto">
          <Sidebar
            activeSection={activeSection}
            onSelectSection={() => {}} // This function is no longer needed
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </div>
      )}

      <main className="main-content md:ml-64 pt-16 md:pt-0">
        {/* Breadcrumbs for main page */}
        <Breadcrumbs
          items={[
            { label: "Online Coaching", value: "coaching" },
            ...(activeSection !== "coaching"
              ? [{ label: "About Me", value: "about" }]
              : []),
          ]}
          onNavigate={(value) => {
            if (value === "coaching") {
              navigate("/section/coaching");
            } else if (value === "about") {
              navigate("/section/about");
            }
          }}
        />

        <div className="page-header text-center">
          <h1>{activeSection === "coaching" ? "Send me a video of your gameplay!" : "About Me"}</h1>
          <p className="text-gray-900">
            {activeSection === "coaching"
              ? "I will send you a FULL analysis of your gameplay, including:\n• What you're doing wrong\n• What you can do to reach the next level"
              : "3.3 -> 5.0 in 7 months. Learn more about my journey."}
          </p>
        </div>

        {/* Content based on section */}
        {(() => {
          console.log("Rendering content for activeSection:", activeSection);
          if (activeSection === "coaching") {
            console.log("Rendering OnlineCoachingSection");
            return <OnlineCoachingSection />;
          } else {
            console.log("Rendering AboutMeSection");
            return <AboutMeSection />;
          }
        })()}
      </main>
    </div>
  );
}

export default App;
