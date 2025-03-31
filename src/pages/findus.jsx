import React from 'react';
import config from '../config.js';

function FindUs() {
return (
	<div className="main">
		<div className="box">
			<div className="content-container">
				<section>
				<h1>Hitta till oss</h1>
				<p>
					Biografen ligger i Umeås kulturhus Väven på plan 4.
				</p>
				
				<h1>Om biblioteket är stängt</h1>
				<p>
					När biblioteket är stängt når du oss via ingångarna till caféet "Fika!" som
					ligger i Väven-huskroppen närmast älven. Därifrån tar du hiss eller trapp till plan 4.
					<br/>Där finns Folkets Bio Umeås biljettkassa och de två salongerna Tystnad och Tagning.
					Alternativ för hen med spänst i benen är att ta den yttre trappan som går på utsidan
					av fasaden vid entrén på Västra Strandgatan 8 A. Trappan leder hela vägen upp till terrassen
					och där finns också en ingång till oss.
				</p>
				</section>
				<img src={`${config.assetPath}/images/map.jpg`} alt="karta" id="map"/>
			</div>
		</div>
	</div>
);
}
export default FindUs;
