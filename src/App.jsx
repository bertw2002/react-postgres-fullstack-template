import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Breadcrumbs from "./components/Breadcrumbs";
import Sidebar from "./components/Sidebar";
import AboutMeSection from "./components/AboutMeSection";
import OnlineCoachingSection from "./components/OnlineCoachingSection";

function App() {
  const navigate = useNavigate();
  const params = useParams();
  const [activeSection, setActiveSection] = useState(null);

  // Get route parameters
  const { section } = params;
  const activeSection = section ? decodeURIComponent(section) : null;

  const handleSelectSection = (section) => {
    if (section) {
      navigate(`/section/${encodeURIComponent(section)}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="layout">
      <Sidebar
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
      />

      <main className="main-content">
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
