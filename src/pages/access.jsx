import React from 'react';
import config from '../config';

function Access() {
return (
	<div className="main">
		
		<div className="display-img">
			<img id="ticket" src={`${config.assetPath}/images/tagning.jpg`} alt='tagning'/>
		</div>

		<div className="box">
			<h1>Tillgänglighet</h1>

				<div className="content-container">
					<section className="access">
						<p>
							Vi jobbar aktivt med tillgängligheten och vår biograf är tillgänglighets-anpassad. 
							Undrar du över något eller har du förslag på förbättringar är du alltid välkommen att kontakta oss, 
							antingen via biljettkassan, telefon eller mail. 
						</p>
						<h3>Textade filmer</h3>
						<p>
							Alla våra ordinarie filmer på repertoaren visas i regel med svensk textning. 
							Detta för att tillgängliggöra filmmediet för alla med någon form av hörselnedsättning
							och för att enklare uppfatta vad som sägs.
						</p><br/>
						<p>
							Vissa titlar, specialvisningar och vissa barnfilmer är undantagna då tillgången 
							till filmkopior med svensk text är begränsad. Även äldre filmtitlar som producerats
							innan kravet att filmen ska kunna visas med svensk text för att få produktionsstöd 
							infördes i filmavtalet kan sakna text. Dessa undantag kommuniceras vid respektive 
							visning i vårt program. 
						</p>

						<h3>Syntolkning</h3>
						<p>
							Vi tillhandahåller inte utrustning på biografen, men du som är i behov av syntolkning 
							kan få det via en app i din smarta mobiltelefon eller surfplatta. <br/>Det enda du behöver 
							för att ta del av tjänsten är en app och ett par hörlurar till din smarta mobiltelefon 
							eller surfplatta. 
							Exempel på appar: TillBio, BioPlay, SubTalk eller VoiceVision.
						</p>

						<h4>Före biobesöket:</h4>
						<ol>
							<li>Anslut din mobil eller surfplatta till internet.</li>
							<li>Öppna App Store eller Google Play och sök på "syntolkning".</li>
							<li>Ladda hem valfri app (TillBio, BioPlay, MovieTalk, SubTalk eller VoiceVision).</li>
							<li>Öppna appen och ladda ner ljudspåret till den film du ska se.</li>
							<li>Glöm inte att ta med hörlurar!</li>
						</ol>
						<h4>I biosalongen:</h4>
						<ol>
							<li>Sätt på flygplansläge.</li>
							<li>Öppna appen (TillBio, BioPlay, SubTalk eller VoiceVision).</li>
							<li>Tryck på appens startknapp, och behåll appen igång.</li>
							<li>Syntolkningen kommer igång automatiskt när filmen börjar.</li>
						</ol>
					</section>

					<table className="available">
						<tbody>
							<tr>
								<td>Rullstolsplatser:</td>
								<td id="svar">Ja, 2 st/salong</td>
							</tr>
							<tr>
								<td>Dörröppnare:</td>
								<td id="svar">Ja</td>
							</tr>
							<tr>
								<td>Hiss:</td>
								<td id="svar">Ja</td>
							</tr>
							<tr>
								<td>Hörslinga:</td>
								<td id="svar">Ja</td>
							</tr>
							<tr>
								<td>Ledstång:</td>
								<td id="svar">Ja</td>
							</tr>
							<tr>
								<td>Markerade trappsteg:</td>
								<td id="svar">Ja</td>
							</tr>
							<tr>
								<td>Tillgänglig toalett:</td>
								<td id="svar">Ja</td>
							</tr>
						</tbody>
					</table>
				</div>
		</div>
	</div>
);
}
export default Access;