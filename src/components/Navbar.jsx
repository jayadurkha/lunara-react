import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Lunara" className="logo-img" />
        </Link>

        <h1 className="mb-0">Lunara</h1>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-semibold">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/collections">Collection</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
