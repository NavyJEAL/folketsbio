import React from 'react';
import { Link } from 'react-router-dom';
import config from '../config';

function Movies() {
return (
	<div className="main">
		<div className="box">
			<h1>Aktuella filmer</h1>
			<div className="movies-now">
				<Link to="movieinfo.html"><img src={`${config.assetPath}/images/complete.jpg`} alt="Movie title"/>A Complete Unknown</Link>
				<Link to="movieinfo.html"><img src={`${config.assetPath}/images/arealpain.jpeg`} alt="Movie title"/>A Real Pain</Link>
				<Link to="movieinfo.html"><img src={`${config.assetPath}/images/brutalist.jpg`} alt="Movie title"/>The Brutalist</Link>
				<Link to="movieinfo.html"><img src={`${config.assetPath}/images/babygirl.jpeg`} alt="Movie title"/>Babygirl</Link>
				<Link to="movieinfo.html"><img src={`${config.assetPath}/images/nosferatu.jpg`} alt="Movie title"/>Nosferatu</Link>
				<Link to="movieinfo.html"><img src={`${config.assetPath}/images/conclave.jpg`} alt="Movie title"/>Conclave</Link>
				<Link to="movieinfo.html"><img src={`${config.assetPath}/images/emilia.jpg`} alt="Movie title"/>Emilia Perez</Link>
				<Link to="movieinfo.html"><img src={`${config.assetPath}/images/maria.jpeg`} alt="Movie title"/>Maria</Link>
				<Link to="movieinfo.html"><img src={`${config.assetPath}/images/sommarboken.jpg`} alt="Movie title"/>Sommarboken</Link>
				<Link to="movieinfo.html"><img src={`${config.assetPath}/images/mormor.jpeg`} alt="Movie title"/>Min Mormors Miljoner</Link>
			</div>
		</div>
		<div className="box">
			<h1>Kommande filmer</h1>
			<div className="coming-soon">
				<Link to="movieinfo.html"><img src={`${config.assetPath}/images/flickan.jpg`} alt="Flickan med nålen"/><br/>Flickan Med Nålen</Link>
				<Link to="movieinfo.html"><img src={`${config.assetPath}/images/snail.jpeg`} alt="memoir of a snail"/><br/>Memoir of a Snail</Link>
				<Link to="movieinfo.html"><img src={`${config.assetPath}/images/bror.jpeg`} alt="Min oväntade bror"/><br/>Min Oväntade Bror</Link>
				<Link to="movieinfo.html"><img src={`${config.assetPath}/images/september.jpeg`} alt="September 5"/><br/>September 5</Link>
				<Link to="movieinfo.html"><img src={`${config.assetPath}/images/fruit.jpeg`} alt="Det heliga trädets frukter"/><br/>Det Heliga Trädets Frukter</Link>
			</div>
		</div>
	</div>
);
}
export default Movies;