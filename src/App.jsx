import './App.css';
import React, { useRef } from 'react';
import ShowMoreButton from './showmore.jsx';
import config from './config.js';

function App() {
	const vnavRef = useRef(null);
	const dropBtnRef = useRef(null);
	const contentRef = useRef(null);
	const dropdownRef = useRef(null);
	const searchInputRef = useRef(null);
	const searchBarRef = useRef(null);

	const [theme, setTheme] = React.useState(() => {
		const savedTheme = localStorage.getItem('theme');
		return savedTheme || 'dark';
	  });
	  
	  const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	  };

	  React.useEffect(() => {
		document.body.className = `${theme}-theme`;
	  }, [theme]);
	  
  
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
	<div className={`App ${theme}-theme`}>
	<div className="banner">
			<nav id="Vnav" ref={vnavRef}>
				<ul>
					<li className="dropdown" ref={dropdownRef} onMouseLeave={handleDropMouseLeave}>
						<button className="dropbtn" ref={dropBtnRef} onClick={handleDropClick}>Biljetter</button>
						<div ref={contentRef} className="drop-content">
							<a href="./ticketInfo.html">Biljettinformation</a><br/>
							<a href="./movies.html">Filmer</a>
						</div>
					</li>
					<li><a href="./event.html">Evenemang</a></li>
					<li><a href="./about.html">Om Oss</a></li>
				</ul>
			</nav>

		<div className="logo">
			<a href={config.basePath}>
			<img src={`${config.assetPath}/images/logo.png`} alt="logotyp"/></a>
		</div>

		<i className="material-icons" id="menu">menu</i>

			<nav id="Hnav">
				<a id="member" href="./membership.html">Bli medlem</a>
				<div className="searchbar" ref={searchBarRef}>
					<input type="text" placeholder="Sök film, genrer eller event" ref={searchInputRef} onFocus={handleSearchFocus} onBlur={handleSearchBlur}/>
					<i className="material-icons">search</i>
				</div>
				<button onClick={toggleTheme} className="theme-toggle">
          			<i className="material-icons">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</i>
        		</button>
			</nav>
	</div>

	<div className="main">
		<div className="box" id="visas-nu">
			<h1>Visas nu</h1>
			<div className="movies-now" id="nr1">
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/complete.jpg`} alt="Movie title"/>A Complete Unknown</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/arealpain.jpeg`} alt="Movie title"/>A Real Pain</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/brutalist.jpg`} alt="Movie title"/>The Brutalist</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/babygirl.jpeg`} alt="Movie title"/>Babygirl</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/nosferatu.jpg`} alt="Movie title"/>Nosferatu</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/conclave.jpg`} alt="Movie title"/>Conclave</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/emilia.jpg`} alt="Movie title"/>Emilia Perez</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/maria.jpeg`} alt="Movie title"/>Maria</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/sommarboken.jpg`} alt="Movie title"/>Sommarboken</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/mormor.jpeg`} alt="Movie title"/>Min Mormors Miljoner</a>
			</div>
			<div className="movies-now" id="nr2">
			<a href="movieinfo.html"><img src={`${config.assetPath}/images/complete.jpg`} alt="Movie title"/>A Complete Unknown</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/arealpain.jpeg`} alt="Movie title"/>A Real Pain</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/brutalist.jpg`} alt="Movie title"/>The Brutalist</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/babygirl.jpeg`} alt="Movie title"/>Babygirl</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/nosferatu.jpg`} alt="Movie title"/>Nosferatu</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/conclave.jpg`} alt="Movie title"/>Conclave</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/emilia.jpg`} alt="Movie title"/>Emilia Perez</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/maria.jpeg`} alt="Movie title"/>Maria</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/sommarboken.jpg`} alt="Movie title"/>Sommarboken</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/mormor.jpeg`} alt="Movie title"/>Min Mormors Miljoner</a>
			</div>
			<ShowMoreButton/>
		</div>

		<div className="box" id="program">
				<h1>Program</h1>
				<div className="days">
					<a className="button" href="program.html">Måndag<br/>13/12</a>
					<a className="button" href="program.html">Tisdag<br/>13/12</a>
					<a className="button" href="program.html">Onsdag<br/>13/12</a>
					<a className="button" href="program.html">Torsdag<br/>3/12</a>
					<a className="button" href="program.html">Fredag<br/>13/12</a>
				</div>
		</div>
		<div className="box" id="event">
			<h1>Evenemang</h1>
			<div className="event-type">
				<a href="./event.html"><img src={`${config.assetPath}/images/biovino.png`} alt="biovino"/><br/>BioVino</a>
				<a href="./event.html"><img src={`${config.assetPath}/images/barnvagn.jpg`} alt="barnvagnsbio"/><br/>Barnvagnsbio</a>
				<a href="./event.html"><img src={`${config.assetPath}/images/tinybio.jpg`} alt="Småfolketsbio"/><br/>Småfolkets bio</a>
				<a href="./event.html"><img src={`${config.assetPath}/images/Lynch.png`} alt="3x lynch"/><br/>3X Lynch</a>
			</div>
		</div>

		<div className="box" id="coming">
			<h1>Kommer snart</h1>
			<div className="coming-soon">
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/flickan.jpg`} alt="Flickan med nålen"/><br/>Flickan Med Nålen</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/snail.jpeg`} alt="memoir of a snail"/><br/>Memoir of a Snail</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/bror.jpeg`} alt="Min oväntade bror"/><br/>Min Oväntade Bror</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/september.jpeg`} alt="September 5"/><br/>September 5</a>
				<a href="movieinfo.html"><img src={`${config.assetPath}/images/fruit.jpeg`} alt="Det heliga trädets frukter"/><br/>Det Heliga Trädets Frukter</a>
			</div>
		</div>
	</div>
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
					<a href="./about.html">Om Folkets Bio Umeå</a><br/>
					<a href="./findus.html">Hitta till oss</a><br/>
					<a href="./access.html">Tillgänglighet</a><br/>
					<a href="http://www.vaven.se/sve/boka-lokaler-i-vaven.html">Hyr biografen</a><br/>
					<a href="./schoolarship.html">Berits stipendium</a>
			</div>
			<div className="follow">
					<h3>Följ oss</h3>
					<a href="https://instagram.com/folketsbioumea">Instagram</a><br/>
					<a href="https://facebook.com/folketsbioumea">Facebook</a><br/>
					<a href="./newsletter.html">Nyhetsbrev</a>
			</div>
		</div>
	</footer>
</div>
);
}

export default App;
