import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar bg-body-tertiary">
      <form className="container-fluid justify-content-start">
        <NavLink to="/">
          <button className="btn btn-outline-success me-2" type="button">
            Home
          </button>
        </NavLink>

        <NavLink to="/list">
          <button className="btn btn-sm btn-outline-secondary m-1" type="button">
            Items
          </button>
        </NavLink>

        <NavLink to="/new">
          <button className="btn btn-sm btn-outline-secondary m-1" type="button">
            New Item
          </button>
        </NavLink>
      </form>
    </nav>
  );
}
