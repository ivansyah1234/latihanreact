import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPenToSquare, faLink, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../Sidebar.css';
import { Dashboard } from '@mui/icons-material';

const Sidebar = ({ goToPerkara, goToDaftarPerkara, goToPenyelesaian, goToRekapitulasi }) => {
  const navigate = useNavigate();

  const navigatePerkara = () => {
    navigate('/perkara');
  };

  const navigateDaftarPerkara = () => {
    navigate('/perkara/daftar_perkara');
  };

  return (
    <div className="sidebar">
      <img src="https://sisbpas.thetechnos.com/app-assets/logo.png" alt="Logo SISBPAS" className="sidebar-logo" />
      <p className="logo-text">SISBPAS</p>
      <ul>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faHome} className="icon" /> Beranda
          </a>
        </li>
        <li>
          <a href="#" onClick={navigatePerkara}>
            <FontAwesomeIcon icon={faLink} className="icon" /> Perkara
          </a>
        </li>
        <li>
          <a href="#" onClick={navigateDaftarPerkara}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-disc">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span className="menu-item text-truncate">Daftar Perkara</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={goToPenyelesaian}>
            <FontAwesomeIcon icon={faCheck} className="icon" /> Penyelesaian
          </a>
        </li>
        <li>
          <a href="#" onClick={goToRekapitulasi}>  
            <FontAwesomeIcon icon={faPenToSquare} className="icon" /> Rekapitulasi
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;