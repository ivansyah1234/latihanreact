import React from 'react';
import '../Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faLightbulb,faBell, } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    return (
      <div>
      <nav className="navbar">
        <div className="navbar-content"> {/* Membungkus judul dan kata lainnya dengan sebuah div */}
    <h1>PUSAT PEMULIHAN ASSET</h1>
    <p>Kejaksaan Republik Indonesia</p>
  </div>
        <ul>
        <li className="enlightenment-menu">
            <Link to="/enlightenment">
              <FontAwesomeIcon icon={faLightbulb} className="icon" /> 
            </Link>
          </li>
        <li className="search-menu">
            <Link to="/search">
              <FontAwesomeIcon icon={faSearch} className="icon" /> 
            </Link>
          </li>
          <li className="notification-menu">
            <Link to="/notification">
              <FontAwesomeIcon icon={faBell} className="icon" /> 
              <span className="notification-badge">0</span>
            </Link>
          </li>
          <li className="admin-menu">
            <Link to="/admin">
            Admin
              <img className="round" src="https://sisbpas.thetechnos.com/app-assets//uploads/user/csmale.png" alt="avatar" height="40" width="40" />
             
            </Link>
          </li>
        </ul>
      </nav>
      <div className="card-container">
      <div className="card-row">
        {/* Kotak 1 */}
        <div className="card-body">
          <div className="card-content">
            <h5>Total Barang Sitaan/Barang Bukti</h5>
            <img src="https://sisbpas.thetechnos.com/app-assets//uploads/beranda/1.png" className="card-img" alt="Barang Sitaan" />
            <button className="btn btn-gradient-primary btn-sm" disabled>Lihat Detail</button>
          </div>
        </div>
        {/* Kotak 2 */}
        <div className="card-body">
          <div className="card-content">
            <h5>Total Barang Rampasan</h5>
            <img src="https://sisbpas.thetechnos.com/app-assets//uploads/beranda/1.png" className="card-img" alt="Barang Sitaan" />
            <button className="btn btn-gradient-primary btn-sm" disabled>Lihat Detail</button>
          </div>
        </div>
        {/* Kotak 3 */}
        <div className="card-body">
          <div className="card-content">
            <h5>Total Nilai Perkiraan Barang Rampasan</h5>
            <img src= "https://sisbpas.thetechnos.com/app-assets//uploads/beranda/2.png"className="card-img" alt="Barang Sitaan" />
            <button className="btn btn-gradient-primary btn-sm" disabled>Lihat Detail</button>
          </div>
        </div>
      </div>
      {/* Baris baru untuk kotak 4, 5, dan 6 */}
      <div className="card-row">
        {/* Kotak 4 */}
        <div className="card-body">
          <div className="card-content">
            <h5>Total Nilai Barang Rampasan Berdasarkan Apprisal</h5>
            <img src="https://sisbpas.thetechnos.com/app-assets//uploads/beranda/3.png" className="card-img" alt="Barang Sitaan" />
            <button className="btn btn-gradient-primary btn-sm" disabled>Lihat Detail</button>
          </div>
        </div>
        {/* Kotak 5 */}
        <div className="card-body">
          <div className="card-content">
            <h5>Total Nilai Pemanfaatan</h5>
            <img src="https://sisbpas.thetechnos.com/app-assets//uploads/beranda/4.png" className="card-img" alt="Barang Sitaan" />
            <button className="btn btn-gradient-primary btn-sm" disabled>Lihat Detail</button>
          </div>
        </div>
        {/* Kotak 6 */}
        <div className="card-body">
          <div className="card-content">
            <h5>Total PNBP Pemanfaatan</h5>
            <img src="https://sisbpas.thetechnos.com/app-assets//uploads/beranda/5.png" className="card-img" alt="Barang Sitaan" />
            <button className="btn btn-gradient-primary btn-sm" disabled>Lihat Detail</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
  }
  

 

export default Navbar;