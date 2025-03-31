import React from 'react';

function Newsletter() {
return (
	<div className="main">
		<div className="box">
			<h1>Vårt nyhetbrev</h1>
			<p>
				Vårt nyhetsbrev innehåller kort information om veckans premiärer, vilka filmer som visas
				för tillfället och information om andra aktuella evenemang på biografen.

				Nyhetsbrevet skickas ut som e-post ungefär en gång i veckan, är helt <b>kostnadsfritt</b> och innehåller
				<b>inga annonser</b>. Din e-postadress kommer inte säljas eller lämnas vidare eller användas till något annat
				än att skicka ut vårt nyhetsbrev.
			</p>
			<h3>Användarvillkor</h3>
			<p>
				När du prenumererar samtycker du till att din mejladress lagras säkert i vår databas tills du väljer att sluta prenumerera. 
				Du kan när som helst säga upp din prenumeration, antingen på den här sidan eller genom att följa den 
				länk som finns längst ner i varje utskick. Säger du upp din prenumeration raderas din mejladress ur 
				vår databas omedelbart och permanent och du kommer inte att ta emot fler nyhetsbrev från oss
			</p>
			<h3>Skriv upp dig för nyhetsbrevet</h3>

			<form>
				<div className="names">
					<input type="text" id="fname" name="fname" value="Förnamn"/>
					<input type="text" id="lname" name="lname" value="Efternamn"/>
				</div>
				<input type="email" id="email" name="email" value="E-postadress"/>
				<input type="submit" id="submit" value="Prenumerera"/>
			</form>
		</div>
	</div>
);
}
export default Newsletter;