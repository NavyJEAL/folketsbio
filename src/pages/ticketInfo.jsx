import React from 'react';
import config from '../config';

function TicketInfo() {
	return (
		<div className="main">
			<div className="display-img">
				<img id="ticket" src={`${config.assetPath}/images/tickets.jpg`} alt="Biljetter" />
			</div>

			<div className="box">
				<h1>Köpa biljetter</h1>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error voluptatum quia ullam et possimus.
					Ipsam voluptate dolorum quam nisi sapiente labore totam animi nostrum laboriosam,
					assumenda iure quia exercitationem nihil?</p>
				<h1>Presentkort</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum, vero voluptate laborum 
					laboriosam eligendi minima in distinctio, officiis aut illo tenetur consequatur dicta pariatur
					nobis quam veritatis esse. Perspiciatis.</p>
				<h1>Folkets biokort</h1>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quae reprehenderit, 
					consequatur deserunt maxime aliquid accusantium fuga quam dolorem labore sunt doloremque 
					quis omnis adipisci! Illum iusto facilis praesentium exercitationem!</p>
				<h1>Avboka biljetter</h1>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste veritatis quam tenetur optio sequi,
					quos a quidem porro maiores ratione maxime libero quia quis veniam hic eius inventore, 
					aut exercitationem.</p>
			</div>
		</div>
);
}
export default TicketInfo;