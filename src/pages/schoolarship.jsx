import React from 'react';
import config from '../config';

function Schoolarship() {
return (
	<div className="main">
		<div className="display-img">
			<img id="medlem" src={`${config.assetPath}/images/berit.png`}/>
		</div>
		<div className="box">
			<h1>Berit Renströms stipendium</h1>
			<p>
				Berit var Folkets Bio Umeå. <br/><br/>
				Hon var vår historia och hon var vår nutid. Hon värnade om biografen, 
				alla oss som är aktiva i föreningen och alla personer som besöker oss. 
				Hon uppmuntrade alla till att besöka filmfestivaler och filmfester, när 
				och fjärran men allra helst med ett nordligt perspektiv.<br/><br/>

				Stipendiet ska, i Berits anda, uppmuntra till besök vid filmfestivaler, 
				filmfester eller andra liknande sammankomster som stärker gemenskap och 
				filmens betydelse i samvaron.
			</p>

			<h3>Information för att ansöka stipendiumet</h3>
			<ul className="stipendium">
				<li>För att ansöka om Berits Renströms Stipendium behöver du vara medlem i Folkets Bio Umeå.</li>
				<li>Ansökan får ske max en gång per år och medlem.</li>
				<li>Stipendiet kan delas ut vid två tillfällen under året.</li>
				<li>Stipendiet ska täcka hela eller delar av resor, logi och entrébiljetter för en eller flera personer.</li>
				<li>En reseberättelse presenteras efter att stipendieresan genomförts.</li>
				<li>Stipendiet kan sökas under hela verksamhetsåret.</li>
				<li>Styrelsen fattar löpande beslut om stipendiet.</li>
			</ul>
			
			<a href="https://docs.google.com/forms/d/e/1FAIpQLScVB3JWKoJPnasQsRBj-r3ItiuYdMpSFQtMKXv51GeerTQmpg/viewform" className="button" />Ansök här<a/>
			<p>
				Vid frågor om stipendiet, kontakta info@folketsbioumea.se, som förmedlar kontakt till styrelsen.
			</p>
		</div>
	</div>
	);
}
export default Schoolarship;
