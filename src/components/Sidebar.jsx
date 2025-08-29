import { Link } from "react-router";

function Sidebar({ activeSection, onSelectSection }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">Pickleball Coach</div>

      <nav className="sidebar-nav">
        <Link
          to="/"
          className={
            activeSection === null ? "sidebar-link-active" : "sidebar-link"
          }
        >
          About Me
        </Link>

        <div className="sidebar-section">
          <div className="sidebar-heading">Services</div>
          <Link
            to="/section/coaching"
            className={
              activeSection === "coaching" ? "sidebar-link-active" : "sidebar-link"
            }
          >
            Online Coaching
          </Link>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
