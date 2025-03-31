import React from 'react';
import { Link } from 'react-router-dom';
import ShowMoreButton from '../showmore.jsx';
import config from '../config.js';

function Home() {
  return (
    <div className="main">
      <div className="box" id="visas-nu">
        <h1>Visas nu</h1>
        <div className="movies-now" id="nr1">
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/complete.jpg`} alt="Movie title"/>A Complete Unknown</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/arealpain.jpeg`} alt="Movie title"/>A Real Pain</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/brutalist.jpg`} alt="Movie title"/>The Brutalist</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/babygirl.jpeg`} alt="Movie title"/>Babygirl</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/nosferatu.jpg`} alt="Movie title"/>Nosferatu</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/conclave.jpg`} alt="Movie title"/>Conclave</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/emilia.jpg`} alt="Movie title"/>Emilia Perez</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/maria.jpeg`} alt="Movie title"/>Maria</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/sommarboken.jpg`} alt="Movie title"/>Sommarboken</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/mormor.jpeg`} alt="Movie title"/>Min Mormors Miljoner</Link>
        </div>
        <div className="movies-now" id="nr2">
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/complete.jpg`} alt="Movie title"/>A Complete Unknown</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/arealpain.jpeg`} alt="Movie title"/>A Real Pain</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/brutalist.jpg`} alt="Movie title"/>The Brutalist</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/babygirl.jpeg`} alt="Movie title"/>Babygirl</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/nosferatu.jpg`} alt="Movie title"/>Nosferatu</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/conclave.jpg`} alt="Movie title"/>Conclave</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/emilia.jpg`} alt="Movie title"/>Emilia Perez</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/maria.jpeg`} alt="Movie title"/>Maria</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/sommarboken.jpg`} alt="Movie title"/>Sommarboken</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/mormor.jpeg`} alt="Movie title"/>Min Mormors Miljoner</Link>
        </div>
        <ShowMoreButton/>
      </div>

      <div className="box" id="program">
        <h1>Program</h1>
        <div className="days">
          <Link className="button" to="/program">Måndag<br/>13/12</Link>
          <Link className="button" to="/program">Tisdag<br/>13/12</Link>
          <Link className="button" to="/program">Onsdag<br/>13/12</Link>
          <Link className="button" to="/program">Torsdag<br/>3/12</Link>
          <Link className="button" to="/program">Fredag<br/>13/12</Link>
        </div>
      </div>
      <div className="box" id="event">
        <h1>Evenemang</h1>
        <div className="event-type">
          <Link to="/event"><img src={`${config.assetPath}/images/biovino.png`} alt="biovino"/><br/>BioVino</Link>
          <Link to="/event"><img src={`${config.assetPath}/images/barnvagn.jpg`} alt="barnvagnsbio"/><br/>Barnvagnsbio</Link>
          <Link to="/event"><img src={`${config.assetPath}/images/tinybio.jpg`} alt="Småfolketsbio"/><br/>Småfolkets bio</Link>
          <Link to="/event"><img src={`${config.assetPath}/images/Lynch.png`} alt="3x lynch"/><br/>3X Lynch</Link>
        </div>
      </div>

      <div className="box" id="coming">
        <h1>Kommer snart</h1>
        <div className="coming-soon">
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/flickan.jpg`} alt="Flickan med nålen"/><br/>Flickan Med Nålen</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/snail.jpeg`} alt="memoir of a snail"/><br/>Memoir of a Snail</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/bror.jpeg`} alt="Min oväntade bror"/><br/>Min Oväntade Bror</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/september.jpeg`} alt="September 5"/><br/>September 5</Link>
          <Link to="/movieinfo"><img src={`${config.assetPath}/images/fruit.jpeg`} alt="Det heliga trädets frukter"/><br/>Det Heliga Trädets Frukter</Link>
        </div>
      </div>
    </div>
  );
}
export default Home;