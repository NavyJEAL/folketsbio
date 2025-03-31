import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="contact">
            <h3>Kontakta oss</h3>
            <p>072 - 713 43 40</p><br/>
            <p>info@folketsbioumea.se</p><br/>
            <p>Folkets Bio Umeå,<br/>Västra Strandgatan 11,<br/>Lastintaget, 90326 Umeå</p>
        </div>
        <div className="about">
            <h3>Om oss</h3>
            <Link to="/about">Om Folkets Bio Umeå</Link><br/>
            <Link to="/findus">Hitta till oss</Link><br/>
            <Link to="/access">Tillgänglighet</Link><br/>
            <a href="http://www.vaven.se/sve/boka-lokaler-i-vaven.html">Hyr biografen</a><br/>
            <Link to="/schoolarship">Berits stipendium</Link>
        </div>
        <div className="follow">
            <h3>Följ oss</h3>
            <a href="https://instagram.com/folketsbioumea">Instagram</a><br/>
            <a href="https://facebook.com/folketsbioumea">Facebook</a><br/>
            <Link to="/newsletter">Nyhetsbrev</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;