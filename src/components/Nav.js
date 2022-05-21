import { Link } from "react-router-dom";
import "../css/Nav.css";
const Nav = () => {
  return (
    <div>
      <nav className="navbar ">
        <div className="container">
          <Link className="navbar-brand fs-3 text-white " to="/">
            AA.
          </Link>

          <div className="d-flex flex-row justify-content-end">
            <ul className="navbar-nav d-flex flex-row justify-content-md-evenly">
              <li className="mx-3 nav-item">
                <Link className="nav-link " to="/">
                  CV
                </Link>
              </li>
              <li className="mx-3 nav-item">
                <Link className="nav-link " to="/skills">
                  Skills
                </Link>
              </li>
              <li className="mx-3 nav-item">
                <Link className="nav-link " to="/projects">
                  Projects
                </Link>
              </li>
              <li className="mx-3 nav-item">
                <Link className="nav-link " to="/contacts">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
