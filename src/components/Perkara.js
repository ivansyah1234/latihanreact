import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import '../Perkara.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLightbulb, faBell } from '@fortawesome/free-solid-svg-icons';

// Placeholder functions
const handleSearch = () => {
  // Logika pencarian disini
};

// const initTable = () => {
//   console.log("Initializing table...");
// };

const exportData = (element) => {
  console.log("Exporting data...", element);
};

const printData = (element) => {
  console.log("Printing data...", element);
};

const Perkara = () => {
  useEffect(() => {
    const preventScrollUp = () => {
      if (window.scrollY < 0) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('scroll', preventScrollUp);

    return () => {
      window.removeEventListener('scroll', preventScrollUp);
    };
  }, []);

  return (
    <div>
      <Sidebar />
      <nav className="perkara-navbar">
        <div className="navbar-content">
          <h1>PUSAT PEMULIHAN ASSET</h1>
          <p>Kejaksaan Republik Indonesia</p>
        </div>
        <ul>
          <li className="perkara-enlightenment-menu">
            <Link to="/enlightenment">
              <FontAwesomeIcon icon={faLightbulb} className="icon" />
            </Link>
          </li>
          <li className="perkara-search-menu">
            <Link to="/search">
              <FontAwesomeIcon icon={faSearch} className="icon" />
            </Link>
          </li>
          <li className="perkara-notification-menu">
            <Link to="/notification">
              <FontAwesomeIcon icon={faBell} className="icon" />
              <span className="notification-perkara">0</span>
            </Link>
          </li>
          <li className="perkara-admin-menu">
            <Link to="/admin">
              Admin
              <img className="perkara-round" src="https://sisbpas.thetechnos.com/app-assets//uploads/user/csmale.png" alt="avatar" height="40" width="40" />
            </Link>
          </li>
        </ul>
      </nav>
      </div>
  );
};

export default Perkara;


