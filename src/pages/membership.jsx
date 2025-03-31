import React from 'react';
import { Link } from 'react-router-dom';
import config from '../config';

function Membership() {
	return (
	<div className="main">
		<div className="display-img">
			<img id="medlem" src={`${config.assetPath}/images/member.jpg`} alt="Medlem" />
		</div>
		<div className="box">
			<h1>Medlemskap</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellat delectus reprehenderit,
				quia quasi, ducimus possimus distinctio explicabo inventore nobis iste nesciunt,
				labore ratione autem nam! Cupiditate illum accusantium in!
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellat delectus reprehenderit,
				quia quasi, ducimus possimus distinctio explicabo inventore nobis iste nesciunt,
				labore ratione autem nam! Cupiditate illum accusantium in!
			</p>
			<h3>Aktiv Medlem</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellat delectus reprehenderit,
				quia quasi, ducimus possimus distinctio explicabo inventore nobis iste nesciunt,
				labore ratione autem nam! Cupiditate illum accusantium in!
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellat delectus reprehenderit,
				quia quasi, ducimus possimus distinctio explicabo inventore nobis iste nesciunt,
				labore ratione autem nam! Cupiditate illum accusantium in!
			</p>
				<Link to="https://apply.cardskipper.se/hx8z" className="button">Bli medlem</Link>
		</div>
	</div>
	);
}
export default Membership;