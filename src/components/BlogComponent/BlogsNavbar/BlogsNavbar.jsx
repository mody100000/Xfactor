import styles from "./BlogsNavbar.module.css";
import { TiThMenu } from "react-icons/ti";

const BlogsNavbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles.customNavs}`}>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#basic-navbar-nav"
        aria-controls="basic-navbar-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <TiThMenu className={styles.toggle} size={25} />
      </button>

      <div className="collapse navbar-collapse" id="basic-navbar-nav">
        <ul className="navbar-nav w-100 d-flex justify-content-between">
          <li className="nav-item">
            <a className={`nav-link fs-5 ${styles.link}`} href="#home">Parents</a>
          </li>

          <li className="nav-item dropdown">
            <a className={`nav-link dropdown-toggle fs-5 ${styles.link}`} href="#" id="coaches-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Coaches
            </a>
            <ul className="dropdown-menu" aria-labelledby="coaches-dropdown">
              <li><a className="dropdown-item" href="#action/3.1">Action</a></li>
              <li><a className="dropdown-item" href="#action/3.2">Another action</a></li>
              <li><a className="dropdown-item" href="#action/3.3">Something else here</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className={`nav-link dropdown-toggle fs-5 ${styles.link}`} href="#" id="training-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Training
            </a>
            <ul className="dropdown-menu" aria-labelledby="training-dropdown">
              <li><a className="dropdown-item" href="#action/3.1">Action</a></li>
              <li><a className="dropdown-item" href="#action/3.2">Another action</a></li>
              <li><a className="dropdown-item" href="#action/3.3">Something else here</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className={`nav-link dropdown-toggle fs-5 ${styles.link}`} href="#" id="recruiting-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Recruiting
            </a>
            <ul className="dropdown-menu" aria-labelledby="recruiting-dropdown">
              <li><a className="dropdown-item" href="#action/3.1">Action</a></li>
              <li><a className="dropdown-item" href="#action/3.2">Another action</a></li>
              <li><a className="dropdown-item" href="#action/3.3">Something else here</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className={`nav-link dropdown-toggle fs-5 ${styles.link}`} href="#" id="testimonials-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Testimonials
            </a>
            <ul className="dropdown-menu" aria-labelledby="testimonials-dropdown">
              <li><a className="dropdown-item" href="#action/3.1">Action</a></li>
              <li><a className="dropdown-item" href="#action/3.2">Another action</a></li>
              <li><a className="dropdown-item" href="#action/3.3">Something else here</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className={`nav-link dropdown-toggle fs-5 ${styles.link}`} href="#" id="videos-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Videos
            </a>
            <ul className="dropdown-menu" aria-labelledby="videos-dropdown">
              <li><a className="dropdown-item" href="#action/3.1">Action</a></li>
              <li><a className="dropdown-item" href="#action/3.2">Another action</a></li>
              <li><a className="dropdown-item" href="#action/3.3">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default BlogsNavbar;