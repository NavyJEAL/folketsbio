import React from 'react';
import config from '../config';
import { Link } from "react-router-dom";

function Event() {
	return (
		<div className="main">
			<div className="box">
				<h1>Kommande Evenemang</h1>
				<h2>Bio-Vino <i className="material-icons">expand_less</i></h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti debitis quae aperiam maiores non praesentium deleniti
					repellendus repellat repudiandae voluptate laborum itaque placeat modi commodi esse, beatae eligendi dolor iste?
				</p>
				<div className="biovino">
					<Link to="/movieinfo"><img src={`${config.assetPath}/images/sommarboken.jpg`} alt="Movie title"/></Link>
					<div>
						<h4>Sommarboken</h4>
						<p>Torsdag 20/2</p>
						<p>400 kr</p>
						<Link to="https://gotthardskrog.se" className="button">Boka Bio-Vino</Link>
					</div>

					<Link to="/movieinfo"><img src={`${config.assetPath}/images/complete.jpg`} alt="Movie title"/></Link>
					<div>
						<h4>A Complete Unknown</h4>
						<p>Torsdag 27/2</p>
						<p>400 kr</p>
						<Link to="https://gotthardskrog.se" className="button">Boka Bio-Vino</Link>
					</div>

					<Link to="/movieinfo"><img src={`${config.assetPath}/images/maria.jpeg`} alt="Movie title"/></Link>
					<div>
						<h4>Maria</h4>
						<p>Torsdag 6/3</p>
						<p>400 kr</p>
						<Link to="https://gotthardskrog.se" className="button">Boka Bio-Vino</Link>
					</div>
				</div>
				<button className="button" id="visa-fler">Visa fler</button>
				<h2>Barnvagnsbio <i className="material-icons">expand_more</i></h2>
				<h2>Småfolketsbio <i className="material-icons">expand_more</i></h2>
				<h2>Klassiker <i className="material-icons">expand_more</i></h2>
			</div>
		</div>
	);
}
export default Event;