import React from 'react';
import { Link } from 'react-router-dom';

function MovieInfo() {
	return (
	<div className="main">
		<iframe 
			src="https://www.youtube.com/embed/FdV-Cs5o8mc" title="A COMPLETE UNKNOWN | Official Trailer | Searchlight Pictures" 
			frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
			referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
		</iframe>
		<div className="box">
			<h1>A Complete Unknown</h1>
			<div className="tags">
				<h4>Drama</h4>
				<h4>Längd: 140 min</h4>
				<h4>Åldersgräns: Från 7 år</h4>
			</div>
			<br/><p>
				New York, tidigt 60-tal. Mot bakgrund av en pulserande musikscen och en kaotisk 
				kulturrevolution kommer en 19-åring från Minnesota till West Village med sin 
				gitarr i ena handen och sin häpnadsväckande talang i den andra - mannen som 
				ska förändra amerikansk musik för alltid. På sin väg mot framgång lär han 
				känna de som ska komma att stå honom närmast. Han blir frustrerad av folkmusikrörelsen, 
				vägrar att låta sig definieras och fattar ett kontroversiellt beslut som genljuder 
				i den kulturella världen. Timothée Chalamet spelar - och sjunger - 
				som Bob Dylan i James Mangolds A COMPLETE UNKNOWN, den fantastiska, sanna historien 
				om en av världens mest legendariska sångare och låtskrivare.
			</p>
			<div className="less">
				<button className="button">Visa mindre</button>
			</div>
			<h2>Biljetter</h2>
			<div className="days">
				<Link to="https://bio.se/bokning/cinemaId/13192/sessionId/9660">Fredag 21/2<br/>14:45<h5>98 av 100</h5></Link>
				<Link to="https://bio.se/bokning/cinemaId/13192/sessionId/9660">Fredag 21/2<br/>20:00<h5>67 av 100</h5></Link>
				<Link to="https://bio.se/bokning/cinemaId/13192/sessionId/9660">Lördag 22/2<br/>14:45<h5>92 av 100</h5></Link>
				<Link to="https://bio.se/bokning/cinemaId/13192/sessionId/9660">Lördag 22/2<br/>20:00<h5>52 av 100</h5></Link>
				<Link to="https://bio.se/bokning/cinemaId/13192/sessionId/9660">Söndag 23/2<br/>19:45<h5>78 av 100</h5></Link>
			</div>
		</div>
	</div>
	);
}
export default MovieInfo;