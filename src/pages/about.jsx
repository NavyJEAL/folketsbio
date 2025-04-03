import React from 'react';
import config from '../config.js';

function About() {
	return (
	<div className="about-page">
		<div className="main">
			<div className="display-img">
				<img id="tystnad" src={`${config.assetPath}/images/folketsbio.jpg`}alt='Tystnad'/>
			</div>
			<div className="box" id="about-section">
				<h1>Om Folkets Bio Umeå</h1>
				<div className="content-container">
					<section>
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, cupiditate quasi iste itaque hic modi at, nulla ipsum dolorum laudantium esse ea similique eveniet maxime quis expedita nam. Ex, id!</p><br/>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dignissimos labore impedit eos reprehenderit, iusto, accusantium, eum rem fugit inventore blanditiis. Eum, facere quibusdam minus pariatur distinctio deserunt debitis nihil?</p><br/>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quos esse quisquam consequuntur eligendi odit ea quam omnis, delectus repudiandae, officia maiores facere eaque suscipit deleniti iure! Error, officia quod.</p>
					</section>
					<table>
						<tbody>
							<tr>
								<td>Antal platser:</td>
								<td id="svar">135st</td>
							</tr>
							<tr>
								<td>Antal salonger:</td>
								<td id="svar">2 st</td>
							</tr>
							<tr>
								<td>Tillgänlighetsanpassad:</td>
								<td id="svar">Ja</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>	
	</div>
	);
}
export default About;

