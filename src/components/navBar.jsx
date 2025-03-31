import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import config from '../config.js';

function Navbar({ theme, toggleTheme }) {
  const vnavRef = useRef(null);
  const dropBtnRef = useRef(null);
  const contentRef = useRef(null);
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);
  const searchBarRef = useRef(null);

  const handleDropClick = () => {
    if (vnavRef.current && contentRef.current) {
      vnavRef.current.style.borderBottomLeftRadius = '0px';
      contentRef.current.style.display = 'block';
    }
  };

  const handleDropMouseLeave = () => {
    if (vnavRef.current && contentRef.current) {
      vnavRef.current.style.borderBottomLeftRadius = '10px';
      contentRef.current.style.display = 'none';
    }
  };

  const handleSearchFocus = () => {
    if (searchBarRef.current) {
      searchBarRef.current.style.boxShadow = '0 0 15px rgba(255, 250, 242, 0.7)';
    }
  };

  const handleSearchBlur = () => {
    if (searchBarRef.current) {
      searchBarRef.current.style.boxShadow = 'none';
    }
  };

  return (
    <div className="banner">
        <nav id="Vnav" ref={vnavRef}>
            <ul>
                <li className="dropdown" ref={dropdownRef} onMouseLeave={handleDropMouseLeave}>
                    <button className="dropbtn" ref={dropBtnRef} onClick={handleDropClick}>Biljetter</button>
                    <div ref={contentRef} className="drop-content">
                        <Link to="/ticketInfo">Biljettinformation</Link><br/>
                        <Link to="/movies">Filmer</Link>
                    </div>
                </li>
                <li><Link to="/event">Evenemang</Link></li>
                <li><Link to="/about">Om Oss</Link></li>
            </ul>
        </nav>

        <div className="logo">
            <Link to="/">
                <img src={`${config.assetPath}/images/logo.png`} alt="logotyp"/>
            </Link>
        </div>

        <i className="material-icons" id="menu">menu</i>

        <nav id="Hnav">
            <Link id="member" to="/membership">Bli medlem</Link>
            <div className="searchbar" ref={searchBarRef}>
                <input type="text" placeholder="Sök film, genrer eller event" ref={searchInputRef} onFocus={handleSearchFocus} onBlur={handleSearchBlur}/>
                <i className="material-icons">search</i>
            </div>
            <button onClick={toggleTheme} className="theme-toggle">
                <i className="material-icons">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</i>
            </button>
        </nav>
    </div>
  );
}

export default Navbar;