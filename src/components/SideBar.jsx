import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar" id="sideBar">
      <div className="d-flex align-items-center mb-4">
        <i className="fa-solid fa-dumbbell me-2 fs-4 text-dark"></i>
        <div>
          <h4 className="fw-bold text-dark mb-0">GymFlow</h4>
          <small className="text-muted">Admin Portal</small>
        </div>
      </div>

      <hr />

      <ul className="nav flex-column gap-2 mt-4">
        <li>
          <NavLink to="/dashboard" className="nav-link">
            <i className="bi bi-house me-3"></i>
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/members" className="nav-link">
            <i className="bi bi-people me-3"></i>
            Members
          </NavLink>
        </li>

        <li>
          <NavLink to="/trainers" className="nav-link">
            <i className="bi bi-person-check me-3"></i>
            Trainers
          </NavLink>
        </li>

        <li>
          <NavLink to="/plans" className="nav-link">
            <i className="bi bi-credit-card me-3"></i>
            Plans
          </NavLink>
        </li>

        <li>
          <NavLink to="/sessions" className="nav-link">
            <i className="bi bi-calendar me-3"></i>
            Sessions
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
